<template>
<div class="before-login">
    <router-link :to="{ name: 'FruitSingle'}">
        <i class="ui-icon-emo"></i>
        <p>普通水果</p>
    </router-link>
    <router-link :to="{ name: 'FruitCombo'}">
        <i class="ui-icon-wallet"></i>
        <p>水果套餐</p>
    </router-link>
    <router-link :to="{ }">
        <i class="ui-icon-add-people"></i>
        <p>注册</p>
    </router-link>
    <router-link :to="{ }">
        <i class="ui-icon-pc"></i>
        <p>登录</p>
    </router-link>
</div>
</template>

<script>
export default {
  name: 'top-nav'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.before-login {
    margin-left:4%;
    margin-top: 3%;
    margin-right:0%;
}
.before-login a {
    display: inline-block;
    width: 23%;
    text-align: center;
}
.before-login a i {
    color: #00a5e0;
    font-size: 300%;
}
</style>
