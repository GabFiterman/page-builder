<template>
    <div>
        <input v-model="content" />
    </div>
</template>

<script>
import { settingMixin } from '@v-craft/core';

export default {
    name: 'Texto',
    
    mixins: [settingMixin],

    computed: {
        content: {
            get() {
                return this.elementProps.content;
            },
            set(value) {
                this.updateContent(value);
            },
        },
    },

    methods: {
        updateContent(content) {
            this.elementPropsSetter({ content });
        },
    },
};
</script>

<style lang="scss" scoped>

</style>