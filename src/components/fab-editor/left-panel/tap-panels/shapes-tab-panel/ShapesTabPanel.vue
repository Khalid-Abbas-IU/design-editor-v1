<template>
  <div class="left-tab-panel">
    <div class="shapes-container">
      <div class="shape-element">
        <img src="../../../../../assets/images/shapes/circle-outline-48.png">
      </div>
      <div class="shape-element">
        <img src="../../../../../assets/images/shapes/square-48.png">
      </div>
      <div class="shape-element">
        <img src="../../../../../assets/images/shapes/triangle-48.png">
      </div>
      <div class="shape-element">
        <img src="../../../../../assets/images/shapes/circle-dashed-6-48.png">
      </div>
      <div class="shape-element">
        <img src="../../../../../assets/images/shapes/circle-dashed-8-48.png">
      </div>
      <div class="shape-element">
        <img src="../../../../../assets/images/shapes/circle.png">
      </div>
      <div class="shape-element">
        <img src="../../../../../assets/images/shapes/square-dashed-48.png">
      </div>
      <div class="shape-element">
        <img src="../../../../../assets/images/shapes/square-dashed-rounded-48.png">
      </div>
      <div class="shape-element">
        <img src="../../../../../assets/images/shapes/square-ios-app-48.png">
      </div>
      <div class="shape-element">
        <img src="../../../../../assets/images/shapes/square-rounded-48.png">
      </div>
      <div class="shape-element">
        <img src="../../../../../assets/images/shapes/square-outline-48.png">
      </div>
      <div class="shape-element">
        <img src="../../../../../assets/images/shapes/triangle-outline-48.png">
      </div>
      <div class="shape-element">
        <img src="../../../../../assets/images/shapes/hexagon-outline-48.png">
      </div>
      <div class="shape-element">
        <img src="../../../../../assets/images/shapes/octagon-48.png">
      </div>
      <div class="shape-element">
        <img src="../../../../../assets/images/shapes/octagon-outline-48.png">
      </div>
    </div>
  </div>
</template>
<script>
import {shapesNames} from "@/components/fab-editor/utils/constants";
export default {
  name:'ShapesTabPanel',
  data(){
    return {
      shapes:shapesNames
    }
  },
}
</script>

<style scoped>
.left-tab-panel{
  overflow: hidden;
  padding: 10px;
  width: 100%;
  color: #2c3e50;
}
.shapes-container{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(4rem, 1fr));
  grid-gap: 0.2rem;
  grid-column: 2;
}
.shape-element{
  border: 1px solid lightgray;
  padding-top: 5px;
}
</style>