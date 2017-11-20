<template>
<section>
  <head-bar head_text="购物车"></head-bar>
  <cart-list></cart-list>
  <not-develop></not-develop>
  <bot-nav cart="on"></bot-nav>
</section>
</template>

<script>
import HeadBar from '@/components/components/head-bar'
import BotNav from '@/components/components/bot-nav'
import NotDevelop from '@/components/components/not-develop'
import CartList from './cart-list'

export default {
  name: 'cart',
  components: {
    BotNav, HeadBar, NotDevelop, CartList
  }
}
</script>
