<template>
  <div>
    <div class="banner">
      <b-container>
        <b-link to="/products" style="text-decoration: none;">
          <b-container>
            <b-img class="banner__meeple" :src="require('@/assets/meeple.png')"></b-img>
            <p class="mt-3">點我看桌遊</p>
          </b-container>
        </b-link>
      </b-container>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  height: 95vh;
  background-position: center center;
  background-image: url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/nGhQlphde5dp9XzxREbq1kqIy7x4v8I4vuqFwHoqnrK9nUsIoS6KtEmaHmZr21BilEPryA1VpC17jHYhk0nqbXcxbqyQVdw02pv5sHJyMIzjGd4cOsa9E5qlpnQ8yfJq.jpg);
  opacity: 0.8;

  &__meeple {
    margin-top: 280px;
    height: 30vh;
  }
}
</style>
