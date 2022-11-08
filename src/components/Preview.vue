<template>
    <v-container>
        <Frame component="div">
            <Canvas component="Container">
                <Heading size="2"/>
                <Paragraph content="Lorem ipsum dolor sit amet, qui minim labore." />
            </Canvas>
        </Frame>
    </v-container>
</template>

<script>
import { Canvas, Frame, } from '@v-craft/core';
import Paragraph from '@/components/elements/Paragraph.vue';
import Container from '@/components/elements/Container.vue';
import Heading from './elements/Heading.vue';

export default {
    name: 'Preview',
    
    components: {
        Canvas,
        Paragraph,
        Frame,
        Container,
        Heading,
    }
}
</script>

<style>

</style>