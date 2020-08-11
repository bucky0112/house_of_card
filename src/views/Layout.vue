<template>
  <div class="layout">
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
