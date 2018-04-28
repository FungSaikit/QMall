<template>
  <div class="content" style="background: url('/static/PersonalCenter/pc_bg.jpg') no-repeat top center; -webkit-background-size: 100% 14rem; background-size: 100% 14rem;">
    <div class="top">
      <div class="greet">&nbsp&nbsp您好，FungSaikit。</div>
      <div class="setting-btn" onclick="showSettingWindow()">
        <img class="p-photo" src="static/PersonalCenter/icon.jpg" alt="">
        <div>设置</div>
      </div>
    </div>
    <div class="wallet-swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="st">￥ <span class="rmb">39,606</span>.00</div>
          <div class="sb">
            <img src="static/PersonalCenter/can_withdraw.png">
            <span class="wt">可提现货款</span>
          </div>
        </div>
      </div>
      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev swiper-button-white"></div>
      <div class="swiper-button-next swiper-button-white"></div>
    </div>
    <div class="top-info">
      <div class="ib">
        <div>4850</div>
        <div>会员积分</div>
      </div>
      <div class="ib">
        <div>￥55894.50</div>
        <div>账户总额</div>
      </div>
      <div class="ib">
        <div>2</div>
        <div>优惠券</div>
      </div>
    </div>
    <div class="i2m">
      <div class="i2mb">
        <div class="i2m0">收藏夹</div>
        <img src="static/PersonalCenter/menu0.png" class="i2m1">
        <div class="i2m2">因为不一样，世界才精彩</div>
      </div>
      <div class="i2mb">
        <div class="i2m0">钱包中心</div>
        <img src="static/PersonalCenter/menu1.png" class="i2m1">
        <div class="i2m2">每个人都有自己的小金库</div>
      </div>
    </div>
    <div class="i2m" style="border-top: 0;">
      <div class="i2mb">
        <div class="i2m0">客户列表</div>
        <img src="static/PersonalCenter/menu2.png" class="i2m1">
        <div class="i2m2">他们都是我的大爷！</div>
      </div>
      <div class="i2mb">
        <div class="i2m0">我要推广</div>
        <img src="static/PersonalCenter/menu3.png" class="i2m1">
        <div class="i2m2">客户永远不会自己送上门来</div>
      </div>
    </div>
    <div class="order">
      <div class="ot">
        <div class="otl">&nbsp&nbsp我的订单</div>
        <div class="otr">查看全部订单&nbsp</div>
        <img src="static/PersonalCenter/go.png" class="oti">
      </div>
      <div class="of">
        <div class="ofi">
          <img src="static/PersonalCenter/order0.png" alt="">
          <div>待付款</div>
          <div class="ofin">1</div>
        </div>
        <div class="ofi">
          <img src="static/PersonalCenter/order1.png" alt="">
          <div>待发货</div>
          <div class="ofin">200</div>
        </div>
        <div class="ofi">
          <img src="static/PersonalCenter/order2.png" alt="">
          <div>待收货</div>
          <div class="ofin">5</div>
        </div>
        <div class="ofi">
          <img src="static/PersonalCenter/order3.png" alt="">
          <div>待评价</div>
          <div class="ofin">3</div>
        </div>
      </div>
    </div>
    <div class="order">
      <div class="ot">
        <div class="otl">&nbsp&nbsp客户订单</div>
        <div class="otr">查看全部订单&nbsp</div>
        <img src="static/PersonalCenter/go.png" class="oti">
      </div>
      <div class="of">
        <div class="ofi">
          <img src="static/PersonalCenter/order0.png" alt="">
          <div>待付款</div>
          <div class="ofin">1</div>
        </div>
        <div class="ofi">
          <img src="static/PersonalCenter/order1.png" alt="">
          <div>待发货</div>
          <div class="ofin">200</div>
        </div>
        <div class="ofi">
          <img src="static/PersonalCenter/order2.png" alt="">
          <div>待收货</div>
          <div class="ofin">5</div>
        </div>
        <div class="ofi">
          <img src="static/PersonalCenter/order3.png" alt="">
          <div>待评价</div>
          <div class="ofin">3</div>
        </div>
      </div>
    </div>
    <div class="ad-swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="static/PersonalCenter/swiper_pic.jpg">
        </div>
        <div class="swiper-slide">
          <img src="static/PersonalCenter/swiper_pic.jpg">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="order other">
      <div class="ot">
        <div class="otl">&nbsp&nbsp其他功能</div>
      </div>
      <div class="ot">
        <img src="static/PersonalCenter/other0.png" alt="" class="spi">
        <div class="otl sp">&nbsp&nbsp地址管理</div>
        <img src="static/PersonalCenter/go.png" class="oti">
      </div>
      <div class="ot">
        <img src="static/PersonalCenter/other1.png" alt="" class="spi">
        <div class="otl sp">&nbsp&nbsp本区域价格设置</div>
        <img src="static/PersonalCenter/go.png" class="oti">
      </div>
      <div class="ot">
        <img src="static/PersonalCenter/other2.png" alt="" class="spi">
        <div class="otl sp">&nbsp&nbsp服务于反馈</div>
        <img src="static/PersonalCenter/go.png" class="oti">
      </div>
      <div class="ot">
        <img src="static/PersonalCenter/other3.png" alt="" class="spi">
        <div class="otl sp">&nbsp&nbsp售后列表</div>
        <img src="static/PersonalCenter/go.png" class="oti">
      </div>
      <div class="ot">
        <img src="static/PersonalCenter/order1.png" alt="" class="spi">
        <div class="otl sp">&nbsp&nbsp今日待发列表</div>
        <img src="static/PersonalCenter/go.png" class="oti">
      </div>
      <div class="ot">
        <img src="static/PersonalCenter/order2.png" alt="" class="spi">
        <div class="otl sp">&nbsp&nbsp待收货列表</div>
        <img src="static/PersonalCenter/go.png" class="oti">
      </div>
      <div class="ot">
        <img src="static/PersonalCenter/order3.png" alt="" class="spi">
        <div class="otl sp">&nbsp&nbsp已收货列表</div>
        <img src="static/PersonalCenter/go.png" class="oti">
      </div>
    </div>
    <div class="setting-window" hidden>
      <div class="topbar">
        <div class="tb-bt" onclick="showSettingWindow()">
          <img src="static/PersonalCenter/back-white.png" alt="">
        </div>
        <div class="tb-title">信息修改</div>
        <div class="tb-bt"></div>
      </div>
      <div class="tb-placeholder"></div>
      <div class="order other">
        <div class="ot otp">
          <div class="otl sp">会员头像</div>
          <div class="ost">
            <img class="l-photo round-photo" src="static/PersonalCenter/icon.jpg" alt="">
          </div>
          <img src="static/PersonalCenter/go.png" class="oti">
        </div>
        <div class="ot" onclick="changeInfo(this)">
          <div class="otl sp">会员昵称</div>
          <div class="ost">FungSaikit</div>
          <img src="static/PersonalCenter/go.png" class="oti">
        </div>
        <div class="ot" onclick="changeInfo(this)">
          <div class="otl sp">性别</div>
          <div class="ost">男</div>
          <img src="static/PersonalCenter/go.png" class="oti">
        </div>
      </div>
      <div class="order other">
        <div class="ot" onclick="changeInfo(this)">
          <div class="otl sp">店铺名称</div>
          <div class="ost">灯饰商城</div>
          <img src="static/PersonalCenter/go.png" class="oti">
        </div>
        <div class="ot" onclick="changeInfo(this)">
          <div class="otl sp">联系电话</div>
          <div class="ost">13313313313</div>
          <img src="static/PersonalCenter/go.png" class="oti">
        </div>
        <div class="ot" onclick="changeInfo(this)">
          <div class="otl sp">QQ号</div>
          <div class="ost">675703302</div>
          <img src="static/PersonalCenter/go.png" class="oti">
        </div>
        <div class="ot" onclick="changeInfo(this)">
          <div class="otl sp">店铺地址</div>
          <div class="ost">广东省 广州市 天河区 五山路483号</div>
          <img src="static/PersonalCenter/go.png" class="oti">
        </div>
        <div class="ot otp">
          <div class="otl sp">店铺二维码</div>
          <div class="ost">
            <img class="l-photo" src="static/PersonalCenter/qrcode.jpg" alt="">
          </div>
          <img src="static/PersonalCenter/go.png" class="oti">
        </div>
        <div class="ot otp">
          <div class="otl sp">推广二维码</div>
          <div class="ost">
            <img class="l-photo" src="static/PersonalCenter/qrcode.jpg" alt="">
          </div>
          <img src="static/PersonalCenter/go.png" class="oti">
        </div>
      </div>
    </div>
    <!--最下方给底部导航栏留出空位-->
    <div class="placeholder"></div>
  </div>
