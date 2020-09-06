<template>
  <div>
    <div class="container">
      <div>
        <div class="mt-4">
          <table class="table mt-4 table-hover">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">圖片縮圖</th>
                <th scope="col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) in imgStorage" :key="i">
                <td scope="row">{{ i + 1 }}</td>
                <td scope="row">
                  <img :src="item.path" width="100px" alt="">
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-outline-danger"
                    @click="openModal(item)"
                  >
                    刪除
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <Pagination :pages="pagination" @emit-pages="getImgStorage"></Pagination>
    <DeleteImageModal :temp-img-storage="tempImgStorage" @update="getImgStorage"></DeleteImageModal>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue';
import DeleteImageModal from '@/components/back/imgStorage/DeleteImageModal.vue';

export default {
  components: {
    Pagination,
    DeleteImageModal,
  },
  data() {
    return {
      imgStorage: {},
      tempImgStorage: {},
      pagination: {},
    };
  },
  created() {
    this.getImgStorage();
  },
  methods: {
    getImgStorage(page = 1) {
      const loader = this.$loading.show();
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/storage?page=${page}`;
      this.axios(api)
        .then((res) => {
          this.imgStorage = res.data.data;
          this.pagination = res.data.meta.pagination;
          loader.hide();
        })
        .catch(() => {
          loader.hide();
        });
    },
    openModal(item) {
      this.tempImgStorage = { ...item };
      this.$bvModal.show('deleteImageModal');
    },
  },
};
</script>
