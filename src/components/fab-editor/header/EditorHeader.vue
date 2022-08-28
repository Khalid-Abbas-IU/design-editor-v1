<template>
  <div class="editor-header fe-d-flex fe-justify-space-btw fe-alignItems-center">
    <div class="header-logo-sec">
      DESIGNER
    </div>
    <div class="orientation-container">
      <div class="icon-container">
        <img src="../../../assets/images/desktop.png" width="20"/>
      </div>
      <div class="icon-container">
        <img src="../../../assets/images/phone.png" width="20"/>
      </div>
    </div>

    <div class="header-save-btn-sec">
      <button class="editor-button preview-btn content-center">
        PREVIEW
      </button>
      <button class="editor-button content-center">
        SAVE
      </button>
    </div>
  </div>
</template>
<script>


export default {
  name:'EditorHeader',
  components:{
  },
  data(){
    return {
    }
  }
}
</script>

<style scoped>
.editor-header{
  height: var(--header-height);
  width: auto;
  background-color: var(--header-bg-color);
  color: white;
  font-size: 0.8rem;
  padding: 0 1.2rem;
}
.header-logo-sec,
.header-save-btn-sec{
  display: flex;
  align-items: center;
  user-select: none;
}
.editor-button{
  max-height: 70%;
  min-height: 70%;
  min-width: 60px;
  max-width: 60px;
  font-size: inherit;
  background-color: #0385f4;
  color: inherit;
  border-width: 0;
  border-radius: 2px;
  cursor: pointer;
  user-select: none;
}
.preview-btn{
  background-color: white!important;
  color: #2c3e50!important;
  font-size: 0.6rem;
  font-weight: 700;
  margin: 0px 10px;
  min-height: 60%!important;
  max-height: 60%!important;
}
.preview-btn:hover{
  background-color: #d5cbcb !important;
}
.editor-button:hover{
  background-color: rgba(61, 146, 219, 0.99);
  color: wheat;
}
.orientation-container{
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon-container{
  padding: 3px 7px;
  cursor: pointer;
  border-radius: 4px;
}
.icon-container:hover{
  background-color: #e7e3e3;
}
</style>