<template>
    <Editor :tag="`h${tagType}`" :style="elementCSS" :class="[`text-h${this.tagType}`]" :value="content" @input="updateContent" />
</template>

<script>
import Editor from './utils/Editor.vue';
import HeadingSettings from './HeadingSettings.vue';
import Margin from '../elements/styleSettings/Margin.vue';
import elementStyleMixin from '../elements/elementStyleMixin.js';

export default {
    name: 'Heading',

    mixins: [elementStyleMixin],

    components: {
        Editor
    },

    inject: [
        'node',
    ],

    props: {
        tagType: Number,
        content: String,
    },

    craft: {
        defaultProps: {
            tagType: 1,
            content: 'Cabeçalho',

            elementStyle: {
                'margin-top': 0,
                'margin-left': 0,
                'margin-bottom': 0,
                'margin-right': 0,
            }
        },

        settings: {
            HeadingSettings,
            Margin
        },
    },
};
</script>

<style lang="scss" scoped>

</style>