<template>
  <div class="index">
    <loading :active.sync="isLoading"/>
    <div class="container">
      <Banner></Banner>
    </div>
    <div class="container">
      <h2 class="mt-5">本週家庭遊戲主打</h2>
      <div class="row mt-2">
        <div class="col-md-4 mt-md-4">
          <div class="card border-0 mb-4">
            <img
              src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80"
              class="card-img-top rounded-0"
              alt="..."
            />
            <div class="card-body text-center">
              <h4>Lorem ipsum</h4>
              <div class="d-flex justify-content-between">
                <p class="card-text text-muted mb-0">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 mt-md-4">
          <div class="card border-0 mb-4">
            <img
              src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80"
              class="card-img-top rounded-0"
              alt="..."
            />
            <div class="card-body text-center">
              <h4>Lorem ipsum</h4>
              <div class="d-flex justify-content-between">
                <p class="card-text text-muted mb-0">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 mt-md-4">
          <div class="card border-0 mb-4">
            <img
              src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80"
              class="card-img-top rounded-0"
              alt="..."
            />
            <div class="card-body text-center">
              <h4>Lorem ipsum</h4>
              <div class="d-flex justify-content-between">
                <p class="card-text text-muted mb-0">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-light mt-7">
      <div class="container">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row justify-content-center py-7">
                <div class="col-md-6 text-center">
                  <h3>Lorem ipsum.</h3>
                  <p
                    class="my-5"
                  >“Lorem ipsum dolor sit amet,
                  consetetur sadipscing elitr,
                  sed diam nonumy eirmod tempor invidunt ut
                  labore et dolore magna aliquyam erat.”</p>
                  <p>
                    <small>—Lorem ipsum dolor sit amet.—</small>
                  </p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row justify-content-center py-7">
                <div class="col-md-6 text-center">
                  <h3>Lorem ipsum.</h3>
                  <p
                    class="my-5"
                  >“Lorem ipsum dolor sit amet, consetetur
                  sadipscing elitr, sed diam nonumy eirmod
                  tempor invidunt ut labore et dolore magna aliquyam erat.”</p>
                  <p>
                    <small>—Lorem ipsum dolor sit amet.—</small>
                  </p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row justify-content-center py-7">
                <div class="col-md-6 text-center">
                  <h3>Lorem ipsum.</h3>
                  <p
                    class="my-5"
                  >“Lorem ipsum dolor sit amet, consetetur
                  sadipscing elitr, sed diam nonumy eirmod
                  tempor invidunt ut labore et dolore magna aliquyam erat.”</p>
                  <p>
                    <small>—Lorem ipsum dolor sit amet.—</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
    <div class="container my-7">
      <div class="row">
        <div class="col-md-6">
          <img
            src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            alt
            class="img-fluid"
          />
        </div>
        <div class="col-md-4 m-auto text-center">
          <h4 class="mt-4">Lorem ipsum</h4>
          <p
            class="text-muted"
          >Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore magna.</p>
        </div>
      </div>
      <div class="row flex-row-reverse justify-content-between mt-4">
        <div class="col-md-6">
          <img
            src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            alt
            class="img-fluid"
          />
        </div>
        <div class="col-md-4 m-auto text-center">
          <h4 class="mt-4">Lorem ipsum</h4>
          <p
            class="text-muted"
          >Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore magna.</p>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Banner from '@/components/front/Banner.vue';
import Footer from '@/components/front/Footer.vue';

export default {
  name: 'Index',
  components: {
    Banner,
    Footer,
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
  computed: {
    filterCategory() {
      if (this.category === 'all') {
        return this.products;
      }
      return this.products.filter((item) => item.category === this.category);
    },
  },
  methods: {
    getProducts() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/products`;
      this.axios
        .get(url)
        .then((res) => {
          this.products = res.data.data;
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
          this.$toast.error('出了點問題，請再試一次。');
        });
    },
  },
};
</script>
