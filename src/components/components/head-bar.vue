<template>
<header class="ui-header ui-header-positive ui-border-b">
        <i class="ui-icon-return" onclick="history.back()"></i><h1>{{ head_text }}</h1>
</header>
</template>

<script>
export default {
  name: 'head-bar',
  props: ['head_text']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
