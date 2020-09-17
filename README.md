# House of Card (桌遊電商)

## Demo
[https://bucky0112.github.io/house_of_card/#/](https://bucky0112.github.io/house_of_card/#/)

## 簡介
這是我使用 Vue.js 開發的前端練習作品，主要功能如下：

* 前台：
  * 畫面展示（商品分類、單一商品介紹）
  * 購物車功能
  * 下單 / 填資料驗證 / 結帳
  * 優惠券使用


* 後台：
  * 管理者登入
  * 產品管理
  * 優惠券管理
  * 訂單管理
  * 圖片管理

## 使用技術

* Vue CLI 3
* Vue Router
* Vue Components
* RESTful APIs
* RWD
* Bootstrap 4
* JavaScript (ES6)
* ESlint (Airbnb)

## 使用 Plugins

* [AOS](https://github.com/michalsnik/aos) 
* [Bootstrap-Vue](https://github.com/bootstrap-vue/bootstrap-vue)
* [Vue-awesome-swiper](https://github.com/surmon-china/vue-awesome-swiper)
* [Vue-axios](https://github.com/imcvampire/vue-axios)
* [Vue-loading-overlay](https://github.com/ankurk91/vue-loading-overlay)
* [Vue-toastification](https://github.com/Maronato/vue-toastification)
* [Vue-backtotop](https://github.com/caiofsouza/vue-backtotop)
* [Vue-step-progress](https://github.com/bastidest/vue-step-progress)

## 網站功能介紹 - 前台

首頁 banner：當點擊往下看更多內容，就會往下滾動到下方遊戲主打區。
![首頁 banner](https://i.imgur.com/hv8HPDV.jpg)

遊戲主打區，使用輪播效果展示部份主打商品，點擊該商品便可轉到該商品詳細頁面。
![遊戲主打區](https://i.imgur.com/gdgGXZL.png)

### 商品一覽

展示全部商品。
![顯示全部商品頁面](https://i.imgur.com/jh2jPb1.png)

商品卡片可操作功能。
![商品卡片可操作功能](https://i.imgur.com/fPSSI9d.png)

商品分類顯示功能。
![分類顯示功能](https://i.imgur.com/o4utyyQ.png)

### 單一商品頁面

單一商品詳細頁面。
![單一商品詳細頁面](https://i.imgur.com/BUWVzFb.png)
個別功能介紹。
![商品詳細頁面個別功能介紹](https://i.imgur.com/9mJ8AiS.png)

### 進入購物車流程

1. 顯示購物車商品數量及價格資訊

![購物車](https://i.imgur.com/TiqVvWr.png)

2. 填寫資料頁面

* 必填欄位如未填寫經過驗證會提醒使用者
![填寫資料](https://i.imgur.com/gjHW2aX.png)

* 優惠碼的使用
![優惠碼的使用](https://i.imgur.com/DL43xOH.png)

3. 確認訂單

顯示訂購的商品數量及金額，如果有折扣則會顯示折扣後價格。
![20200916225211](https://i.imgur.com/Kxh5Ohw.png)
![20200916225248](https://i.imgur.com/7DPAMLX.png)

## 網站功能介紹 - 後台

### 使用者登入頁面

需要輸入正確帳號密碼，才能進入後台頁面。
![20200916230222](https://i.imgur.com/nhcvZcL.png)

### 產品列表頁面

進入後台，預設進入管理產品列表，在這裡可以新增商品，及編輯或刪除原有商品。
![20200916230652](https://i.imgur.com/zh2fw9u.png)

點擊建立新的商品，會跳出新增商品 Modal
![20200916231019](https://i.imgur.com/oDSVDWW.png)

編輯原有商品
![20200916231254](https://i.imgur.com/r2npOTE.png)

刪除商品
![20200916231337](https://i.imgur.com/DECngZB.png)

### 優惠券列表頁面

可以新增優惠券，及編輯或刪除原有優惠券。
![20200916231601](https://i.imgur.com/D6OsL9t.png)
![20200916231644](https://i.imgur.com/5KuBC95.png)

### 訂單列表頁面

可以編輯訂單付款狀態，及觀看該訂單客戶資料。
![20200916231828](https://i.imgur.com/uyOowKZ.png)
![20200916231935](https://i.imgur.com/sqzgbQ0.png)

### 圖片儲存列表頁面

顯示經由新增商品上傳圖片，並且可以刪除圖片。
![20200916232157](https://i.imgur.com/J8Zejcm.png)
![20200916232357](https://i.imgur.com/RDzFQFU.png)