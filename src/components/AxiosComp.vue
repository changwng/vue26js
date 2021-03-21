<template>
    <div>
        Axios 데이터 조회
        npm install --save axios
        <button @click="fetchData" >데이터 Http 조회</button>
        <label>{{logMsgs}}</label>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'AxiosComp',
    components: {  },
    data () {
			return {
				showTab: 0,
                logMsgs:"",
				mentions: [],
				focusInput: false
			}
		},
    data2() {
        return {
            logMsgs:""
        }
    },
    methods: {
        fetchData: function(){
            let self = this;
           axios.get('https://jsonplaceholder.typicode.com/users')
           .then( function(response){
              // console.log(response.data);
               self.logMsgs = response.data;
           })
           .catch(function(error){
               //console.log(error);
               self.logMsgs="Error:"+error;
           }
           );
        }
    },
};
</script>