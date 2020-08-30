<template>
  <div>
    <b-container style="margin-top: 100px;">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-white px-0">
          <li class="breadcrumb-item">
            <router-link to="/" class="text-muted">首頁</router-link>
          </li>
          <li class="breadcrumb-item">
            認識桌遊
          </li>
        </ol>
      </nav>
    </b-container>
    <b-container>
      <div class="about_game"><h2>什麼是桌遊？</h2></div>
      <!-- <b-img src="https://images.unsplash.com/photo-1547444795-ad4270fa2885?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1604&q=80" fluid></b-img> -->
      <p class="mt-3 text-center">桌遊種類成千上萬，但我們可以依照全球知名網站
        <a href="#" @click="linkToBGG">
          <strong>BoardGameGeek</strong>
        </a>
        所提供的 8 大分類來簡單的做個介紹：
      </p>
    </b-container>
    <b-container class="my-7 mt-5">
      <div class="row flex-row-reverse justify-content-between mt-4">
        <div class="col-md-6">
          <b-img-lazy
            src="https://images.unsplash.com/photo-1574309122960-34273ebda15e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            rounded
            fluid
          />
        </div>
        <div class="col-md-4 m-auto text-left">
          <h4 class="mt-2">派對遊戲(Party Games)</h4>
          <p class="text-muted">
            人太多不知道要幹嘛？來玩派對遊戲吧～<br/>
            可以支援至少 6 人以上、規則簡單、任何人都可以快速上手的派對遊戲，相當適合新手與聚會場合。
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <b-img-lazy
            src="https://images.unsplash.com/photo-1533777419517-3e4017e2e15a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            rounded
            fluid
          />
        </div>
        <div class="col-md-4 m-auto">
          <h4 class="mt-2">家庭遊戲(Family Games)</h4>
          <p class="about-tg text-muted">
            家庭遊戲這個分類其實有部份會跟派對遊戲或是兒童遊戲重疊，同樣都是互動性高，可以讓大小朋友一起同樂。
            不過它比較特別的是加入了策略與運氣的機制，並且讓每位玩家可以稍微思考，但也不會太過燒腦，畢竟要涵蓋的年齡範圍很廣，所以如果想要讓全家一起增進感情的話，這是一個不錯的選擇。
          </p>
        </div>
      </div>
      <div class="row flex-row-reverse justify-content-between mt-4">
        <div class="col-md-6">
          <b-img-lazy
            src="https://images.unsplash.com/photo-1469406396016-013bfae5d83e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            rounded
            fluid
          />
        </div>
        <div class="col-md-4 m-auto">
          <h4 class="mt-2">兒童遊戲(Children's Game)</h4>
          <p class="about-tg text-muted">
            顧名思義這個分類的遊戲，主要是設計給 3 到 5 歲的小孩遊玩，通常不會有太多的文字說明，可以讓小朋友馬上乖乖坐好（也許爸媽都應該要有？）放聲大笑的玩，
            不過因為好上手，一般新手玩家也是考慮可以從這邊入門。
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <b-img-lazy
            src="https://images.unsplash.com/photo-1530210124550-912dc1381cb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            rounded
            fluid
          />
        </div>
        <div class="col-md-4 m-auto">
          <h4 class="mt-2">策略遊戲(Strategy Games)</h4>
          <p class="about-tg text-muted">
            這是一個開始邁入重度玩家的區間，很多玩家在體驗過輕鬆有趣的桌遊後，就開始想要挑戰需要燒腦的遊戲，那麼策略遊戲就是你該進入的坑（咦？）<br/>
            策略遊戲多了許多機制，例如可以有區塊佔領、卡片輪抽，或是手牌管理...等等。這也讓遊戲多了許多耐玩性，不過要注意別想太久就是了。
          </p>
        </div>
      </div>
      <div class="row flex-row-reverse justify-content-between mt-4">
        <div class="col-md-6">
          <b-img-lazy
            src="https://images.unsplash.com/photo-1494972688394-4cc796f9e4c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            rounded
            fluid
          />
        </div>
        <div class="col-md-4 m-auto">
          <h4 class="mt-2">戰爭遊戲(War Game)</h4>
          <p class="about-tg text-muted">
            戰爭遊戲是一個有趣的分類，它有部份會跟策略遊戲雷同，不過簡易區分兩類的差別是有軍事或是戰爭的元素在其中，可以讓玩家扮演個人或代表部隊或甚至是國家來攻城掠地。
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <b-img-lazy
            src="https://images.unsplash.com/photo-1523895665936-7bfe172b757d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            rounded
            fluid
          />
        </div>
        <div class="col-md-4 m-auto">
          <h4 class="mt-2">抽象遊戲(Abstract Games)</h4>
          <p class="about-tg text-muted">
            抽象就是抽象畫（喂～）<br/>
            抽象遊戲最知名的就是佐為下的圍棋了，特色是運氣比重較低，重邏輯（也許工程師都需要來玩？），易學難精，部份有加入畫面意象的主題，燒腦程度甚至更勝策略遊戲。
          </p>
        </div>
      </div>
      <div class="row flex-row-reverse justify-content-between mt-4">
        <div class="col-md-6">
          <b-img-lazy
            src="https://images.unsplash.com/photo-1547638382-ed227146ab88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1191&q=80"
            rounded
            fluid
          />
        </div>
        <div class="col-md-4 m-auto">
          <h4 class="mt-2">主題遊戲(Thematic Game)</h4>
          <p class="about-tg text-muted">
            又稱情境遊戲，會有一個故事設定讓你融入整個環境，比如一行人組隊去打怪、打殭屍，並經常有事件發生，這時候你跟組員就需要團結一致共同對抗敵人，不過也要小心也許有內奸（！？）。
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <b-img-lazy
            src="https://images.unsplash.com/photo-1593814681464-eef5af2b0628?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            rounded
            fluid
          />
        </div>
        <div class="col-md-4 m-auto">
          <h4 class="mt-2">客製遊戲(Customizable Games)</h4>
          <p class="about-tg text-muted">
            這邊的客製不是指客製化遊戲，而是每位玩家可以客製屬於自己的牌組，最著名的例子是魔法風雲會或是遊戲王，還有近來熱門的寶可夢卡牌都是屬於這個分類。
            大多數為一對一玩家對戰機制，玩家間也可以互相交換卡牌來強化自身牌組，有可能是最花錢的桌遊，但因有其特殊市場機制，也許能從中致富也不一定。
          </p>
        </div>
      </div>
    </b-container>
    <b-container class="mt-5">
      <div class="about_game mb-3"><h2>更認識桌遊了嗎？</h2></div>
      <router-link to="/products" class="text-dark mt-5 mt-3 h5">
        <i class="fas fa-chevron-right mr-2"></i>
        去找些來玩吧～
      </router-link>
    </b-container>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/front/Footer.vue';

export default {
  name: 'GameInfo',
  components: {
    Footer,
  },
  data() {
    return {};
  },
  methods: {
    linkToBGG() {
      window.location.href = 'https://boardgamegeek.com/';
    },
  },
};
</script>

<style lang="scss" scoped>
.about_game{
  overflow: hidden;

  h2 {
    display: inline-block;
    line-height: 45px;
    position: relative;
  }

/* 使用偽元素作出橫線 */
  h2::before, h2::after{
    content: "";
    height: 1px;
    background: #000;
    top: 50%;
    width: 70%;
    position: absolute;
  }

  h2::before{
    left: -80%;
  }

  h2::after{
    right: -80%;
  }
}

p {
  line-height: 35px;
  text-align: left;
}
</style>
