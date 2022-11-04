<template>
    <div>
        <!-- <img
            class="image"
            :src="imageUrl"
            :style="elementCSS"
        /> -->
        <img
            class="image"
            :src="imageUrl"
        />
    </div>
</template>

<script>
import defaultImage from '@/assets/BlueLobster.jpeg';
import PictureSettings from './PictureSettings.vue';

export default {
    props: {
        imageUrl: String,
    },

    craft: {
        defaultProps: {
            imageUrl: defaultImage,
        },
        settings: {
            PictureSettings
        }
    }
}
</script>

<style lang="scss" scoped>
$originalSize: 225px;
img {
    height: $originalSize;
    width: calc($originalSize*3);
}
</style>