<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="item in top5" :key="item.id">
      <router-link :to="`/product/${item.id}`" style="text-decoration: none;">
        <b-card class="border-0 rounded-0">
          <b-card-text>
            <b-img
              :src="item.img" :alt="item.title"
              height="280px" width="280px"
              style="max-width: 100%; max-height: 100%"/>
            <h4 class="border-0 rounded-0 mt-4">{{ item.title }}</h4>
          </b-card-text>
        </b-card>
      </router-link>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
  name: 'Banner',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 50,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true,
        },
        autoplay: {
          delay: 5000,
        },
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      },
      top5: [
        {
          id:
            'J6wymEeGCcZdPDSNzP751odVvDiYOYc3umEvZF1xiXdZZYdbnGq3Ru02pxw4F48Z',
          img:
            'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/WDKCENgfJ4I6Ht4MLT0z2O5R6uy7AmNJPMKq0RCgyeTnOF78pxx2wF6m8KeJIif58nWnF9ZdR0ncsKxgouAQ6RZOqM1aE2N4V1AlF0nUhfIMnbux6Qy57O9hvhLvxba3.jpg',
          title: '東京之王',
          price: 1250,
          origin_price: 0,
          category: '家庭遊戲',
        },
        {
          id:
            '88IlLaSVQ05BwoVXjy7iCUC8ARFmQtCLRt54rjA2z6R8wAzor6IahF0IvRB9nlnG',
          img:
            'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/vwYA1fEBTeVgV0gR7efpOUSXQzwPPkmvIF9BZdAnqUiYoE9upewNvILS7Hkka6SoYCgzreL8cjbeuPzauau1PPJ092d3vrWwjrNzcx6NWz20HNH8YnvjF0IMk3AQiGE4.jpg',
          title: '聖托里尼',
          price: 1200,
          origin_price: 1400,
          category: '家庭遊戲',
        },
        {
          id:
            'E3forwMeK94EZSyMhv6UdvDXpb9tH1LSOCrlPsorlUSOW99489fjVYu41s3SLmWl',
          img:
            'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/r9p1i6D72dfhm2e5pBqIbFANcLIjF95uzwQ8P0JOlez2paZ9hX6XemvK2tgtL0jlgqlmsojiXZr9cwO4MFbNwMfaYDY1IDy0Mu7zijK9rlk1BGGqYUGYCrUWo4Sk4hJw.jpg',
          title: '心靈同步',
          price: 600,
          origin_price: 900,
          category: '家庭遊戲',
        },
        {
          id:
            'Y3GsEiRXgiHeIEwW0zMiLpyQWcGnnqA0JgS4FrcDLhCpTznVPsyamMRpQanZxUYv',
          img:
            'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/Dun1aYlHGL5PfaVsdnNAevz0MEl1wVyO7TcpPDqYUqU5pqjwQDrVZ31hqMBXG2agpJxcPZYu9YVShv2XVNt3pSxJMKdnASXdWhEiKfZkUAdzorSsRWZ62mGZrPaTXHvg.jpg',
          title: '光合作用',
          price: 1800,
          origin_price: 2100,
          category: '家庭遊戲',
        },
        {
          id:
            'vAsigJ6uDNo7GVY8mnI5BNO5QvZRtlBG4xWDJ0xV3w9Irz9gkFBOalZvs2qWuvIR',
          img:
            'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/1V8qmSg9g4f5ubReJTuVWufFEWn6Z2OVzOUKgvkIeRQhWhmfaKHiP7VmuSAKI7BEcNweq6PQ0LB3nlSFOvS0VeCZo8fSWWCbhO9Uxxxb0JVybAuawmAHjf4SA7KVTjBE.jpg',
          title: '戰國時代',
          price: 500,
          origin_price: 650,
          category: '家庭遊戲',
        },
      ],
    };
  },
};
</script>
