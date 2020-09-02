<template>
  <div>
    <div class="banner">
      <b-container>
        <b-link to="/products" style="text-decoration: none;">
          <b-container>
            <b-img
              data-aos="fade-down"
              dada-aos="flip-up"
              class="meeple" :src="require('@/assets/meeple.png')">
            </b-img>
            <p class="click_me mt-3" data-aos="fade-up">
              點<i class="fas fa-arrow-circle-up"></i>看桌遊
            </p>
          </b-container>
          <b-container>
          </b-container>
        </b-link>
      </b-container>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  height: 85vh;
  background-position: center center;
  background-image: url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/nGhQlphde5dp9XzxREbq1kqIy7x4v8I4vuqFwHoqnrK9nUsIoS6KtEmaHmZr21BilEPryA1VpC17jHYhk0nqbXcxbqyQVdw02pv5sHJyMIzjGd4cOsa9E5qlpnQ8yfJq.jpg);
  opacity: 0.8;

  .meeple {
    margin-top: 260px;
    height: 30vh;
  }

  .meeple:hover {
    transform: scale(2);
  }

  .click_me {
    font-size: 30px;
    color: white;
  }
  .click_me:hover {
    color: black;
    font-size: 32px;
  }
}
</style>
