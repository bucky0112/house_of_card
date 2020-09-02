<template>
  <div class="products">
    <b-container style="margin-top: 100px;">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-white px-0">
          <li class="breadcrumb-item">
            <router-link to="/" class="text-muted">首頁</router-link>
          </li>
          <li class="breadcrumb-item">
            全部商品
          </li>
        </ol>
      </nav>
      <div>
        <b-button-group>
          <b-button
            variant="dark"
            @click.prevent="chooseCategory = ''"
            :class="{ active: chooseCategory === '' }"
          >
            全部遊戲
          </b-button>
          <b-button
            variant="dark"
            v-for="(item, i) in categories" :key="i"
            @click.prevent="chooseCategory = item"
            :class="{ active: item === chooseCategory }"
          >
            {{ item }}
          </b-button>
        </b-button-group>
      </div>
      <div class="row">
        <div class="col-12 col-md-6 col-lg-3" v-for="(item, i) in filterCategory" :key="i">
          <b-card class="mt-md-5 mt-3 mb-8" border-variant="light">
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
                  <div class="price text-success" v-if="!item.origin_price">
                    <h5 class="mt-4" style="color: #353C43;">{{ item.price | thousands }}</h5>
                  </div>
                  <div v-else>
                    <del class="h6" style="color: red;">{{ item.origin_price | thousands }}</del>
                    <div class="h5">{{ item.price | thousands }}</div>
                  </div>
                </div>
              </b-card-text>
            </router-link>
            <template v-slot:footer class="bg-white p-0 border-0">
              <b-button variant="primary"
                class="btn-block"
                :disabled="status.loadingItem === item.id"
                @click="addToCart(item.id)">
                <i class="spinner-border spinner-border-sm"
                  v-if="status.loadingItem === item.id"
                ></i>
                <i class="fas fa-shopping-cart"></i>
                加到購物車
              </b-button>
            </template>
          </b-card>
        </div>
      </div>
    </b-container>
    <Pagination :pages="pagination" @emitPages="getProducts" class="mt-5"/>
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
      categories: ['家庭遊戲', '派對遊戲', '策略遊戲', '主題遊戲', '戰爭遊戲', '兒童遊戲', '抽象遊戲', '客製遊戲'],
      chooseCategory: '',
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
      const loader = this.$loading.show();
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/products?page=${page}`;
      this.axios
        .get(url)
        .then((res) => {
          this.products = res.data.data;
          this.pagination = res.data.meta.pagination;
          const { categoryName } = this.$route.params;
          if (categoryName) {
            this.chooseCategory = categoryName;
          }
          loader.hide();
        })
        .catch(() => {
          loader.hide();
          this.$toast.error('出了點問題，請再試一次。');
        });
    },
    addToCart(id, quantity = 1) {
      this.status.loadingItem = id;
      const loader = this.$loading.show();
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`;
      const cart = {
        product: id,
        quantity,
      };
      this.axios
        .post(url, cart)
        .then(() => {
          this.$bus.$emit('updateCart');
          this.status.loadingItem = '';
          loader.hide();
          this.$toast.success('已加入購物車～');
        })
        .catch((err) => {
          loader.hide();
          this.$toast.error(`${err.response.data.errors}`);
        });
    },
  },
  computed: {
    filterCategory() {
      if (this.chooseCategory) {
        return this.products.filter((item) => {
          const data = item.category
            .toLowerCase()
            .includes(this.chooseCategory.toLowerCase());
          return data;
        });
      }
      return this.products;
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
