<template>
  <div>
    <div class="banner">
      <b-container>
        <b-link to="/products" style="text-decoration: none;">
          <h2>More Fun...</h2>
        </b-link>
      </b-container>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  height: 700px;
  background-position: center center;
  background-image: url(https://hexschool-api.s3.us-west-2.amazonaws.com/custom/nGhQlphde5dp9XzxREbq1kqIy7x4v8I4vuqFwHoqnrK9nUsIoS6KtEmaHmZr21BilEPryA1VpC17jHYhk0nqbXcxbqyQVdw02pv5sHJyMIzjGd4cOsa9E5qlpnQ8yfJq.jpg);
  opacity: 0.8;
}
h2{
  color: rgb(237,75,78);
  font-family: 'Honey Bear', cursive;
  padding-top: 360px;
  padding-left: 55%;
}
@media (max-width:767px) {
  h2 {
    padding-left: 49%;
  }
  .banner {
    background-position: center left 70%;
  }
}
@media (max-width:580px) {
  h2 {
    padding-left: 10%;
  }
}
</style>
