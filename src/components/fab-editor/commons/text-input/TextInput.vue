<template>
  <div class="form">
    <input type="text" id="text" :value="inputValue" class="form__input" autoComplete="off" placeholder=" "/>
    <label class="form__label">{{labelText}}</label>
  </div>
</template>

<script>
export default {
  name : 'TextInput',
  props:{
    labelText:String,
    inputValue:String,
  }
}

</script>
<style>

.form {
  position: relative;
  width: 100%;
  height: 1.7rem;
  margin: 7px 0px;
}

.form input {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: auto;
  height: 95%;
  border: 1px solid grey;
  border-radius: 4px;
  font-family: inherit;
  font-size: 0.7rem;
  color: grey;
  outline: none;
  padding: 0 0.5rem;
  background: none;
}

.form input:hover {
  border-color: darkseagreen;

}
.form__label:hover{
  color: darkseagreen;
}

/* Change border when input focus*/

.form input:focus {
  border-color: grey;
}

.form__label {
  position: absolute;
  left: 0.5rem;
  top: 0.4rem;
  padding: 0 0.2rem;
  font-size: 0.8rem;
  color: grey;
  cursor: text;
  transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
  background-color: white;
}


/*
1. When the input is in the focus state
reduce the size of the label and move upwards

2. Keep label state when content is in input field
*/

.form__input:focus ~ .form__label,
.form__input:not(:placeholder-shown).form__input:not(:focus) ~ .form__label {
  top: -0.4rem;
  font-size: 0.6rem;
  left: 0.8rem;
}


</style>