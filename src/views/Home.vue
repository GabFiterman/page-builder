<template>
  <div class="teal darken-4 fill-height mx-0 px-0">
    <Editor component="div" :resolverMap="resolverMap">
      <v-row>
        <v-col class="col-1 teal accent-3">
          <ComponentsPanel />
        </v-col>

        <v-col class="col-8 white">
          <Preview class="heihgtFull"/>
        </v-col>

        <v-col class="col-3 teal accent-3">
          <SettingPanel />
        </v-col>
      </v-row>

      <!-- <v-row justify="center">
        <Export />
      </v-row> -->

    </Editor>
  </div>
</template>

<script>
import { Canvas, Editor, Frame, Blueprint } from '@v-craft/core';
import Container from '@/components/elements/Container.vue';
import Paragraph from '@/components/elements/Paragraph.vue';
import Heading from '@/components/elements/Heading.vue';
import SettingPanel from '@/components/SettingPanel.vue';
import Export from '@/components/Export.vue';
import Preview from '../components/Preview.vue';
import ComponentsPanel from '@/components/ComponentsPanel.vue';

export default {
  name: 'Home',

  components: {
    Canvas,
    Editor,
    Frame,
    Paragraph,
    Heading,
    SettingPanel,
    Blueprint,
    Export,
    Preview,
    ComponentsPanel,
  },

  data() {
    return {
      resolverMap: {
        Canvas, Container, Paragraph, Heading
      },
    };
  },

};

</script>

<style lang="scss" scoped>
@import '@/assets/style/app.scss';

.heihgtFull{
  min-height: 100vh;
}
</style>