<template>
    <div>
        <h1>Mixin Test</h1>
        <button @click="showMsg">Try Me</button>
    </div>
</template>

<script>
import AlertMixin from '../components/mixins/alertMixin.js';

export default {
    name: 'MixinTest',

    mixins: [AlertMixin],

    data() {
        return {
        }
    }
}
</script>

<style lang="scss" scoped>

</style>