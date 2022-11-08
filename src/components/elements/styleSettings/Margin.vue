<template>
    <v-container fluid>
        <v-row>
            <label class="font-weight-bold" for="topValue">Margin Top: <span class="white text--black px-1 rounded font-weight-bold text-h5">{{getStyle('margin-top')}}</span>px</label>
        </v-row>
        <v-row>
    	    <v-slider
                :value="getStyle('margin-top')"
                @input="setStyle('margin-top', $event)"
                step="2"
    	        color="white"
    	        track-color="black"
    	        thumb-label="true"
    	        thumb-color="black"
    	        max="200"
    	        min="-100"
    	    ></v-slider>
        </v-row>
    </v-container>
</template>

<script>
import mixin from './mixin.js';
export default {
    name: 'Margin',

    mixins: [mixin],

    data(){
        return{
            topValue: 0,
        }
    }

}
</script>

<style>

</style>