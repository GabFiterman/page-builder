<template>
  <div class="home">
    <Editor component="div" class="editorContainer" :resolverMap="resolverMap" >
      <ComponentsPanel />
      <Preview  />
      <SettingPanel />

      <!-- <Export /> -->
    </Editor>
  </div>
</template>

<script>
import { Canvas, Editor, Frame, Blueprint } from '@v-craft/core';
import Container from '@/components/elements/Container.vue';
import Paragraph from '@/components/elements/Paragraph.vue';
import Picture from '@/components/elements/Picture.vue';
import SettingPanel from '@/components/SettingPanel.vue';
import Export from '@/components/Export.vue';
import ComponentsPanel from '@/components/ComponentsPanel.vue';
import Preview from '@/components/Preview.vue';

export default {
  name: 'Home',

  components: {
    Canvas,
    Editor,
    Frame,
    Paragraph,
    Picture,
    SettingPanel,
    Blueprint,
    Export,
    ComponentsPanel,
    Preview
  },

  data() {
    return {
      resolverMap: {
        Canvas, Container, Paragraph, Picture
      },
    };
  },

};
</script>

<style lang="scss">
.home {
  background-color: #f0f0f0;
  .editorContainer {
    display: flex;
    min-height: 100vh;
  }
}
</style>