<template>
    <section>
        <v-row justify="center" class="my-1">
            <Blueprint component="div">
                <v-btn dark>
                    <v-icon>mdi-format-pilcrow</v-icon>
                </v-btn>
                <template v-slot:blueprint>
                    <Paragraph />
                </template>
            </Blueprint>
        </v-row>

        <v-row justify="center" class="my-1">
            <Blueprint component="div">
                <v-btn dark>
                    <v-icon>mdi-crop-square</v-icon>
                </v-btn>
                <template v-slot:blueprint>
                    <Canvas component="Container" />
                </template>
            </Blueprint>
        </v-row>
    </section>
</template>

<script>
import { Canvas, Blueprint } from '@v-craft/core'
import Paragraph from './elements/Paragraph.vue';
import Container from './elements/Container.vue';

export default {
    name: 'ComponentsPanel',

    components: {
        Canvas,
        Blueprint,
        Paragraph,
        Container
    },


}
</script>