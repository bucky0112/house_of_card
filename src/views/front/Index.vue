<template>
  <div class="index">
    <Banner></Banner>
    <div id="target" style="height: 100px"></div>
    <b-container>
      <h2 class="mb-3">本月家庭遊戲主打</h2>
      <Carousel></Carousel>
    </b-container>
    <div class="container my-7 mt-5">
      <div class="row">
        <div class="col-md-6">
          <b-img-lazy
            src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/nORfs93tQEExTOkobavBXIaw6ynIfpgV8e2WlXG7eD3ycs02GLDY2SHOdJ3pRLoodp8NZ94ktDKX6NxJz3VOppp3yysKuPYujY3pNqm4VIxmwUfBLxMRg5GDVFMiYJmG.jpg"
            rounded
            fluid
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          />
        </div>
        <div class="col-md-4 m-auto">
          <h4 class="mt-2">什麼是桌遊？</h4>
          <p class="about-tg text-muted">桌上遊戲 (Tabletop game)，簡稱為桌遊，在臺灣大街小巷最常見的就是大富翁了，
          不過近年來最熱門的大概是派對遊戲，這之中的佼佼者又屬阿瓦隆、狼人殺之類的陣營遊戲最為知名，有興趣的想了解桌遊詳情請往
          <i class="fas fa-arrow-right"></i>
          <router-link to="/gameinfo"> 認識桌遊</router-link>
          </p>
        </div>
      </div>
      <div class="row flex-row-reverse justify-content-between mt-4">
        <div class="col-md-6">
          <b-img-lazy
            src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/Gm9NzzvW1rLRczWlByQtu4EDc7cGcqRPLDk8FRWPnn7cvpt4x1v6AhsrRoy0hO5gIgD7bmr0dfJwutcEIfevtZdKYfXqNC5ktJkGkgGWHhDL6B28llDrafmCJPmnWb7B.jpg"
            rounded
            fluid
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          />
        </div>
        <div class="col-md-4 m-auto text-center">
          <h4 class="mt-4">推薦桌遊</h4>
          <p class="text-muted">
            稍微了解桌遊之後，或是你還不了解桌遊是幹什麼的（那是什麼？可以吃嗎？）<br/>
            沒關係，直接來玩這些熱門款推薦的桌遊：<br/>
            <ol>
              <li>駱駝大賽</li>
              <li>七大奇蹟</li>
              <li>阿瓦隆</li>
              <li style="list-style-type: none;">
                <router-link to="/products">
                  點我看更多
                </router-link>
              </li>
            </ol>
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <b-img-lazy
            src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/kQTEkwjr8Sqys68hB1tXujFGdKdqLlJ7JrAhQE8hPWktoIEJg07k76Kwq8pXoXej110v650QwRglVsEnCMIed9lmPUba4g1OBOHqnD73iIdQWR51d4Lem7ya26fM4AjM.jpg"
            rounded
            fluid
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-center"
          />
        </div>
        <div class="col-md-4 m-auto">
          <h4 class="mt-2">House of Card 提供的服務</h4>
          <p class="about-tg text-muted">
            House of Card 專門提供給玩家最有趣的桌遊，不管是國內外熱門類型，絕對會第一時間提供給需要的玩家。
            如果玩家有特殊需求，想要訂購目前臺灣找不到的桌遊，也可以聯絡我們，
            House of Card 會盡可能地滿足所有大朋友、小朋友。<br/>
            今晚，我想來去 ...
          <i class="fas fa-arrow-right"></i>
          <router-link to="/products"> 逛商店</router-link>
          </p>
        </div>
      </div>
    </div>
    <Footer class="mt-3"></Footer>
  </div>
</template>

<script>
import Banner from '@/components/front/Banner.vue';
import Carousel from '@/components/front/Carousel.vue';
import Footer from '@/components/front/Footer.vue';

export default {
  name: 'Index',
  components: {
    Banner,
    Carousel,
    Footer,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
p {
  line-height: 35px;
  text-align: left;
}
</style>
