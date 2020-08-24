<template>
  <div>
    <loading :active.sync="isLoading" />
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <step-progress :steps="mySteps" :current-step="currentStep"
          icon-class="fa fa-check" active-color="#53B883"/>
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
                <b-td><strong>折扣：</strong></b-td>
                <b-td v-if="!order.coupon">
                  <p>0</p>
                </b-td>
                <b-td v-else>
                  <strong>{{ discountNum | thousands }}</strong>
                </b-td>
              </b-tr>
              <b-tr>
                <b-td></b-td>
                <b-td><strong>總計：</strong></b-td>
                <b-td><strong> {{ order.amount | thousands }}</strong></b-td>
              </b-tr>
            </b-tbody>
          </b-table-simple>
          <b-table-simple class="mt-5" responsive fixed>
            <b-tbody>
              <b-tr>
                <b-th>訂購人姓名</b-th>
                <b-td>{{ order.user.name }}</b-td>
              </b-tr>
              <b-tr>
                <b-th>訂購人 Email</b-th>
                <b-td>{{ order.user.email }}</b-td>
              </b-tr>
              <b-tr>
                <b-th>訂購人電話</b-th>
                <b-td>{{ order.user.tel }}</b-td>
              </b-tr>
              <b-tr>
                <b-th>訂購人地址</b-th>
                <b-td>{{ order.user.address }}</b-td>
              </b-tr>
              <b-tr>
                <b-th>訂購人付款方式</b-th>
                <b-td>{{ order.payment }}</b-td>
              </b-tr>
              <b-tr v-if="order.message">
                <b-th>建議與意見</b-th>
                <b-td>{{ order.message }}</b-td>
              </b-tr>
            </b-tbody>
          </b-table-simple>
          <b-button variant="dark" @click="payingOrder">確認付款</b-button>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/front/Footer.vue';

export default {
  components: {
    Footer,
  },
  data() {
    return {
      mySteps: ['購物車', '填寫資料', '確認訂單'],
      currentStep: 2,
      isLoading: false,
      order: {
        coupon: null,
        amount: 0,
        user: {
          address: '',
          email: '',
          name: '',
          tel: '',
        },
      },
      orderId: '',
    };
  },
  created() {
    this.orderId = this.$route.params.id;
    this.getOrder();
  },
  computed: {
    originTotalPrice() {
      return this.order.products.reduce(
        (accumulator, i) => accumulator + i.product.price * i.quantity, 0,
      );
    },
    discountNum() {
      return Math.round(this.originTotalPrice * ((100 - this.order.coupon.percent) / 100));
    },
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
          this.$toast.error('出了點問題，請再試一次。');
        });
    },
    payingOrder() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/orders/${this.orderId}/paying`;
      this.axios
        .post(url)
        .then(() => {
          this.isLoading = false;
          this.$toast.success('謝謝您的購買，會儘快幫您寄出商品～');
          this.$router.push('/success');
        })
        .catch(() => {
          this.isLoading = false;
          this.$toast.error('出了點問題，請再試一次。');
        });
    },
  },
};
</script>
