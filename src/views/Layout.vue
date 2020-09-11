<template>
  <div class="layout">
    <back-to-top bottom="140px">
      <button type="button" class="btn btn-info btn-to-top">
        <i class="fas fa-arrow-circle-up"></i>
      </button>
    </back-to-top>
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/front/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>

<style lang="scss" scoped>
.btn-to-top {
  width: 70px;
  height: 70px;
  padding: 20px 16px;
  border-radius: 50%;
  font-size: 30px;
  line-height: 22px;
}
</style>
