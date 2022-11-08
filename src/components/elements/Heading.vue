<template>
    <div class="Container">
        <h1 :class="[`text-h${this.size}`]">{{ content }}</h1>
    </div>
</template>

<script>
import HeadingSettings from './HeadingSettings.vue';

export default {
    name: 'Heading',

    props: {
        size: String,
        content: String,
    },

    craft: {
        defaultProps: {
            size: '1',
            content: 'Cabeçalho'
        },

        settings: {
            HeadingSettings,
        },
    },
};
</script>

<style lang="scss" scoped>

</style>