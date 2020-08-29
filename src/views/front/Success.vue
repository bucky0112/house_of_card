<template>
  <div>
    <div class="position-relative d-flex">
      <div class="container d-flex flex-column" style="min-height: 100vh;">
        <div class="row my-auto pb-7">
          <div class="col-md-4 d-flex flex-column">
            <div class="my-auto">
              <h2>感謝您的支持，</h2>
              <h2>您的商品會儘快送達。</h2>
              <router-link to="/">
                <a href="#" class="btn btn-dark mt-4 px-5">回首頁</a>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-md-50 w-100 position-absolute opacity-1"
        style="z-index: -1; min-height: 100vh; right: 0; background-image: url(https://images.unsplash.com/photo-1586810165616-94c631fc2f79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80);
      background-position: center center;"
      ></div>
    </div>
  </div>
</template>
