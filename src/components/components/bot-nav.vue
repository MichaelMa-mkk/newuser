<template>
<footer class="ui-footer ui-border-t">
    <ul class="ui-tiled">
        <li :class="home"><router-link :to="{ name: 'Index' }">
            <i class="ui-icon-home"></i>
            <p>首页</p>
        </router-link>
        </li>
        <li :class="news"><a @click="show_dialog">
            <i class="ui-icon-news"></i>
            <p>消息</p>
        </a>
        </li>
        <li :class="trend"><a @click="show_dialog">
            <i class="ui-icon-trend" style="font-size: 300%"></i>
            <p>收藏</p>
        </a>
        </li>
        <li :class="cart"><router-link :to="{ name: 'Cart' }">
            <i class="ui-icon-cart"></i>
            <p>购物车</p>
        </router-link>
        </li>
        <li :class="personal"><router-link :to="{ name: '' }">
            <i class="ui-icon-personal"></i>
            <p>我的</p>
        </router-link>
        </li>
    </ul>
</footer>
</template>

<script>
export default {
  name: 'bot-nav',
  props: [
    'home',
    'news',
    'trend',
    'cart',
    'personal'
  ],
  methods: {
    show_dialog () {
      var att = document.createAttribute('class')
      var dialogElement = document.getElementById('not_develop')
      att.value = dialogElement.className + ' show'
      dialogElement.setAttributeNode(att)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ui-footer {
    background-color: white
}
.ui-tiled li i, .ui-tiled li p {
    cursor: pointer;
    color: grey;
}
.ui-tiled li p {
    font-size: 80%;
}
.ui-tiled li i {
    margin-bottom: -10px;
}
.on p, .on i {
    color: #00a5e0 !important;
}
</style>
