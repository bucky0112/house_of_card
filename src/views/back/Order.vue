<template>
  <div>
    <div class="container">
      <div>
        <table class="table mt-4 table-hover">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">下單時間</th>
              <th scope="col">購買款項</th>
              <th scope="col">付款方式</th>
              <th scope="col">應付金額</th>
              <th scope="col">是否付款</th>
              <th scope="col">客戶資料</th>
            </tr>
          </thead>
          <tbody v-if="orders.length">
            <tr v-for="(item, i) in orders" :key="i">
              <td scope="row">{{ i + 1 }}</td>
              <td scope="row">{{ item.created.datetime }}</td>
              <td scope="row">
                <ul class="list-unstyled">
                  <li
                    v-for="(item, i) in item.products"
                    :key="i"
                  >{{ item.product.title }} 數量：{{ item.quantity }} {{ item.product.unit }}
                  </li>
                </ul>
              </td>
              <td scope="row">{{ item.payment }}</td>
              <td scope="row">{{ item.amount | thousands }}</td>
              <td>
                <div class="custom-control custom-switch">
                  <input
                    :id="item.id"
                    v-model="item.paid"
                    type="checkbox"
                    class="custom-control-input"
                    @change="updatePaid(item)"
                  />
                  <label class="custom-control-label" :for="item.id">
                    <strong v-if="item.paid" class="text-success">已付款</strong>
                    <span v-else class="text-muted">尚未付款</span>
                  </label>
                </div>
              </td>
              <td><b-button variant="info" @click="openModal(item)">觀看</b-button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <Pagination :pages="pagination" @emit-pages="getOrders"></Pagination>
    <OrderModal ref="orderModal"></OrderModal>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue';
import OrderModal from '@/components/back/order/OrderModal.vue';
import Toast from '@/plugins/Toast';

export default {
  components: {
    Pagination,
    OrderModal,
  },
  data() {
    return {
      orders: {},
      order: {
        user: {},
      },
      pagination: {},
    };
  },
  created() {
    this.getOrders();
  },
  methods: {
    getOrders(page = 1) {
      const loader = this.$loading.show();
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/orders?page=${page}`;
      this.axios(api)
        .then((res) => {
          this.orders = res.data.data;
          this.pagination = res.data.meta.pagination;
          loader.hide();
        })
        .catch(() => {
          loader.hide();
        });
    },
    updatePaid(item) {
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/orders/${item.id}/paid`;
      const loader = this.$loading.show();
      if (!item.paid) {
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/orders/${item.id}/unpaid`;
      }
      this.axios
        .patch(api, item.id)
        .then(() => {
          loader.hide();
          this.getOrders();
          Toast.fire({
            title: '付款狀態已修改',
            icon: 'success',
          });
        })
        .catch(() => {
          loader.hide();
        });
    },
    openModal(item) {
      this.$refs.orderModal.getOrder(item.id);
      this.$bvModal.show('orderModal');
    },
  },
};
</script>
