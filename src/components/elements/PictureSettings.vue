<template>
    <div>
        <input v-model="imageUrl">
    </div>
</template>

<script>
import { settingMixin } from '@v-craft/core';

export default {
    name: 'Imagem',

    mixins: [settingMixin],
    
    computed: {
        imageUrl: {
            get() {
                return this.elementProps.imageUrl;
            },
            set(value) {
                this.updateImageUrl(value);
            },
        },
    },

    methods: {
        updateImageUrl(imageUrl) {
            this.elementPropsSetter({ imageUrl });
        },
    },
};
</script>

<style lang="scss" scoped>

</style>