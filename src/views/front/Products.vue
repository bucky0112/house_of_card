<template>
  <div class="products">
    <!-- 遊戲分類選擇 -->
    <b-sidebar
      id="sidebar-backdrop"
      backdrop-variant="light"
      backdrop
      title="請選擇分類"
      shadow
    >
      <b-button-group vertical class="category_btn">
        <b-button
          variant="dark"
          v-for="(item, i) in categories" :key="i"
          @click.prevent="chooseCategory = item"
          :class="{ active: item === chooseCategory }"
        >{{ item }}</b-button>
      </b-button-group>
    </b-sidebar>
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
      <b-button-group size="lg">
        <b-button
          variant="dark"
          @click.prevent="chooseCategory = ''"
          :class="{ active: chooseCategory === '' }"
        >
          全部遊戲
        </b-button>
        <!-- 打開旁邊的 sidebar 選擇遊戲分類 -->
        <b-button v-b-toggle.sidebar-backdrop>遊戲分類</b-button>
      </b-button-group>
      <div class="row mt-5">
        <div class="col-12 col-md-6 col-lg-3"
          v-for="(item, i) in filterCategory" :key="i">
          <b-card no-body class="product_card mb-5">
            <router-link :to="`/product/${item.id}`">
              <div
                class="img"
                :style="{ backgroundImage: `url(${ item.imageUrl[0] })` }"
              >
                <b-badge variant="info" class="float-right mt-2 mr-2">
                  {{ item.category }}
                </b-badge>
              </div>
            </router-link>
            <b-row>
              <b-col cols="8" class="details">
                <div>
                  <strong>{{ item.title }}</strong>
                </div>
                <div>{{ item.price | thousands }}</div>
              </b-col>
              <b-col cols="4" class="buy pt-2 pl-0">
                <b-button
                  variant="link"
                  class="buy_btn"
                  :disabled="status.loadingItem === item.id"
                  @click="addToCart(item.id)"
                >
                  <i class="spinner-border
                    spinner-border-sm"
                    v-if="status.loadingItem === item.id"
                  ></i>
                  <i class="fas fa-cart-plus" v-else></i>
                </b-button>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </div>
    </b-container>
    <Pagination :pages="pagination" @emit-pages="getProducts" class="mt-5"/>
    <Footer></Footer>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue';
import Footer from '@/components/front/Footer.vue';

export default {
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
          this.status.loadingItem = '';
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
.category_btn {
  margin-top: 50px;
  button {
    padding: 25px 70px;
  }
}

.product_card {
  border-radius: 10px 10px 10px 10px;
  overflow: hidden;
  box-shadow: 0;
  transform: scale(0.95);
  transition: box-shadow 0.5s, transform 0.5s;
  &:hover{
    transform: scale(1);
    box-shadow: 5px 20px 30px rgba(0,0,0,0.2);}

  .img {
    height: 250px;
    background-size: cover;
    background-position: center;
    border-bottom: solid thin rgba(0,0,0,0.1);
  }

  .details {
    padding: 20px;
  }

  .buy {
    border-left: solid thin rgba(0,0,0,0.1);
    transition: background 0.5s;
      i{
        font-size: 25px;
        padding: 15px;
        color: #254053;
        transition: transform 0.5s;
      }
      &:hover{
        background: #A6CDDE;
      }
      &:hover i{
        color:#00394B;
      }
  }
}
</style>
