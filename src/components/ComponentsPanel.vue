<template>
  <div id="ComponentsPanel">
    <p>Components</p>

    <Blueprint component="button" class="btn">
      <span class="material-symbols-outlined">format_paragraph</span>
      <template v-slot:blueprint>
        <Paragraph />
      </template>
    </Blueprint>

    <Blueprint component="button" class="btn">
      <span class="material-symbols-outlined">check_box_outline_blank</span>
      <template v-slot:blueprint>
        <Canvas component="Container" />
      </template>
    </Blueprint>

    <Blueprint component="button" class="btn">
      <span class="material-symbols-outlined">image</span>
      <template v-slot:blueprint>
        <Picture />
      </template>
    </Blueprint>
  </div>
</template>

<script>
import { Blueprint, Canvas, Frame } from '@v-craft/core';
import Container from './elements/Container.vue';
import Paragraph from './elements/Paragraph.vue';
import Picture from './elements/Picture.vue';


export default {
  name: 'ComponentsPanel',

  components: {
    Container,
    Canvas,
    Blueprint,
    Paragraph,
    Picture,
    Frame,
  }
}
</script>

<style lang="scss" scoped>

$colorBg_panels: #2f2f2f;
$colorForward_panels: #f0f0f0;
$boxShadow_main: 0px 20px 18px -10px rgba(0,0,0,0.75);

#ComponentsPanel {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: $colorBg_panels;
  z-index: 99;
  
  p{
    padding: 1rem;
    color: $colorBg_panels;
    font-weight: bold;
    background-color: $colorForward_panels;
    box-shadow: $boxShadow_main;
    margin-bottom: 2rem;
  }

  button {
    padding: 0.75rem;
    border: none;
    border-radius: 6px;
    background-color: $colorForward_panels;
    margin-bottom: 1.25rem;
    transition: ease-in-out 0.4s;
    
    width: 3.25rem;
    height: 3.25rem;

    box-shadow: $boxShadow_main;


    &:hover {
      filter: brightness(0.75);
      cursor: grab;
    }

    &:active{
      filter: brightness(0.5);
      cursor: grabbing;
    }

    span{
      color: $colorBg_panels;
    }
  }


}
</style>
