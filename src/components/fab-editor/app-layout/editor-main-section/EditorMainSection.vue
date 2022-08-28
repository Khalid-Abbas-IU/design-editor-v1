<template>
  <div class="editor-main-section">
    <LeftPanel :designPhotos = "this.designPhotos" />
    <MainPanel />
    <RightPanel/>
  </div>
</template>

<script>

import MainPanel from "@/components/fab-editor/main-panel/MainPanel";
import LeftPanel from "@/components/fab-editor/left-panel/LeftPanel";
import RightPanel from "@/components/fab-editor/right-panel/RightPanel";
import {loadImages} from "@/components/fab-editor/utils/api-helper";

export default {
  name:'EditorMainSection',
  components:{
    MainPanel,
    LeftPanel,
    RightPanel
  },
  data() {
    return {
      designPhotos:[]
    }
  },
  async created(){
    const designImages = await loadImages('people');
    this.designPhotos = [...designImages];
  },
}


</script>

<style scoped>
.editor-main-section{
  height: var(--editor-main-sec-height);
  width: auto;
  display: flex;
  justify-content: space-between;
}
</style>