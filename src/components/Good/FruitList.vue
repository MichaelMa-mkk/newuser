<template>
<section class="ui-container">
  <top-nav></top-nav>
  <router-view></router-view>
  <not-develop></not-develop>
  <bot-nav home="on"></bot-nav>
</section>
</template>

<script>
import TopNav from '@/components/components/top-nav'
import BotNav from '@/components/components/bot-nav'
import NotDevelop from '@/components/components/not-develop'

export default {
  name: 'fruit-list',
  components: {
    BotNav, TopNav, NotDevelop
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ui-container{
  margin-bottom: 60px;
}
</style>
