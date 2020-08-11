<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand href="#" to="/" class="brand-link">
        House of Card
      </b-navbar-brand>
      <!-- 響應式用於管理<b-collapse is-nav>組件 -->
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <!-- <b-nav-item>有包含 router-link 組件，提供一個 to 屬性值生成一個 <router-link> -->
          <b-nav-item href="#" to="/">Home</b-nav-item>
          <b-nav-item href="#" to="/Products">Products</b-nav-item>
          <b-nav-item href="#" to="/About">About</b-nav-item>
          <b-nav-item href="#" to="">
            <b-icon icon="cart3"></b-icon>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script></script>

<style scoped lang="scss">
.brand-link {
  font-family: 'Permanent Marker', cursive;
}
</style>
