<template>
  <div>
    <div class="container">
      <div>
        <div class="text-right mt-4">
          <button type="button"
            class="btn btn-primary"
            @click="openModal('new')"
            ref="btnShow">
            建立新的產品
          </button>
        </div>
        <table class="table mt-4 table-hover">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">分類</th>
              <th scope="col">產品名稱</th>
              <th scope="col">原價</th>
              <th scope="col">售價</th>
              <th scope="col">是否啟用</th>
              <th scope="col">編輯</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in products" :key="i">
              <th scope="row">{{ i + 1 }}</th>
              <td>{{ item.category }}</td>
              <td>{{ item.title }}</td>
              <td>{{ item.origin_price | thousands }}</td>
              <td>{{ item.price | thousands }}</td>
              <td>
                <span v-if="item.enabled" class="text-success">啟用</span>
                <span v-else class="text-danger">未啟用</span>
              </td>
              <td>
                <div class="btn-group btn-group-sm" role="group">
                  <button
                    type="button"
                    class="btn btn-outline-primary"
                    @click.prevent="openModal('edit', item)">編輯</button>
                  <button
                    type="button"
                    class="btn btn-outline-danger"
                    @click.prevent="openModal('delete', item)">刪除</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination :pages="pagination" @emit-pages="getProducts"></Pagination>
      <ProductModal ref="productModal" :isNew="isNew" @update="getProducts">
      </ProductModal>
      <DelProductModal
        :temp-product="tempProduct"
        @update="getProducts"></DelProductModal>
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue';
import ProductModal from '@/components/back/product/ProductModal.vue';
import DelProductModal from '@/components/back/product/DelProductModal.vue';
import Toast from '@/plugins/Toast';

export default {
  components: {
    Pagination,
    ProductModal,
    DelProductModal,
  },
  data() {
    return {
      // 暫存資料
      tempProduct: {
        imageUrl: [],
        options: {},
      },
      // 放 AJAX 傳回的資料
      products: [],
      // 判斷新增或是編輯
      isNew: false,
      // 放置分頁資料
      pagination: {},
    };
  },
  props: ['token'],
  created() {
    this.getProducts();
  },
  methods: {
    // 預設 page 為第一頁
    getProducts(page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/products?page=${page}`;
      const loader = this.$loading.show();
      this.axios.get(api).then((res) => {
        loader.hide();
        // 取得產品列表
        this.products = res.data.data;
        // 取得分頁
        this.pagination = res.data.meta.pagination;
      })
        .catch(() => {
          Toast.fire({
            title: '目前遇到錯誤，請再試一次。',
            icon: 'error',
          });
          loader.hide();
        });
    },
    openModal(isNew, item) {
      switch (isNew) {
        case 'new':
          this.$refs.productModal.tempProduct = {
            imageUrl: [],
            options: {},
          };
          this.isNew = true;
          this.$bvModal.show('productModal');
          break;
        case 'edit':
          this.tempProduct = { ...item };
          this.$refs.productModal.getProduct(this.tempProduct.id);
          this.isNew = false;
          break;
        case 'delete':
          this.tempProduct = { ...item };
          this.$bvModal.show('delProduct');
          break;
        default:
          break;
      }
    },
  },
};
</script>
