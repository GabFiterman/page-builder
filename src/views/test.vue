<template>
  <sv-container>
    <p>Test Page</p>
    <hello-world />
  </sv-container>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
export default {
    name: 'test',
    components: {
      HelloWorld
    }
}
</script>

<style>

</style>