<template>
  <div>
    <loading :active.sync="isLoading" />
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <ProgressBar></ProgressBar>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-10">
          <h3 class="font-weight-bold mb-4 pt-3">確認訂單</h3>
        </div>
      </div>
      <div class="justify-content-center pb-5">
        <div class="border p-4 mb-4">
          <b-table-simple responsive fixed hover>
            <b-thead head-variant="dark">
              <b-th>購買品項</b-th>
              <b-th>數量</b-th>
              <b-th>金額</b-th>
            </b-thead>
            <b-tbody>
              <b-tr v-for="(item, i) in order.products" :key="i">
                <b-td class="border-0 px-0 font-weight-normal py-4">
                  <img
                    :src="item.product.imageUrl[0]"
                    :alt="item.product.title"
                    style="width: 50px; height: 50px; object-fit: cover;"
                  />
                  <p class="mb-0 font-weight-bold ml-3 d-inline-block">{{ item.product.title }}</p>
                </b-td>
                <b-td class="align-middle">{{ item.quantity }} {{ item.product.unit }}</b-td>
                <b-td class="align-middle">{{ item.product.price | thousands }}</b-td>
              </b-tr>
              <b-tr>
                <b-td></b-td>
                <b-th>總金額：</b-th>
                <b-th>{{ order.amount | thousands }}</b-th>
              </b-tr>
            </b-tbody>
          </b-table-simple>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import ProgressBar from '@/components/front/ProgressBar.vue';
import Footer from '@/components/front/Footer.vue';

export default {
  components: {
    ProgressBar,
    Footer,
  },
  data() {
    return {
      isLoading: false,
      order: {},
      orderId: '',
    };
  },
  created() {
    this.orderId = this.$route.params.id;
    this.getOrder();
  },
  methods: {
    getOrder() {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/orders/${this.orderId}`;
      this.isLoading = true;
      this.axios
        .get(url)
        .then((res) => {
          this.order = res.data.data;
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>