</template>

<script>

  import Swiper from '../../static/Swiper/swiper-4.2.2.min'

  export default {
    name: "PersonalCenter",
    mounted() {
      var walletSwiper = new Swiper('.wallet-swiper', {
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })

      var adSwiper = new Swiper('.ad-swiper', {
        loop: true,
        autoplay: true,
        pagination: {
          el: '.swiper-pagination',
        }
      })
    }
  }
</script>

<style scoped>

  @import url('../../static/Swiper/swiper-4.2.2.min.css');

  .placeholder {
    height: 3.2rem;
    width: 100%;
  }

  .content {
    width: 100%;
    background-color: #e4eaea;
  }

  .top {
    display: flex;
    display: -webkit-flex;
    height: 3rem;
    line-height: 3rem;
    color: #fff;
  }

  .greet {
    flex-grow: 1;
  }

  .setting-btn {
    width: 7rem;
    display: flex;
    display: -webkit-flex;
  }

  .p-photo {
    width: 2.1rem;
    height: 2.1rem;
    border: 0.1rem solid white;
    border-radius: 1.3rem;
    margin: 0.35rem;
  }

  .setting-btn div {
    flex-grow: 1;
    -webkit-flex-grow: 1;
    text-align: center;
  }

  .wallet-swiper {
    width: 18rem;
    height: 5rem;
    position: relative;
    overflow: hidden;
    margin: auto;
    text-align: center;
    color: #fff;
  }

  .rmb {
    font-size: 1.8rem;
  }

  .st {
    height: 50%;
  }

  .sb {
    height: 50%;
  }

  .wt {
    line-height: 2.5rem;
    border-bottom: 1px solid #fff;
  }

  .sb img {
    width: 1.4rem;
    height: 1.4rem;
    vertical-align: middle;
  }

  .top-info {
    width: 96%;
    margin: 2%;
    display: flex;
    display: -webkit-flex;
    height: 2.5rem;
    line-height: 2.5rem;
    border-top: 1px solid #dec8f6;
    text-align: center;
    color: #ffffff;
    font-size: 0.8rem;
  }

  .ib {
    height: 90%;
    width: 30%;
    flex-grow: 1;
    -webkit-flex-grow: 1;
    margin-top: 0.3rem;
    line-height: 1rem;
  }

  .ib:nth-child(2) {
    border-left: 1px solid #dec8f6;
    border-right: 1px solid #dec8f6;
  }

  .i2m {
    height: 5rem;
    background-color: #fff;
    margin: 0 0.5rem 0 0.5rem;
    border-top: 1px solid lightgray;
    border-left: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    display: flex;
    display: -webkit-flex;
    color: dimgray;
  }

  .i2mb {
    width: 50%;
    border-right: 1px solid lightgray;
    position: relative;
  }

  .i2m0 {
    height: 3rem;
    width: 6rem;
    line-height: 3rem;
    position: absolute;
    top: 0;
    left: 0.5rem;
    font-size: 1rem;
  }

  .i2m1 {
    height: 1.5rem;
    width: 1.5rem;
    position: absolute;
    left: 6rem;
    top: 0.7rem;
  }

  .i2m2 {
    position: absolute;
    left: 0.5rem;
    bottom: 1rem;
    font-size: 0.7rem;
  }

  .order {
    margin-top: 0.5rem;
    border-top: 1px solid lightgray;
    width: 100%;
    height: 8rem;
    background-color: #fff;
  }

  .ot {
    height: 1rem;
    line-height: 1rem;
    padding: 1rem;
    border-bottom: 1px solid lightgray;
    display: flex;
  }

  .ot.otp {
    height: 3rem;
    line-height: 3rem;
  }

  .ot.otp .oti {
    margin-top: 1rem;
  }

  .otl {
    flex-grow: 1;
    -webkit-flex-grow: 1;
    border-left: 2px solid #a577f1;
    white-space: nowrap;
  }

  .otr {
    color: gray;
  }

  .oti {
    height: 1rem;
    width: 1rem;
  }

  .of {
    display: flex;
    display: -webkit-flex;
  }

  .ofi {
    width: 25%;
    height: 5rem;
    text-align: center;
    font-size: 0.8rem;
    color: dimgray;
    position: relative;
  }

  .ofi img {
    display: block;
    width: 1.8rem;
    height: 1.8rem;
    margin: 0.7rem auto;
  }

  .ofin {
    position: absolute;
    right: 1rem;
    top: 0.5rem;
    background-color: #f38200;
    min-width: 1rem;
    height: 1rem;
    line-height: 1rem;
    color: #fff;
    border-radius: 1rem;
    font-size: 0.8rem;
    text-align: center;
    padding: 0.1rem;
  }

  .ad-swiper {
    margin-top: 0.5rem;
    width: 100%;
    overflow: hidden;
    position: relative;
    min-height: 5rem;
  }

  .ad-swiper img {
    width: 100%;
  }

  .order.other {
    height: auto;
  }

  .otl.sp {
    border: 0;
    color: #696969;
  }

  .ost {
    font-size: 0.8rem;
    color: dimgray;
    margin-right: 0.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .spi {
    width: 1.2rem;
    height: 1.2rem;
  }

  .wallet-swiper .swiper-button-prev, .swiper-button-next {
    width: 1.5rem;
    height: 3rem;
    background-size: 0.75rem 1rem;
  }

  .setting-window {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: scroll;
    background-color: #e4eaea;
    z-index: 100;
  }

  .l-photo {
    width: 3rem;
    height: 3rem;
  }

  .round-photo {
    border-radius: 3rem;
  }
</style>
