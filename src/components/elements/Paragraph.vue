<template>
  <Editor tag="p" :style="elementCSS" :value="content" @input="updateContent"></Editor>
</template>

<script>
import Editor from './utils/Editor.vue';
import ParagraphSettings from './ParagraphSettings.vue';
import Margin from '../elements/styleSettings/Margin.vue';
import elementStyleMixin from '../elements/elementStyleMixin.js';
import styleDefaults from './styleSettings/styleDefaults.js'

export default {
  name: 'Paragraph',

  mixins: [elementStyleMixin, styleDefaults],


  props: {
    content: String,
  },

  components: {
    Editor
  },

  craft: {
    defaultProps: {
      content: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
      elementStyle: {
        
      }
    },
    settings: {
      ParagraphSettings,
      Margin
    },

  },
};
</script>
