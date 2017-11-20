<template>
<div>
    <ul class="fruit-list ui-grid-halve">
      <li v-for="(item, index) in fruits">
        <router-link :to="{ name: 'FruitDetail', params: {id: index}}">
          <div class="ui-grid-halve-img">
            <img src="../../../static/apple.jpg">
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
  name: 'fruit-combo',
  data () {
    return {
      fruits: [
        {
          name: '果切',
          price_sell: 6.66,
          price_origin: 8.88
        },
        {
          name: '果切',
          price_sell: 6.66,
          price_origin: 8.88
        },
        {
          name: '果切',
          price_sell: 6.66,
          price_origin: 8.88
        },
        {
          name: '果切',
          price_sell: 6.66,
          price_origin: 8.88
        },
        {
          name: '果切',
          price_sell: 6.66,
          price_origin: 8.88
        },
        {
          name: '果切',
          price_sell: 6.66,
          price_origin: 8.88
        },
        {
          name: '果切',
          price_sell: 6.66,
          price_origin: 8.88
        },
        {
          name: '果切',
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
.fruit-list li {
  padding:0px 20px 20px;
  background-color: rgba(255,255,255,0.4);
  border-radius: 4px;
  box-shadow: 0px 0px 5px gray;
  margin-bottom: 3%;
  width: 42.5vw;
  height: 42.5vw;
  margin-left: 2%;
  margin-right: 2%;
}
.fruit-list li div {
  height: 75%;
  padding-top: 4%;
}
.fruit-list li p {
  height: 15%;
}
.fruit-list li em {
  font-size: 80%;
}
.fruit-list li span {
  text-decoration: line-through;
  font-size: 50%;
  color: grey;
}
</style>
