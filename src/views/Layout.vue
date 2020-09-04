<template>
  <div class="layout">
    <back-to-top>
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
  name: 'Layout',
  components: {
    Navbar,
  },
};
</script>

<style lang="scss" scoped>
.btn-to-top {
  width: 70px;
  height: 70px;
  padding: 10px 16px;
  border-radius: 50%;
  font-size: 30px;
  line-height: 22px;
}
</style>
