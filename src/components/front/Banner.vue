<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide>
      <div
        class="position-relative d-flex align-items-center justify-content-center"
        style="min-height: 400px; width: auto;"
      >
        <div
          class="position-absolute"
          style="top:0; bottom: 0; left: 0; right: 0;
      background-image: url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/kQTEkwjr8Sqys68hB1tXujFGdKdqLlJ7JrAhQE8hPWktoIEJg07k76Kwq8pXoXej110v650QwRglVsEnCMIed9lmPUba4g1OBOHqnD73iIdQWR51d4Lem7ya26fM4AjM.jpg);
      background-position: center center; opacity: 0.3;"
        ></div>
        <h2 class="font-weight-bold">Lorem ipsum.</h2>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div
        class="position-relative d-flex align-items-center justify-content-center"
        style="min-height: 400px; width: auto;"
      >
        <div
          class="position-absolute"
          style="top:0; bottom: 0; left: 0; right: 0;
      background-image: url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/Gm9NzzvW1rLRczWlByQtu4EDc7cGcqRPLDk8FRWPnn7cvpt4x1v6AhsrRoy0hO5gIgD7bmr0dfJwutcEIfevtZdKYfXqNC5ktJkGkgGWHhDL6B28llDrafmCJPmnWb7B.jpg);
      background-position: center center; opacity: 0.3;"
        ></div>
        <h2 class="font-weight-bold">Lorem ipsum.</h2>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div
        class="position-relative d-flex align-items-center justify-content-center"
        style="min-height: 400px; width: auto;"
      >
        <div
          class="position-absolute"
          style="top:0; bottom: 0; left: 0; right: 0;
      background-image: url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/sCwMlSNaSsd021WKZ6PFNs8oqnegm2hA2t39LWHCrmggj8hDOGkIxbRHQfNnHCFobXw4gCxzqnw4l0IrmiqtVBcLap9iVQZU1DpoFiXo8mSokxG1r3b64hL2OBBgFdhx.jpg);
      background-position: center center; opacity: 0.3;"
        ></div>
        <h2 class="font-weight-bold">Lorem ipsum.</h2>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div
        class="position-relative d-flex align-items-center justify-content-center"
        style="min-height: 400px; width: auto;"
      >
        <div
          class="position-absolute"
          style="top:0; bottom: 0; left: 0; right: 0;
      background-image: url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/BiWsFJNjr0VR5gO9B0ve8mG5BPgMTiOEkrQ2GNWkfBoAlCD0pUASlOxlce6Hke0r7WlxiqL3kmewjnvpcztsHpn5yb4b9hkjE18YbUBgXk0Csh7vhBITZLg3DE2KoFgn.jpg);
      background-position: center center; opacity: 0.3;"
        ></div>
        <h2 class="font-weight-bold">Lorem ipsum.</h2>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div
        class="position-relative d-flex align-items-center justify-content-center"
        style="min-height: 400px; width: auto;"
      >
        <div
          class="position-absolute"
          style="top:0; bottom: 0; left: 0; right: 0;
      background-image: url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/nORfs93tQEExTOkobavBXIaw6ynIfpgV8e2WlXG7eD3ycs02GLDY2SHOdJ3pRLoodp8NZ94ktDKX6NxJz3VOppp3yysKuPYujY3pNqm4VIxmwUfBLxMRg5GDVFMiYJmG.jpg);
      background-position: center center; opacity: 0.3;"
        ></div>
        <h2 class="font-weight-bold">Lorem ipsum.</h2>
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
  name: 'swiper-example-space-between',
  title: 'Space between slides',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay: {
          delay: 10000,
        },
      },
    };
  },
};
</script>
