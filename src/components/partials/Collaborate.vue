<template>
  <div class="collaborate mb-100">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <span><strong>COLLABORATE</strong></span>
          <h3>WANT TO WORK WITH US? LEAVE US A MESSAGE!</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio fugit similique in quos repellat dolorem ex adipisci commodi reprehenderit libero ratione ipsum magnam aliquid officiis, veritatis minima rerum facere iure autem voluptates maxime reiciendis velit. Assumenda non molestiae expedita, quod laudantium voluptatibus asperiores delectus sed dolorem odit saepe, temporibus ratione eaque obcaecati, nostrum repellendus impedit eum. At provident temporibus repellendus earum, culpa asperiores dignissimos suscipit, ut cumque in veritatis molestias.</p>
        </div>
        <div class="col-6 ">
          <Form />
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import Form from './Form.vue';

export default {
  name:'Collaborate',
  components:{
    Form,
  }
}
</script>

<style lang="scss" scoped>
  @use '../../scss/partials/variables' as *;
  @use '../../scss/main' as *;

  .collaborate{
    h3{
      font-size: 3rem;
    }
    p{
      color:$color-p;
    }
  }
</style>