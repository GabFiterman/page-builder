<template>
  <div class="Container" :style="elementCSS">
    <slot />
  </div>
</template>

<script>
import elementStyleMixin from '../elements/elementStyleMixin.js';
import ContainerSettings from './ContainerSettings.vue';
import Margin from './styleSettings/Margin.vue';
import styleDefaults from './styleSettings/styleDefaults.js'

export default {
    name: 'Container',

    mixins: [elementStyleMixin, styleDefaults],

    craft: {
      defaultProps: {
        elementStyle: {

        }
      },
      settings: {
        ContainerSettings,
        Margin
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