<template>
  <div class="editor-left-panel">
    <LeftMenu @set-active-tab="setActiveTab"/>
    <TabPanels :activePanel ="activePanel" :designPhotos="designPhotos" @clicked-on-image = "akldhkua"/>
  </div>
</template>
<script>
import LeftMenu from "@/components/fab-editor/left-panel/left-menu/LeftMenu";
import TabPanels from './tap-panels/TabPanels'
export default {
  name:'LeftPanel',
  components:{
    LeftMenu,
    TabPanels
  },
  props: {
    designPhotos: Array,
  },
  data(){
    return {
      activePanel:'1',
    }
  },
  methods:{
    setActiveTab(id){
      this.activePanel = id;
    },
    akldhkua(src){
      console.log(src)
    }

  }
}
</script>

<style scoped>
.editor-left-panel{
  width: var(--left-panel-width);
  height: 100%;
  display: flex;
  background-color: var(--left-panel-color);
  color: white;
  box-shadow: var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,--tw-ring-shadow),var(--tw-shadow);
  border-right: 1px solid var(--light-gray) ;
}
</style>