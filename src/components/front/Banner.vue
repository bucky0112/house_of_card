<template>
  <div>
    <div class="banner">
      <b-container style="padding-top: 40vh">
        <b-container class="tagline">
          <h2>Fun Times</h2>
          <p>聚集一桌，歡樂悠遊</p>
        </b-container>
        <a href="#"
          class="down"
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

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;1,900&display=swap');

.banner {
  height: 98vh;
  background-position: center center;
  background-image: url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/nGhQlphde5dp9XzxREbq1kqIy7x4v8I4vuqFwHoqnrK9nUsIoS6KtEmaHmZr21BilEPryA1VpC17jHYhk0nqbXcxbqyQVdw02pv5sHJyMIzjGd4cOsa9E5qlpnQ8yfJq.jpg);
  opacity: 0.8;

  .tagline{
    background: rgba(0, 0, 0, 0.3);
    height: 250px;
    width: 250px;
    position: relative;
    border-radius: 50%;
    color: white;
    display: grid;
    place-items: center;
  }

  .tagline h2{
    font-size: 40px;
    font-weight: bolder;
    font-family: 'Montserrat Alternates', sans-serif;
  }

  .down i {
    opacity: 0;
    color: darkred;
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
