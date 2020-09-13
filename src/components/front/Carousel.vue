<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="item in top5" :key="item.id">
      <router-link :to="`/product/${item.id}`" style="text-decoration: none;">
        <b-card no-body class="product_card">
          <i class="fas fa-star" style="color: #F0CD5E;"></i>
          <b-img
            :src="item.img" :alt="item.title"
            height="280px" width="280px"
            style="max-width: 100%; max-height: 100%"/>
          <div class="details">
            <strong>{{ item.title }}</strong>
          </div>
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
          category: '家庭遊戲',
        },
        {
          id:
            '88IlLaSVQ05BwoVXjy7iCUC8ARFmQtCLRt54rjA2z6R8wAzor6IahF0IvRB9nlnG',
          img:
            'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/vwYA1fEBTeVgV0gR7efpOUSXQzwPPkmvIF9BZdAnqUiYoE9upewNvILS7Hkka6SoYCgzreL8cjbeuPzauau1PPJ092d3vrWwjrNzcx6NWz20HNH8YnvjF0IMk3AQiGE4.jpg',
          title: '聖托里尼',
          category: '家庭遊戲',
        },
        {
          id:
            'E3forwMeK94EZSyMhv6UdvDXpb9tH1LSOCrlPsorlUSOW99489fjVYu41s3SLmWl',
          img:
            'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/r9p1i6D72dfhm2e5pBqIbFANcLIjF95uzwQ8P0JOlez2paZ9hX6XemvK2tgtL0jlgqlmsojiXZr9cwO4MFbNwMfaYDY1IDy0Mu7zijK9rlk1BGGqYUGYCrUWo4Sk4hJw.jpg',
          title: '心靈同步',
          category: '家庭遊戲',
        },
        {
          id:
            'Y3GsEiRXgiHeIEwW0zMiLpyQWcGnnqA0JgS4FrcDLhCpTznVPsyamMRpQanZxUYv',
          img:
            'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/Dun1aYlHGL5PfaVsdnNAevz0MEl1wVyO7TcpPDqYUqU5pqjwQDrVZ31hqMBXG2agpJxcPZYu9YVShv2XVNt3pSxJMKdnASXdWhEiKfZkUAdzorSsRWZ62mGZrPaTXHvg.jpg',
          title: '光合作用',
          category: '家庭遊戲',
        },
        {
          id:
            'vAsigJ6uDNo7GVY8mnI5BNO5QvZRtlBG4xWDJ0xV3w9Irz9gkFBOalZvs2qWuvIR',
          img:
            'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/1V8qmSg9g4f5ubReJTuVWufFEWn6Z2OVzOUKgvkIeRQhWhmfaKHiP7VmuSAKI7BEcNweq6PQ0LB3nlSFOvS0VeCZo8fSWWCbhO9Uxxxb0JVybAuawmAHjf4SA7KVTjBE.jpg',
          title: '戰國時代',
          category: '家庭遊戲',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.product_card {
  border-radius: 10px 10px 10px 10px;
  overflow: hidden;
  box-shadow: 0;
  transform: scale(0.95);
  transition: box-shadow 0.5s, transform 0.5s;
  &:hover{
    transform: scale(1);
    box-shadow: 5px 10px 20px rgba(0,0,0,0.2);}

  .img {
    height: 250px;
    background-size: cover;
    background-position: center;
    border-bottom: solid thin rgba(0,0,0,0.1);
  }

  .details {
    border-top: solid thin rgba(0,0,0,0.1);
    padding: 20px;
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
