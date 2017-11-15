<template>
<section class="ui-container">
    <top-nav></top-nav>
    <bot-nav></bot-nav>
    <not-develop></not-develop>
</section>
</template>

<script>
import TopNav from '@/components/components/top-nav'
import BotNav from '@/components/components/bot-nav'
import NotDevelop from '@/components/components/not-develop'
export default {
  name: 'fruit-single',
  components: {
    BotNav, TopNav, NotDevelop
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
