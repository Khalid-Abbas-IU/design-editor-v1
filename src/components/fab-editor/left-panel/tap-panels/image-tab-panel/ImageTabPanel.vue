<template>
  <div class="left-tab-panel">
    <div class="search-div">
      <TextInput label-text="Search" input-value="Search Images"/>
      <div class="search-btn">
        <img src="../../../../../assets/images/search.png" width="15"/>
      </div>
    </div>
    <div v-if="designPhotos.length > 0" class="gallery">
      <div class="gallery-panel"
           v-for="photo in designPhotos"
           :key="photo.id"
           @click="$emit('clicked-on-image',photo.src.small)"
      >
        <img :src="photo.src.small">
      </div>
    </div>
    <Loader v-show="!designPhotos.length"/>
  </div>
</template>
<script>
import Loader from "@/components/fab-editor/commons/loader/Loader";
import TextInput from "@/components/fab-editor/commons/text-input/TextInput";
export default {
  name:'ImageTabPanel',
  components:{
    Loader,
    TextInput
  },
  props: {
    designPhotos: Array
  },
  data(){
    return {
    }
  },
}
</script>

<style scoped>
.left-tab-panel{
  overflow: scroll;
  overscroll-behavior-X: none;
  padding: 2px;
  width: 100%;
}
::-webkit-scrollbar {
  width: 1px;
}
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(4rem, 1fr));
  grid-gap: 0.2rem;
  grid-column: 2;
}
.gallery-panel{
  width: 100%;
  height: 100%;
}

.gallery-panel img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.35rem;
  cursor: pointer;
  border:1px solid white;
}

.gallery-panel img:hover{
  border:1px solid green;
  opacity: 0.9;
}

.search-div{
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-btn{
  padding: 7px 7px 0px 7px;
  background: white;
  border-radius: 3px;
  margin-left: 3px;
  cursor: pointer;
  height: 100%;
  border: 1px solid #a559a5;
}
</style>