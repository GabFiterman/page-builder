<template>
  <div class="home">
    <h1>Home Page</h1>
    <p><span>Most basic page builder v1</span></p>

    <Editor component="div" class="container" :resolverMap="resolverMap">

      <SettingPanel />

      <Frame component="div" class="preview-panel">
        <Canvas component="Container">
          <Paragraph content="O mamaco supremo" />
        </Canvas>
      </Frame>

      <Blueprint component="button" class="btn">
        Paragraph
        <template v-slot:blueprint>
          <Paragraph />
        </template>
      </Blueprint>

      <Blueprint component="button" class="btn">
        Container
        <template v-slot:blueprint>
          <Canvas component="Container" />
        </template>
      </Blueprint>

      <Export />
    </Editor>
  </div>
</template>

<script>
import { Canvas, Editor, Frame, Blueprint } from '@v-craft/core';
import Container from '@/components/elements/Container.vue';
import Paragraph from '@/components/elements/Paragraph.vue';
import SettingPanel from '@/components/SettingPanel.vue';
import Export from '@/components/Export.vue'

export default {
  name: 'Home',

  components: {
    Canvas,
    Editor,
    Frame,
    Paragraph,
    SettingPanel,
    Blueprint,
    Export,
  },

  data(){
    return {
      resolverMap: {
        Canvas, Container, Paragraph,
      },
    };
  },

};

</script>

<style lang="scss" scoped>
.home{

  p{
    span{
      color: white;
      background-color: darkmagenta;
      padding: 0.25rem 1.6rem;
    }
  }
}
</style>