//https://learnvue.co/2019/12/how-to-manage-mixins-in-vuejs/
export default {
    data () {
       msg: "Hello World"
    },
    created: function () {
       console.log("Printing from the Mixin")
    },
    methods: {
       displayMessage: function () {
          console.log("Now printing from a mixin function")
       }
    }
 }