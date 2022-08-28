<template>
  <div class="editor-tool-panel">
    <div class="nav-tool undo">
      <img src="../../../../assets/images/undo-3-48.png" width="15">
    </div>
    <div class="nav-tool redo">
      <img src="../../../../assets/images/redo-3-48.png" width="15">
    </div>
  </div>
</template>
<script>
export default {
  name:'EditorToolPanel',
  data(){
    return {
      comTitle : 'Main App'
    }
  }
}
</script>

<style scoped>
.editor-tool-panel{
  font-size: 10px;
  height: var(--header-height);
  width: 100%;
  display: flex;
  align-items: center;
  background-color: white;
}
.nav-tool{
  user-select: none;
  border-radius: 2px;
  padding: 5px 5px 1px 5px;
  border: 1px solid lightgray;
  margin: 0 1px;
  cursor: pointer;
}
.nav-tool:hover{
  background-color: #b8c6ce;
}
.undo{
  margin-left: 3px;

}
.nav-tool:hover{
  color: darkgoldenrod;
}
</style>