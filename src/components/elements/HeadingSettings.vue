<template>
    <v-container fluid>
        <v-row>
            <v-slider 
                v-model="elementProps.tagType" 
                @change="updateSize" 
                :label="`tagType: h${elementProps.tagType}`" 
                color="white" 
                track-color="black"
                thumb-label="always"
                thumb-color="black"
                max="6" 
                min="1"
            ></v-slider>
        </v-row>

        <v-row>
            <v-textarea
                label="Content"
                v-model="elementProps.content"
                filled
                background-color="white"
                learable
                auto-grow
            />
        </v-row>
    </v-container>
</template>

<script>
import { settingMixin } from '@v-craft/core';

export default {
    name: 'HeadingSettings',

    mixins: [settingMixin],

    methods: {
        updateSize(tagType){
            this.elementPropsSetter({ tagType })
        },

        updateContent(content){
            this.elementPropsSetter({ content })
        },
    }


};
</script>

<style>

</style>