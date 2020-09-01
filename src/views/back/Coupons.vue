<template>
  <div>
    <div class="container">
      <div>
        <div class="text-right mt-4">
          <button
            type="button"
            class="btn btn-primary"
            @click="openModal('new')"
            ref="btnShow" >建立新的優惠券</button>
          <table class="table mt-4 table-hover">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">名稱</th>
                <th scope="col">折扣百分比</th>
                <th scope="col">到期日</th>
                <th scope="col">是否啟用</th>
                <th scope="col">編輯</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) in coupons" :key="i">
                <th scope="row">{{ i + 1 }}</th>
                <td>{{ item.title }}</td>
                <td>{{ item.percent }}</td>
                <td>{{ item.deadline.datetime }}</td>
                <td>
                  <span v-if="item.enabled" class="text-success">啟用</span>
                  <span v-else class="text-danger">未啟用</span>
                </td>
                <td>
                  <div class="btn-group btn-group-sm" role="group">
                    <button
                      type="button"
                      class="btn btn-outline-primary"
                      @click="openModal('edit', item)"
                    >編輯</button>
                    <button
                      type="button"
                      class="btn btn-outline-danger"
                      @click="openModal('delete', item)"
                    >刪除</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <Pagination :pages="pagination" @emitPages="getCoupons"></Pagination>
    <CouponModal ref="couponModal" :isNew="isNew" @update="getCoupons"></CouponModal>
    <DelCouponModal :temp-coupon="tempCoupon" @update="getCoupons"></DelCouponModal>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue';
import CouponModal from '@/components/back/coupon/CouponModal.vue';
import DelCouponModal from '@/components/back/coupon/DelCouponModal.vue';

export default {
  components: {
    Pagination,
    CouponModal,
    DelCouponModal,
  },
  data() {
    return {
      coupons: {},
      tempCoupon: {
        title: '',
        percent: 100,
        deadline_at: 0,
        enabled: false,
        code: '',
      },
      isNew: false,
      pagination: {},
    };
  },
  created() {
    this.getCoupons();
  },
  methods: {
    getCoupons(page = 1) {
      const loader = this.$loading.show();
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/coupons?page=${page}`;
      this.axios(api)
        .then((res) => {
          this.coupons = res.data.data;
          this.pagination = res.data.meta.pagination;
          loader.hide();
        })
        .catch(() => {
          loader.hide();
        });
    },
    openModal(isNew, item) {
      switch (isNew) {
        case 'new':
          this.$refs.tempCoupon = {};
          this.isNew = true;
          this.$bvModal.show('couponModal');
          break;
        case 'edit':
          this.$refs.couponModal.getCoupon(item.id);
          this.isNew = false;
          break;
        case 'delete':
          this.tempCoupon = { ...item };
          this.$bvModal.show('delCouponModal');
          break;
        default:
          break;
      }
    },
  },
};
</script>
