<template>
  <div class="form ms-3">
    <div class="row">
      <div class="col-6">
        <input type="text" placeholder="Your Name">
      </div>
      <div class="col-6">
        <input type="email" placeholder="Your email">
      </div>
      <div class="col-6">
        <input type="text" placeholder="Mobile number">
      </div>
      <div class="col-6">
        <input type="password" placeholder="Your Pincode">
      </div>
      <div class="col-12">
        <textarea name="" id="" rows="4" placeholder="Enter Your Message"></textarea>
        <button class="btn my-btn"> SUBMIT NOW </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Form',
}
</script>

<style lang="scss" scoped>
  @use '../../scss/partials/variables' as *;
  @use '../../scss/main' as *;
.form{
  input{
    width: 100%;
    height: 50px;
    margin-bottom: 45px;
    background-color: $bg-form;
    color:$color-p;
    border: none;
    text-indent: 20px;
  }
  textarea{
    width: 100%;
    text-indent: 20px;
    line-height: 50px;
    background-color: $bg-form;
    color:$color-p;
    border: none;
    margin-bottom: 20px;

  }
  ::placeholder{
    color:$color-p ; 
    opacity: 1;
  }
  .my-btn{
    width: 100%;
    background-color: $color-dark;
    color:white;
    border-radius: 0;
  }
}
</style>