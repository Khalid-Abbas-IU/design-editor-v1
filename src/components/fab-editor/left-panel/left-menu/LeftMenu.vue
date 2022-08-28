<template>
  <div class="editor-left-menu">
    <div class="menu-wrapper">
      <div class="lf-menu-item text" @click="selectTabPanel('1')">
        <div class="icon-container">
          <img src="../../../../assets/images/text.png" width="18"/>
          <span>Text</span>
        </div>
      </div>
      <div class="lf-menu-item" @click="selectTabPanel('3')">
        <div class="icon-container">
          <img src="../../../../assets/images/image.png" width="18"/>
          <span>Images</span>
        </div>
      </div>
      <div class="lf-menu-item" @click="selectTabPanel('2')">
        <div class="icon-container">
          <img src="../../../../assets/images/shapes.png" width="18"/>
          <span>Shapes</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'LeftMenu',
  data(){
    return {
      comTitle : 'Main App'
    }
  },
  methods:{
    selectTabPanel(id){
      this.$emit('set-active-tab',id);
    }
  }
}
</script>

<style scoped>
.editor-left-menu{
  background-color: var(--main-panel-bg);
  width: var(--left-menu-width);
  height: 100%;
  border-right: 1px solid lightgray;
  color: #2c3e50;
  font-size: 9px;
  font-weight: 700;
}
.lf-menu-item{
  /*margin: 1px;*/
  user-select: none;
  cursor: pointer;

}
.lf-menu-item:hover{
  background-color: #ece5d7;
  border-color: darkgoldenrod;
}
.menu-wrapper{
  margin-top: 10px;
}
.icon-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 3px;
  margin-top:10px;
  border-radius: 4px;
  font-size: 0.6rem;
  color: grey;
}
.icon-container span{
  margin-top: 2px;
}
.icon-container:hover{
  background-color: #f5f2f2;
}
</style>