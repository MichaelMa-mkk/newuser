<template>
<div class="ui-dialog" id="not_develop">
    <div class="ui-dialog-cnt">
        <div class="ui-dialog-bd">
            <h4>敬请期待</h4>
        </div>
        <div class="ui-dialog-ft">
            <button type="button" data-role="button" onclick="$('.ui-dialog').removeClass('show')">确定</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'not-develop'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ui-dialog-cnt div h4 {
    font-size: larger;
}
</style>
