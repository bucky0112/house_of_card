<template>
  <div class="products">
    <Banner></Banner>
    <div class="container mt-md-5 mt-3 mb-7">
      <div class="row">
        <div class="col-md-4">
          <div
            class="accordion border border-bottom border-top-0 border-left-0 border-right-0 mb-3"
            id="accordionExample"
          >
            <div class="card border-0">
              <div
                class="card-header px-0 py-4 bg-white border
                border-bottom-0 border-top border-left-0 border-right-0"
                id="headingOne"
                data-toggle="collapse"
                data-target="#collapseOne"
              >
                <div class="d-flex justify-content-between align-items-center pr-1">
                  <h4 class="mb-0">Lorem ipsum</h4>
                  <i class="fas fa-chevron-down"></i>
                </div>
              </div>
              <div
                id="collapseOne"
                class="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div class="card-body py-0">
                  <ul class="list-unstyled">
                    <li>
                      <a href="#" class="py-2 d-block text-muted">Lorem ipsum</a>
                    </li>
                    <li>
                      <a href="#" class="py-2 d-block text-muted">Lorem ipsum</a>
                    </li>
                    <li>
                      <a href="#" class="py-2 d-block text-muted">Lorem ipsum</a>
                    </li>
                    <li>
                      <a href="#" class="py-2 d-block text-muted">Lorem ipsum</a>
                    </li>
                    <li>
                      <a href="#" class="py-2 d-block text-muted">Lorem ipsum</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card border-0">
              <div
                class="card-header px-0 py-4 bg-white border
                border-bottom-0 border-top border-left-0 border-right-0"
                id="headingTwo"
                data-toggle="collapse"
                data-target="#collapseTwo"
              >
                <div class="d-flex justify-content-between align-items-center pr-1">
                  <h4 class="mb-0">Lorem ipsum</h4>
                  <i class="fas fa-chevron-down"></i>
                </div>
              </div>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div class="card-body py-0">
                  <ul class="list-unstyled">
                    <li>
                      <a href="#" class="py-2 d-block text-muted">Lorem ipsum</a>
                    </li>
                    <li>
                      <a href="#" class="py-2 d-block text-muted">Lorem ipsum</a>
                    </li>
                    <li>
                      <a href="#" class="py-2 d-block text-muted">Lorem ipsum</a>
                    </li>
                    <li>
                      <a href="#" class="py-2 d-block text-muted">Lorem ipsum</a>
                    </li>
                    <li>
                      <a href="#" class="py-2 d-block text-muted">Lorem ipsum</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card border-0">
              <div
                class="card-header px-0 py-4 bg-white border
                border-bottom-0 border-top border-left-0 border-right-0"
                id="headingThree"
                data-toggle="collapse"
                data-target="#collapseThree"
              >
                <div class="d-flex justify-content-between align-items-center pr-1">
                  <h4 class="mb-0">Lorem ipsum</h4>
                  <i class="fas fa-chevron-down"></i>
                </div>
              </div>
              <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div class="card-body py-0">
                  <ul class="list-unstyled">
                    <li>
                      <a href="#" class="py-2 d-block text-muted">Lorem ipsum</a>
                    </li>
                    <li>
                      <a href="#" class="py-2 d-block text-muted">Lorem ipsum</a>
                    </li>
                    <li>
                      <a href="#" class="py-2 d-block text-muted">Lorem ipsum</a>
                    </li>
                    <li>
                      <a href="#" class="py-2 d-block text-muted">Lorem ipsum</a>
                    </li>
                    <li>
                      <a href="#" class="py-2 d-block text-muted">Lorem ipsum</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-6" v-for="(item, i) in filterCategory" :key="i">
              <div class="card border-0 mb-4 position-relative position-relative">
                <img
                  src="https://images.unsplash.com/photo-1591843336741-9f1238f66758?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80"
                  class="card-img-top rounded-0"
                  alt="..."
                />
                <a href="#" class="text-dark">
                  <i class="far fa-heart position-absolute" style="right: 16px; top: 16px"></i>
                </a>
                <div class="card-body p-0">
                  <h4 class="mb-0 mt-3">
                    <a href="./detail.html">{{ item.title }}</a>
                  </h4>
                  <p class="card-text mb-0">
                    NT$1,080
                    <span class="text-muted">
                      <del>NT$1,200</del>
                    </span>
                  </p>
                  <p class="text-muted mt-3"></p>
                </div>
              </div>
            </div>
          </div>
          <nav class="d-flex justify-content-center">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item active">
                <a class="page-link" href="#">1</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">2</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">3</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <div class="bg-light py-4">
      <div class="container">
        <div
          class="d-flex flex-column flex-md-row justify-content-between
          align-items-md-center align-items-start"
        >
          <p class="mb-0 font-weight-bold">Lorem ipsum dolor sit amet.</p>
          <div class="input-group w-md-50 mt-md-0 mt-3">
            <input type="text" class="form-control rounded-0" placeholder />
            <div class="input-group-append">
              <button class="btn btn-dark rounded-0" type="button" id="search">Lorem ipsum</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-dark py-5">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between text-white mb-md-7 mb-4">
          <a class="text-white h4" href="./index.html">LOGO</a>
          <ul class="d-flex list-unstyled mb-0 h4">
            <li>
              <a href="#" class="text-white mx-3">
                <i class="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#" class="text-white mx-3">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#" class="text-white ml-3">
                <i class="fab fa-line"></i>
              </a>
            </li>
          </ul>
        </div>
        <div
          class="d-flex flex-column flex-md-row justify-content-between
          align-items-md-end align-items-start text-white"
        >
          <div class="mb-md-0 mb-1">
            <p class="mb-0">02-3456-7890</p>
            <p class="mb-0">service@mail.com</p>
          </div>
          <p class="mb-0">© 2020 LOGO All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/front/Banner.vue';

export default {
  name: 'Products',
  components: {
    Banner,
  },
  data() {
    return {
      products: [],
      isLoading: false,
      category: 'all',
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
          console.log(this.products);
          this.isLoading = false;
        })
        .catch((err) => {
          console.log(err);
          this.isLoading = false;
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
