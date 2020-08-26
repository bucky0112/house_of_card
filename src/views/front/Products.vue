<template>
  <div class="products">
    <loading :active.sync="isLoading"/>
    <b-container>
      <div class="row">
        <div class="col-12 col-md-6 col-lg-3" v-for="(item, i) in filterCategory" :key="i">
          <b-card class="mt-md-5 mt-3 mb-8">
            <template v-slot:header>
              <h4 class="mb-0">{{ item.title }}</h4>
            </template>
            <router-link :to="`/product/${item.id}`">
              <b-card-text>
                <div
                  style="
                  height: 200px;
                  background-size: cover;
                  background-position: center;"
                  class="mb-4"
                  :style="{ backgroundImage: `url(${ item.imageUrl[0] })` }"
                ></div>
                <b-badge variant="secondary" class="float-right">{{ item.category }}</b-badge>
                <div class="d-flex justify-content-between mb-0">
                  <div class="price text-success" v-if="!item.price">
                    <h5 class="mt-4">{{ item.origin_price | thousands }}</h5>
                  </div>
                  <div v-else>
                    <del class="h6">{{ item.origin_price | thousands }}</del>
                    <div class="h5 text-primary">{{ item.price | thousands }}</div>
                  </div>
                </div>
              </b-card-text>
            </router-link>
            <template v-slot:footer class="bg-white p-0 border-0">
              <b-button variant="outline-primary"
                class="btn-block"
                @click="addToCart(item.id)">
                <i class="fas fa-shopping-cart"></i>
                加到購物車
              </b-button>
            </template>
          </b-card>
        </div>
      </div>
    </b-container>
    <Pagination :pages="pagination" @emitPages="getProducts"></Pagination>
    <Footer></Footer>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue';
import Footer from '@/components/front/Footer.vue';

export default {
  name: 'Products',
  components: {
    Pagination,
    Footer,
  },
  data() {
    return {
      products: [],
      isLoading: false,
      category: 'all',
      pagination: {},
      tempProduct: {},
      status: {
        loadingItem: '',
      },
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts(page = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/products?page=${page}`;
      this.axios
        .get(url)
        .then((res) => {
          this.products = res.data.data;
          this.pagination = res.data.meta.pagination;
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
          this.$toast.error('出了點問題，請再試一次。');
        });
    },
    addToCart(id, quantity = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`;
      const cart = {
        product: id,
        quantity,
      };
      this.axios
        .post(url, cart)
        .then(() => {
          this.$bus.$emit('updateCart');
          this.isLoading = false;
          this.$toast.success('已加入購物車～');
        })
        .catch((err) => {
          this.isLoading = false;
          this.$toast.error(`${err.response.data.errors}`);
        });
    },
  },
  computed: {
    filterCategory() {
      if (this.category === 'all') {
        return this.products;
      }
      return this.products.filter((item) => item.category === this.category);
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  color:inherit;
  text-decoration: none;
}
</style>
