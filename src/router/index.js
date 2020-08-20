import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('../views/Layout.vue'),
    children: [
      {
        path: '',
        name: 'Index',
        component: () => import('../views/front/Index.vue'),
      },
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/front/Products.vue'),
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import('../views/front/Cart.vue'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/front/About.vue'),
      },
      {
        path: 'product/:id',
        name: 'Product',
        component: () => import('../views/front/Product.vue'),
      },
      {
        path: 'checkout',
        name: 'Checkout',
        component: () => import('../views/front/Checkout.vue'),
      },
      {
        path: 'order',
        name: 'Order',
        component: () => import('../views/front/Order.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/admin',
    name: 'Dashboard',
    component: () => import('../views/back/Dashboard.vue'),
    children: [
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/back/Products.vue'),
      },
      {
        path: 'coupons',
        name: 'Coupons',
        component: () => import('../views/back/Coupons.vue'),
      },
      {
        path: 'order',
        name: 'Order',
        component: () => import('../views/back/Order.vue'),
      },
      {
        path: 'imgstorage',
        name: 'ImgStorage',
        component: () => import('../views/back/ImgStorage.vue'),
      },
    ],
  },
  {
    path: '*',
    redirect: 'products',
  },
];

const router = new VueRouter({
  routes,
});

export default router;
