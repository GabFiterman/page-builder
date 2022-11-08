<template>
    <v-row>
        <v-textarea 
            label="Content" 
            v-model="content" 
            filled 
            background-color="white" 
            learable 
            auto-grow 
        />
    </v-row>
</template>

<script>
import { settingMixin } from '@v-craft/core';

export default {
    name: 'ParagraphSettings',

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