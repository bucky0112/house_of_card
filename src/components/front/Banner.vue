<template>
  <div>
    <div class="banner" :style="{ backgroundImage: `url(${banner.backgroundImage})` }">
      <b-container style="padding-top: 40vh;">
        <div class="d-flex flex-column align-items-start">
          <h2 style="font-size: 53px; color: white;" v-for="(title, i) in banner.title" :key="i">
            {{ banner.title[i] }}
          </h2>
        </div>
        <a href="#"
          class="down d-flex flex-column align-items-center"
          style="text-decoration: none;"
          v-scroll-to="{
            el: '#target',
            easing: [.6, .80, .30, 1.9],
            duration: 2000
          }">
          <i class="fas fa-chevron-down fa-3x"></i>
          <p class="">往下看更多內容</p>
        </a>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  props: ['banner'],
};
</script>

<style lang="scss" scoped>
.banner {
  height: 98vh;
  background-position: center center;
  opacity: 0.8;

  .down i {
    opacity: 0;
    animation: iconAnimation 1.5s infinite;
  }

  @keyframes iconAnimation {
    0% {
      transform: translate(0, 0);
      opacity: 0;
    }
    33.33% {
      transform: translate(0, 10px);
      opacity: 0.3;
    }
    66.66% {
      transform: translate(0, 20px);
      opacity: 0.6;
    }
    99.99% {
      transform: translate(0, 30px);
      opacity: 0.9;
    }
    100% {
      transform: translate(0, 0);
      opacity: 0.9;
    }
  }

  .down p {
    color: white;
    text-align: center;
    margin-top: 5vh;
    font-size: 15px;
    font-weight: 800;
    opacity: 0.2;
    animation: fadeIn 1s infinite linear alternate;
  }

  @keyframes fadeIn {
    100% {
      opacity: 1;
    }
  }
}
</style>
