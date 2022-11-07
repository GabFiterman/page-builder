<template>
  <div class="setting-panel">

    <div>
        <input
            :checked="editor.enabled"
            @change="toggleState"
            type="checkbox"
            class="custom-control-input"
            id="editorState"
        />

        <label class="custom-control-label" for="editorState">Enable</label>
    </div>

    <div v-if="settings" class="settings">
        <component
            v-for="(component, name) in settings"
            :key="name"
            :is="component"
            :node="selectedNode"
        ></component>

        <button class="btn" v-if="selectedNode" @click="removeElement">Delete</button>
    </div>

  </div>
</template>

<script>
export default {
    name: 'SettingPanel',

    inject: [
        'editor',
    ],

    computed: {
        selectedNode(){
            return this.editor.selectedNode;
        },

        settings() {
            if(!this.selectedNode){
                return null;
            }

            return this.editor.getSettings(this.selectedNode);
        },
    },

    methods: {
        removeElement() {
            return this.editor.removeNode(this.selectedNode);
        },
        toggleState(){
            if(this.editor.enabled){
                this.editor.disable();
            } else {
                this.editor.enable();
            }
        },
    },
};
</script>

<style>

</style>