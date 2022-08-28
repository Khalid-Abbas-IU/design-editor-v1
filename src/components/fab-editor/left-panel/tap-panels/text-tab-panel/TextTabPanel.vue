<template>
  <div class="left-tab-panel">
    <div class="search-div">
      <TextInput label-text="Enter Text" input-value=""/>
    </div>
  </div>
</template>
<script>
import TextInput from "@/components/fab-editor/commons/text-input/TextInput";
export default {
  name:'TextTabPanel',
  components:{
    TextInput
  },
  data(){
    return {
    }
  },
}
</script>

<style scoped>
.left-tab-panel{
  overflow: hidden;
  padding: 2px 10px;
  width: 100%;
}

.search-div{
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>