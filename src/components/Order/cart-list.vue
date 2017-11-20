<template>
<section class="ui-container">
  <!-- 弹窗-->
  <div class="ui-dialog">
    <div class="ui-dialog-cnt">
      <div class="ui-dialog-bd">
        <h4>确定删除<span id="dialog-good-name"></span>吗?</h4>
      </div>
      <div class="ui-dialog-ft">
        <button type="button" onclick="$('.ui-dialog').removeClass('show');">考虑考虑</button>
        <button type="button" @click="confirmdelete" onclick="$('.ui-dialog').removeClass('show');">扔了扔了</button>
      </div>
    </div>
  </div>
  <div v-for="(item, index) in itemList" v-if="item" class="panel panel-default cart-good-item" :id="'id_'+index">
    <ul class="ui-list ui-border-tb">
      <li>
        <div class="ui-list-info ui-border-t">
          <ul class="ui-row">
            <li class="ui-col ui-col-67">
              <h4 class="ui-nowrap">{{ item.fruit.name }}</h4>
              <p class="ui-nowrap">{{ item.fruit.price_sell }}</p>
            </li>
            <li class="ui-col ui-col-33">
              <ul class="ui-row">
                <li class="ui-col ui-col-100">
                  <button type="button" id="delete" @click="itemdelete(index, item.fruit.name);" onclick="$('.ui-dialog').addClass('show');">
                    <i class="ui-icon-delete"></i>
                  </button>
                </li>
              </ul>
              <ul class="ui-row">
                <li class="ui-col ui-col-33">
                  <button type="button" @click="amountdec(index)">
                    <img src="../../../static/minus.png" class="img-responsive">
                  </button>
                  </li>
                  <li class="ui-col ui-col-33">
                    <input type="text" class="num_show" style="width:20px" readonly="readonly" :value="item.amount">
                  </li>
                  <li class="ui-col ui-col-33">
                    <button type="button" @click="amountinc(index)">
                      <img src="../../../static/plus.png" class="img-responsive">
                    </button>
                  </li>
              </ul>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
  <ul class="ui-list ui-list-text">
    <li class="ui-border-t">
      <div class="ui-list-info">
        <h4>价格</h4>
      </div>
      <div class="ui-list-action">
        <h4>{{ totalPrice }}</h4>
      </div>
    </li>
    <li class="ui-border-t">
      <div class="ui-list-info">
        <h4>运费</h4>
      </div>
      <div class="ui-list-action">
        五毛钱（约合￥0.5）
      </div>
    </li>
    <li class="ui-border-tb">
      <div class="ui-list-info">
        <h4>总价</h4>
      </div>
      <div class="ui-list-action">
        <h4>{{ totalAmount }}</h4>
      </div>
    </li>                
  </ul>
</section>
</template>

<script>
export default {
  name: 'cart_list',
  methods: {
    removeElement (_element) {
      var _parentElement = _element.parentNode
      if (_parentElement) {
        _parentElement.removeChild(_element)
      }
    },
    calculatetotalprice () {
      this.totalPrice = 0.0
      for (var item in this.itemList) {
        this.totalPrice += this.itemList[item].fruit.price_sell * this.itemList[item].amount
      }
      this.totalAmount = this.totalPrice + 0.5
      console.log(this.totalPrice)
      this.totalPrice = this.totalPrice.toFixed(2)
      this.totalAmount = this.totalAmount.toFixed(2)
    },
    amountdec (itemId) {
      if (this.itemList[itemId].amount > 1) {
        this.totalPrice = parseFloat(this.totalPrice)
        this.itemList[itemId].amount -= 1
        this.totalPrice -= this.itemList[itemId].fruit.price_sell
        this.totalAmount = this.totalPrice + 0.5
        this.totalPrice = this.totalPrice.toFixed(2)
        this.totalAmount = this.totalAmount.toFixed(2)
      }
    },
    amountinc (itemId) {
      this.totalPrice = parseFloat(this.totalPrice)
      this.itemList[itemId].amount += 1
      this.totalPrice += this.itemList[itemId].fruit.price_sell
      this.totalAmount = this.totalPrice + 0.5
      this.totalPrice = this.totalPrice.toFixed(2)
      this.totalAmount = this.totalAmount.toFixed(2)
    },
    itemdelete (itemId, name) {
      var nameElement = document.getElementById('dialog-good-name')
      nameElement.innerHTML = name
      var dialogElement = document.getElementsByClassName('ui-dialog')[0]
      var att = document.createAttribute('item-id')
      att.value = itemId
      dialogElement.setAttributeNode(att)
    },
    confirmdelete () {
      var dialogElement = document.getElementsByClassName('ui-dialog')[0]
      var itemId = dialogElement.getAttribute('item-id')
      /* var item = document.getElementById('id_' + itemId)
      this.removeElement(item) */
      delete this.itemList[itemId]
      this.calculatetotalprice()
    }
  },
  created () {
    this.calculatetotalprice()
  },
  data () {
    return {
      totalPrice: 0.0,
      totalAmount: 0.0,
      itemList: [
        {
          fruit: {
            name: '苹果',
            price_sell: 6.66
          },
          amount: 1
        },
        {
          fruit: {
            name: '香梨',
            price_sell: 7.77
          },
          amount: 1
        },
        {
          fruit: {
            name: '蜜桃',
            price_sell: 8.88
          },
          amount: 1
        }
      ]
    }
  }
}
</script>

<style scoped>
input{
  margin-left: 5px;
  border-left: 0px;
  border-top: 0px;
  border-bottom: 0px;
  border-right: 0px;
}
#delete{
  float: right;
}
.ui-icon-delete{
  font-size: 150%;
}
.ui-list li{
  margin-left: 0;
  padding-left: 10px;
}
</style>
