<template>
    <div id="Preview">
        <Frame component="div" class="preview-panel">
            <Canvas class="canvas" component="Container">
                <Paragraph content="Sim, isto é um parágrafo" />
                <Picture />
            </Canvas>
        </Frame>
    </div>
</template>

<script>
import { Canvas, Frame } from '@v-craft/core';
import Paragraph from './elements/Paragraph.vue';
import Picture from './elements/Picture.vue';
import Container from './elements/Container.vue'

export default {
    name: 'Preview',

    components: {
        Paragraph,
        Picture,
        Canvas,
        Frame,
        Container
    },
}
</script>

<style lang="scss" scoped>
#Preview{
    width: 100%;
    margin: 4rem 1rem 1rem 1rem;
    border: 1px solid darkgray;
    background-color: #ffffff;
    min-height: 110vh;
    box-shadow: 0px 0px 18px 0px rgba(0,0,0,0.45);
}
</style>