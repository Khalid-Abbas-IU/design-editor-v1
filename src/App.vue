<template>
  <MainLayout/>
</template>

<script>
import MainLayout from './components/fab-editor/app-layout/Main-layout'

export default {
  name: 'App',
  components: {
    MainLayout
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Nunito,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
}

:root {
  --white-color:#fff;
  --dark-color:#2c3e50;

  --header-bg-color: var(--dark-color);
  --left-panel-color: var(--white-color);
  --right-panel-color: var(--white-color);
  --main-panel-bg:#eef0f2;

  --header-height: 6%;
  --left-panel-width: 18%;
  --right-panel-width: 15%;
  --left-menu-width: 24%;
  --main-panel-width: calc(100% - var(--left-panel-width) - var(--right-panel-width));
  --editor-main-sec-height:calc(100% - var(--header-height));

  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(97,125,238,.5);
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);

  --dark-accent: #121223;

  --accent: #434b57;
  --mild-color: #C2CBD0;
  --super-light: #ECEEF0;
  --fields: #626262;
  --background: #F9F9F9;

  --normal-gray: #74838c;
  --light-gray: #cacfd2;
  --super-light-gray-1: #F3F5F5;
  --super-light-gray-2: #ECEEF0;
  --super-light-gray-3: #DCDFE1;
  --max-light-gray-3: #F9F9F9;

  --white: #ffffff;
  --app-header-height:8vh;
  --fab-editor-header-height:40px;

}

.fe-d-flex{
  display: flex !important;
}
.fe-justify-center{
  justify-content: center;
}
.fe-justify-space-btw{
  justify-content: space-between;
}
.fe-alignItems-center{
  align-content: center;
}
.fe-alignItems-space-btw{
  align-content: space-between;
}
.center-content{
  display: flex;
  justify-content: center;
  align-content: center;
}
.center-content-column{
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}
</style>
