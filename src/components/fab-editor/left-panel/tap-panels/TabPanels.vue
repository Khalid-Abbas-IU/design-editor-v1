<template>
  <ImageTabPanel v-if="activePanel === '3'" :designPhotos="designPhotos" @clicked-on-image = "(src)=>this.$emit('clicked-on-image',src)"/>
  <ShapesTabPanel v-else-if="activePanel === '2'"/>
  <TextTabPanel v-else/>

</template>
<script>
import TextTabPanel from './text-tab-panel/TextTabPanel'
import ImageTabPanel from './image-tab-panel/ImageTabPanel'
import ShapesTabPanel from './shapes-tab-panel/ShapesTabPanel'
export default {
  name:'TabPanels',
  components:{
    TextTabPanel,
    ImageTabPanel,
    ShapesTabPanel
  },
  props: {
    activePanel:String,
    designPhotos: Array
  },
  data(){
    return {
    }
  },
  methods:{
  }
}

// const addImage = (src) => {
//   if (!canvas) return;
//   const uuid = require("uuid");
//   let id = uuid.v4();
//   let height = canvas.getHeight()/2,
//       width = canvas.getWidth()/2;
//   let img = new Image();
//   img.crossOrigin = "Anonymous";
//   img.onload = function () {
//     let imgInstance = new fabric.Image(img, {
//       crossOrigin : "Anonymous",
//       ref_id: id,
//       left: width,
//       top: height,
//       originX: 'center',
//       originY: 'center',
//       name: "blue_print",
//       perPixelTargetFind:true,
//       stroke:"black",
//       strokeWidth:5,
//       selectable:false
//     });
//     imgInstance.scaleToHeight(canvas.getWidth() * 0.5);
//     canvas.renderAll();
//     canvas.add(imgInstance);
//     canvas.setActiveObject(imgInstance);
//   };
//   img.src = src;
// };
</script>

<style scoped>

</style>