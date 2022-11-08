<template>
    <v-container>
        <Frame component="div">
            <Canvas component="Container">
                <Paragraph content="Lorem ipsum dolor sit amet, qui minim labore." />
            </Canvas>
        </Frame>
    </v-container>
</template>

<script>
import { Canvas, Frame, } from '@v-craft/core';
import Paragraph from '@/components/elements/Paragraph.vue';
import Container from '@/components/elements/Container.vue'

export default {
    name: 'Preview',
    
    components: {
        Canvas,
        Paragraph,
        Frame,
        Container,
    }
}
</script>

<style>

</style>