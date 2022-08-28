<template>
  <div class="loader-wrapper">
    <div class="loader"></div>
    <div class="loading-text">Loading...</div>
  </div>
</template>
<script>
export default {
  name:'EditorLoader',
}
</script>

<style scoped>
.loader-wrapper{
  color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.loader {
  border: 5px solid lightblue; /* Light grey */
  border-top: 5px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-text{
  margin-top: 0.5rem;
  font-weight: 700;
  font-size: 0.8rem;
  color: #434b57;
}

</style>