<template>
<div class="before-login">
    <a href="{% url 'top_single' %}">
        <i class="ui-icon-emo"></i>
        <p>普通水果</p>
    </a>
    <a href="{% url 'top_combo' %}">
        <i class="ui-icon-wallet"></i>
        <p>水果套餐</p>
    </a>
    <a href="{% url 'people:register' %}">
        <i class="ui-icon-add-people"></i>
        <p>注册</p>
    </a>
    <a href="{% url 'people:login' %}">
        <i class="ui-icon-pc"></i>
        <p>登录</p>
    </a>
</div>
</template>

<script>
export default {
  name: 'top-nav'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
