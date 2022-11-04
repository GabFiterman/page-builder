<template>
  <div class="container" :class="{ outline: editor.enabled }">
    <slot />
  </div>
</template>

<script>
export default {
    name: 'Container',

    inject: ['editor'],

}
</script>

<style lang="scss">
.container {
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    &.outline {
        outline: 1px dashed rgb(238, 22, 224);
        z-index: 99;
    }

    .cf-node-selected {
        outline: 3px solid rgb(0, 0, 255);
    }
}
</style>