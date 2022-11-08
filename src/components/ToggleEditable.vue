<template>
    <v-row justify="center">
        <v-switch 
            v-model="editable" 
            inset 
            @change="toggleState" 
            :label="`Editor: ${editable.toString()}`"
        />
    </v-row>
</template>

<script>
export default {
    name: 'ToggleEditable',

    inject: [
        'editor',
    ],

    data() {
        return {
            editable: true,
        };
    },

    methods: {
        toggleState() {
            if (this.editor.enabled) {
                this.editor.disable();
            } else {
                this.editor.enable();
            }
        },
    }

}
</script>

<style>

</style>