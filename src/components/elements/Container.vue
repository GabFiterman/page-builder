<template>
  <div class="Container">
    <slot />
  </div>
</template>

<script>
import ContainerSettings from './ContainerSettings.vue';
import { settingMixin } from '@v-craft/core';

export default {
    name: 'Container',

    mixins: [settingMixin],

    craft: {
      settings: {
        ContainerSettings,
      }
    }
    
}
</script>

<style lang="scss">
.Container {
    padding: 30px;
    outline: 1px dashed gray;

    &:hover {
      cursor: pointer;
      outline: 2px dashed lightgreen;
    }
    .cf-node-selected{
      outline: 2px solid lightgreen;
    }
}
</style>