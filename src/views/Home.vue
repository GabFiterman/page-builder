<template>
  <div class="home">

    <v-container fluid tag="section">

      <v-container fluid>
        <v-row justify="center">
          <h1>Home Page</h1>
        </v-row>

        <v-row justify="center">
          <p><span>Most basic page builder v1</span></p>
        </v-row>
      </v-container>


      <v-row>
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
      </v-row>
    </v-container>
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

  data() {
    return {
      resolverMap: {
        Canvas, Container, Paragraph,
      },
    };
  },

};

</script>

<style lang="scss" scoped>
@import '@/assets/style/app.scss';

.home {

  h1 {
    color: $test;
  }

  p {
    span {
      color: white;
      background-color: darkmagenta;
      padding: 0.25rem 1.6rem;
    }
  }
}
</style>