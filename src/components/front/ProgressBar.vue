<template>
  <div>
    <ul class="list-unstyled d-flex justify-content-around mb-1">
      <li class="d-flex flex-column align-items-center">
        <span
          class="rounded-circle bg-primary d-flex justify-content-center
          align-items-center text-white"
          style="width:20px; height:20px"
        >1</span>購物車
      </li>
      <li class="d-flex flex-column align-items-center">
        <span
          class="rounded-circle bg-primary d-flex justify-content-center
          align-items-center text-white"
          style="width:20px; height:20px"
        >2</span>填寫資料
      </li>
      <li class="d-flex flex-column align-items-center">
        <span
          class="rounded-circle bg-primary d-flex justify-content-center
          align-items-center text-white"
          style="width:20px; height:20px"
        >3</span>訂單確認
      </li>
    </ul>
    <div class="progress">
      <div
        class="progress-bar progress-bar-striped progress-bar-animated"
        role="progressbar"
        aria-valuenow="66"
        aria-valuemin="0"
        aria-valuemax="100"
        style="width: 66%"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
