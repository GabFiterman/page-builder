<template>
    <div>
        <p>{{ content }}</p>
    </div>
</template>

<script>
import ParagraphSetting from './ParagraphSetting.vue';

export default {
    name: 'Paragraph',

    props: {
        content: String,
    },

    craft: {
        defaultProps: {
            content: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
        },
        settings: {
            ParagraphSetting,
        },
    },
};
</script>

<style lang="scss" scoped>

</style>