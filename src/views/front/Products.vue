<template>
  <div class="products">
    <loading :active.sync="isLoading"></loading>
    <b-container class="mt-md-5 mt-3 mb-7">
      <b-card-group
        class="card-group"
        v-for="row in formattedProducts"
        :key="row.id"
        deck
      >
        <b-card
          border-variant="light"
          :key="filterCategory.id"
          v-for="filterCategory in row"
          :header="filterCategory.title"
          img-top
          class="card mb-4"
        >
          <router-link :to="`/product/${filterCategory.id}`">
            <b-card-img :src="filterCategory.imageUrl[0]"></b-card-img>
          </router-link>
          <b-badge variant="dark" class="float-right ml-2">{{ filterCategory.category }}</b-badge>
          <b-card-text>
            <div v-if="!filterCategory.price" class="h5">
              {{ filterCategory.origin_price | thousands }}
            </div>
            <!-- 反之，就顯示 origin_price 與 price -->
            <div v-else>
              <del class="h6">{{ filterCategory.origin_price | thousands }}</del>
              <div class="h5 text-primary">{{ filterCategory.price | thousands }}</div>
            </div>
          </b-card-text>
          <template v-slot:footer>
            <b-button pill
              variant="outline-primary"
              @click="addToCart(filterCategory.id)">加到購物車</b-button>
          </template>
        </b-card>
      </b-card-group>
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
    formattedProducts() {
      return this.filterCategory.reduce((c, n, i) => {
        if (i % 4 === 0) c.push([]);
        c[c.length - 1].push(n);
        return c;
      }, []);
    },
  },
};
</script>

<style lang="scss" scoped>
.card-group .card {
  max-width: 25%;
}
// .card-deck .card {
//   max-width: calc(25% -30px);
// }
</style>
