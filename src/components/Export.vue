<template>
  <div>
    <div class="form-group">
        <textarea class="form-control" v-model="plainData" cols="30" rows="10"></textarea>
    </div>
    <button class="btn" @click="doExport">Export</button>
    <button class="btn" @click="doImport">Import</button></div>
</template>

<script>
export default {
    name: 'Export',

    inject: [
        'editor',
    ],

    data(){ 
        return {
            plainData: '',
        };
    },

    methods: {
        doExport() {
            this.plainData = this.editor.export();
        },
        doImport(){
            this.editor.import(this.plainData);
        },
    },
};
</script>

<style lang="scss" scoped>

</style>