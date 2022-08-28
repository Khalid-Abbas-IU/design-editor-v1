<template>
  <div class="editor-main-panel">
    <ToolPanel/>
    <div class="canvas-wrapper content-center">
      <canvas id="designer-canvas" width="700" height="450"/>
    </div>
  </div>
</template>
<script>
import ToolPanel from "@/components/fab-editor/main-panel/tool-panel/ToolPanel";
import { fabric } from 'fabric'
import '@/components/fab-editor/utils/fabric-ovverids'
let canvas;
export default {
  name: 'MainPanel',
  components:{
    ToolPanel
  },
  data() {
    return {
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  mounted(){
    inItCanvas("designer-canvas")
  }
}

//TODO: Functions
const inItCanvas =(id)=>{
  canvas = new fabric.Canvas(id,{
    width:700,
    height:500,
    allowTouchScrolling: true,
    backgroundColor:'#fff',
    selection: true,
  })
  onCanvasEvents(canvas)
  window.canvas = canvas;
  adjustCanvasDimensions();

  addImage("https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&h=130")
  addImage("https://images.pexels.com/photos/445109/pexels-photo-445109.jpeg?auto=compress&cs=tinysrgb&h=130")
  addRect()
  addText();
  canvas.renderAll();
}


const addText=()=>{
  let text = new fabric.IText("HEY WORLD",{
    left:canvas.width/2,
    top:canvas.height/2,
    originX:'center',
    originY:'center',
  })
  canvas.add(text)
  canvas.renderAll();
}

const addImage = (src) => {
  if (!canvas) return;
  const uuid = require("uuid");
  let id = uuid.v4();
  let height = canvas.getHeight()/2,
      width = canvas.getWidth()/2;
  let img = new Image();
  img.crossOrigin = "Anonymous";
  img.onload = function () {
    let imgInstance = new fabric.Image(img, {
      crossOrigin : "Anonymous",
      ref_id: id,
      left: width,
      top: height,
      originX: 'center',
      originY: 'center',
      name: "photo",
      perPixelTargetFind:true,
    });
    // imgInstance.scaleToWidth(canvas.getWidth() * 0.5);
    // imgInstance.scaleToHeight(canvas.getHeight() * 0.3);
    canvas.add(imgInstance);
    canvas.renderAll();
  };
  img.src = src;
};
const addRect = () => {
  if (!canvas) return;
  const uuid = require("uuid");
  let id = uuid.v4();
  let height = canvas.getHeight()/2,
      width = canvas.getWidth()/2;
  let rect = new fabric.Rect({
    height:200,
    width:200,
    left:width,
    top:height,
    id,
    name:'shape-rect',
    fill:'#137580'
  })
  canvas.add(rect);
  canvas.renderAll();
};

function onCanvasEvents(canvas){
  canvas.on({
    'object:added': objectAdded,
    'selection:created': selectionCreated,
    'selection:updated': selectionUpdated,
    'object:moving': objectMoving,
    'object:modified' : modifiedObject,
    'object:scaling':objectScaling,
    'object:scaled':objectScaled,
    'object:rotating':objectRotating,
  })
}

const adjustCanvasDimensions =()=>{
  let elHeight = 0, elWidth = 0;
  document.querySelectorAll('div').forEach((el)=>{
    if (el.classList.contains('canvas-wrapper')){
      elWidth = el.clientWidth * 0.7;
      elHeight = el.clientHeight * 0.7;
    }
  })
  let width = elWidth,
      height = elHeight;
  canvas.setWidth(width)
  canvas.setHeight(height)
  canvas.renderAll();
}


const objectAdded=()=>{}
const selectionCreated=()=>{
}
const selectionUpdated=()=>{
}
const modifiedObject=()=>{}
const objectScaling=()=>{}
const objectScaled=()=>{}
const objectRotating=()=>{}
const objectMoving=()=>{}

</script>

<style scoped>
.editor-main-panel {
  width: var(--main-panel-width);
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #2c3e50;
  background-color: var(--main-panel-bg);
}
.canvas-wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
</style>