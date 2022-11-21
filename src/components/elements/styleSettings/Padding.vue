<template>
  <v-container fluid>
    <v-row justify="center">
        <h1>Padding</h1>
    </v-row>

    <v-row justify="center" class="mb-6">
        <v-btn @click="resetPadding">Reset Padding</v-btn>
    </v-row>

    <v-row class="controller-group">
        <v-col v-for="(padding, index) in paddingSides" :key="index">
            <div class="controller">
                <v-label class="label">{{ padding }}: {{ getStyle(padding) }}</v-label>

                <v-slider
                    :value="getStyle(padding)"
                    @input="setStyle(padding, $event)"
                    step="2"
                    color="white"
                    track-color="black"
                    thumb-color="black"
                    :thumb-label="true"
                    max="200"
                    min="0"
                >
            </v-slider>
            </div>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
import mixin from './mixin.js';
export default {
    name: 'Padding',

    mixins: [mixin],

    data(){
        return {
            paddingSides: ['padding-top','padding-right','padding-bottom','padding-left',]
        }
    },

    methods: {
        resetPadding() {
            this.setStyle('padding-top', 0);
            this.setStyle('padding-right', 0);
            this.setStyle('padding-bottom', 0);
            this.setStyle('padding-left', 0);
        }
    }
}
</script>

<style lang="scss" scoped>
.controller-group {
    width: 100%;

    .controller {
        display: flex;
        flex-direction: column;

        min-height: 10vh;
        min-width: 6vw;
        padding: 1rem 0.5rem 0rem .5rem;
        margin-bottom: 2rem;
        
        border: 1px solid white;
        border-radius: 5px;

        background-color: rgba(255, 255, 255, .45);
        box-shadow: 4px 9px 21px 0px rgba(0, 0, 0, 0.33);

    }
}
</style>