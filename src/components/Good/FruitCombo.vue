<template>
<div>
    <ul class="fruit-list ui-grid-halve">
      <li v-for="(item, index) in fruits">
        <router-link :to="{ name: 'FruitDetail', params: {id: index}}">
          <div class="ui-grid-halve-img">
            <img src="../../../static/logo.png">
          </div>
          <p>{{ item.name }}</p>
        </router-link>
        <em>￥{{ item.price_sell }}</em>
        <span>￥{{ item.price_origin }}</span>
      </li>
    </ul>
</div>
</template>

<script>
export default {
  name: 'fruit-single',
  data () {
    return {
      fruits: [
        {
          name: '苹果',
          price_sell: 6.66,
          price_origin: 8.88
        },
        {
          name: '苹果',
          price_sell: 6.66,
          price_origin: 8.88
        },
        {
          name: '苹果',
          price_sell: 6.66,
          price_origin: 8.88
        },
        {
          name: '苹果',
          price_sell: 6.66,
          price_origin: 8.88
        },
        {
          name: '苹果',
          price_sell: 6.66,
          price_origin: 8.88
        },
        {
          name: '苹果',
          price_sell: 6.66,
          price_origin: 8.88
        },
        {
          name: '苹果',
          price_sell: 6.66,
          price_origin: 8.88
        },
        {
          name: '苹果',
          price_sell: 6.66,
          price_origin: 8.88
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
