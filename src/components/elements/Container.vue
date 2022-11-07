<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
    name: 'Container',
    
}
</script>

<style lang="scss" scoped>
div {
    padding: 30px;
    outline: 1px dashed gray;
}
</style>