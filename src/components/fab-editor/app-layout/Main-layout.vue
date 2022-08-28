<template>
  <div class="main-app-layout">
    <EditorHeader/>
    <EditorMainSection/>
  </div>
</template>
<script>
// import { EditorHeader, MainPanel, LeftPanel, RightPanel } from '../utils/constants/index'
  import EditorHeader from "../header/EditorHeader";
  import EditorMainSection from "@/components/fab-editor/app-layout/editor-main-section/EditorMainSection";
  export default {
    name:'MainLayout',
    components:{
      EditorHeader,
      EditorMainSection
    },
    data(){
      return {
        comTitle : 'Main App'
      }
    }
  }
</script>

<style scoped>
  .main-app-layout{
    width: auto;
    height: 100%;
    color: white;
  }
</style>