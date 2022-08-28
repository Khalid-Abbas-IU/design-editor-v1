<template>
  <div class="editor-right-panel">

  </div>
</template>
<script>
export default {
  name:'RightPanel',
  data(){
    return {
      comTitle : 'Main App'
    }
  }
}
</script>

<style scoped>
.editor-right-panel {
  width: var(--right-panel-width);
  height: auto;
  background-color: var(--right-panel-color);
  color: white;
  border-left: 1px solid var(--light-gray) ;

}
</style>