<template>
  <div class="Container">
    <p>{{ content }}</p>
  </div>
</template>

<script>
import ParagraphSettings from './ParagraphSettings.vue';

export default {
    name: 'Paragraph',

    props: {
        content: String,
    },

    craft: {
        defaultProps: {
            content: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'
        },
        settings: {
          ParagraphSettings,
        },
    },
};
</script>

<style lang="scss" scoped>

</style>