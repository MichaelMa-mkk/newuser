<template>
<section>
  <head-bar head_text="水果详情"></head-bar>

  <div class="box">
      <p>{{ fruit.name }}</p>
      <a>{{ fruit.advertising }}</a>
      <h1>￥{{ fruit.price_sell }}</h1>
  </div>

  <footer class="ui-footer ui-header-stable">
      <div class="ui-row-flex ui-whitespace">
          <div class="ui-col ui-flex ui-flex-pack-center">
              <router-link :to="{ name: 'Cart' }">
                  <i class="ui-icon-cart"></i>
              </router-link>
          </div>
          <div class="ui-col ui-col-4 ui-flex ui-flex-align-center ui-flex-pack-center" style = "">
              <p>加入购物车</p>
          </div>
      </div>
  </footer>
</section>
</template>

<script>
import HeadBar from '../components/head-bar'
export default {
  name: 'detail',
  components: {
    HeadBar
  },
  data () {
    return {
      fruit: {
        name: '苹果',
        advertising: '广告词',
        price_sell: 6.66
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ui-footer{
    height: 44px;
    padding-right: 0px;
    padding-left: 0px;
}
.ui-whitespace{
    padding-right: 0px;
    padding-left: 0px;
}
.ui-flex-align-center{
    background-color:#FFC125;
    color: white;
    padding-bottom: 7px;
}
section{
  margin-top: 55px;
}
.advertise {
  width: 100%;
  height: 100%;
  background-color: #fff;
  margin-top: 47px;
}
.box{
    margin: 20px auto;
    width: 90%;
    min-height: 100px;
    padding: 10px;
    position:relative;
    background: -webkit-gradient(linear, 100% 100%, 50% 10%, from(#fff), to(#f3f3f3), color-stop(.1,#fff));
    border: 1px solid #ccc;
    -webkit-box-shadow: 1px 1px 4px rgba(0,0,0, 0.1);
    -webkit-border-bottom-right-radius: 60px 5px;
}
.box:before{
    content: '';
    width: 98%;
    z-index:-1;
    height: 100%;
    padding: 0 0 1px 0;
    position: absolute;
    bottom:0; right:0;
    background: -webkit-gradient(linear, 0% 20%, 0% 92%, from(#fff), to(#f9f9f9), color-stop(.1,#fff));
    border: 1px solid #ccc;
    -webkit-box-shadow: 1px 1px 8px rgba(0,0,0, 0.1);
    -webkit-border-bottom-right-radius: 60px 5px;
    -webkit-transform: skew(2deg,2deg)
                        translate(3px,8px)
}
.box:after{
    content: '';
    width: 98%;
    z-index:-1;
    height: 98%;
    padding: 0 0 1px 0;
    position: absolute;
    bottom:0; right:0;
    background: -webkit-gradient(linear, 0% 20%, 0% 100%, from(#f3f3f3), to(#f6f6f6), color-stop(.1,#fff));
    border: 1px solid #ccc;
    -webkit-box-shadow: 0px 0px 8px rgba(0,0,0, 0.1);
    -webkit-transform: skew(2deg,2deg)
                        translate(-1px,2px)
}
.box a{
    color: gray;
}
.box h1{
    color: orange;
}
p{ 
    margin-top: 10px;
    text-align: justify;
}
h1{
    font-size: 20px;
    font-weight: bold;
    margin-top: 5px; 
    text-shadow: 1px 1px 3px rgba(0,0,0,0.3);
}
</style>
