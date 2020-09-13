<template>
  <div class="about">
    <Banner :banner="banner"></Banner>
    <div id="target" style="height: 100px"></div>
    <b-container class="title" fluid>
      <h2>關於 House of Card</h2>
      <h4>服務項目與未來走向</h4>
    </b-container>
    <b-container class="service pb-5"
      data-aos="fade-right"
      fluid>
      <div class="about_service"><h3>服務項目</h3></div>
      <p class="mt-3 container">
        Hi～大家好！我們是一群平常喜歡電玩，卻突然一腳踏進桌遊的世界，並熱愛分享桌遊樂趣的宅宅，感謝您喜愛我們提供的服務。
        我們旨在提供良好的訂閱與運送平台，能夠各位玩家以最輕鬆的心情，無壓力的逛我們的網站，並且能夠得到最實用、最有趣的訊息。
        國內外無論是熱門冷門款式，我們希望能盡可能地幫助您購買想要的桌遊。
      </p>
    </b-container>
    <b-container class="future pb-5"
      data-aos="fade-left"
      fluid>
      <div class="about_future"><h3>未來走向</h3></div>
      <p class="mt-3 container">
        由於桌遊好買，但是好咖難求，這應該是許多玩家的共同心聲（嗚嗚～邊緣人இдஇ）<br/>
        這樣的想法，我們注意到了！我們正在積極跟各地桌遊商家合作洽談，只要訂閱我們的電子報，將會提供一組優惠碼，
        除了可以在結帳時進行折扣外，玩家只要憑該優惠碼到離您最近的商家，將可以優惠的折扣進行遊玩，詳細情況請等待我們的電子報通知，還未訂閱請往下訂閱
        <i class="fas fa-arrow-circle-down"></i>
      </p>
    </b-container>
    <Footer></Footer>
  </div>
</template>

<script>
import Banner from '@/components/front/Banner.vue';
import Footer from '@/components/front/Footer.vue';

export default {
  components: {
    Banner,
    Footer,
  },
  data() {
    return {
      banner: {
        title: ['關於我們的故事，', '還有提供給各位的服務！'],
        backgroundImage: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.title {
  height: 400px;
  background-color: #F3B111;
  padding-top: 200px;

  h2 {
    font-size: 40px;
  }
}

.future {
  background-color: #423F3D;
  color: white;
}

.about_service{
  overflow: hidden;
  h3 {
    display: inline-block;
    line-height: 45px;
    position: relative;
    margin-top: 50px;
  };
/* 使用偽元素作出橫線 */
  h3::before, h3::after{
    content: "";
    height: 1px;
    background: black;
    top: 50%;
    width: 70%;
    position: absolute;
  };
  h3::before{
    left: -80%;
  };
  h3::after{
    right: -80%;
  };
}

.about_future{
  overflow: hidden;
  h3 {
    display: inline-block;
    line-height: 45px;
    position: relative;
    margin-top: 50px;
  };
/* 使用偽元素作出橫線 */
  h3::before, h3::after{
    content: "";
    height: 1px;
    background: white;
    top: 50%;
    width: 70%;
    position: absolute;
  };
  h3::before{
    left: -80%;
  };
  h3::after{
    right: -80%;
  };
}

p {
  line-height: 35px;
  text-align: left;
}
</style>
