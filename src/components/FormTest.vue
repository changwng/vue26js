<template>
    <form v-on:submit.prevent="loginUser">
  <div>
    <label for="email">Email</label>
    <input id="email" type="text" ref="email" v-model="email">
    <div>
    <small>{{emailValidation}}</small>
    </div>
  </div>
  <div>
    <label for="password">Password</label>
    <input id="password" type="password" ref="password" >
  </div>
  <div>
    <button type="submit">Login</button>
  </div>
</form>
</template>
<script>
import axios from 'axios';
export default {
    name: 'FormTest', 
      data () {
          return {
                email:'' 
        }
    },
    computed: {
          emailValidation: function(){
            return this.email.length > 10 ?'':'Length must be over 10';
          }
    },
    methods: {
        loginUser(){
          let email = this.email.value;
          let password = this.$refs.password.value;
          axios.post('/lgoin', {email: email, 
                               password:password});
        }
    },
};
</script>