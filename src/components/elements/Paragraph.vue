<template>
  <Editor tag="p" :style="elementCSS" :value="content" @input="updateContent"></Editor>
</template>

<script>
import Editor from './utils/Editor.vue';
import ParagraphSettings from './ParagraphSettings.vue';
import Margin from '../elements/styleSettings/Margin.vue';
import elementStyleMixin from '../elements/elementStyleMixin.js';

export default {
  name: 'Paragraph',

  mixins: [elementStyleMixin],


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
        "font-size": 14,
        "font-weight": "normal",
        "text-align": "left",
        "line-height": "1.5",
        color: "rgb(0,0,0)",
        "margin-top": 0,
        "margin-left": 0,
        "margin-bottom": 0,
        "margin-right": 0,
        "padding-top": 0,
        "padding-left": 0,
        "padding-bottom": 0,
        "padding-right": 0,
        "text-shadow": {
          x: 0,
          y: 0,
          blur: 0,
          color: "rgba(0,0,0,0)",
        },
      }
    },
    settings: {
      ParagraphSettings,
      Margin
    },

  },
};
</script>
