<script>
import {DialogMixin} from './DialogMixin.js';

export default {
    name: 'LoginForm',
    components: { ComponentName },
    directives: { DirectiveName },
    mixins: [DialogMixin],
    data() {
        return {
            
        };
    },
    mounted() {
        
    },
    methods: {
        submitForm(){
            axios.post('/login',{
                id: this.id,
                pw: this.pw
            })
            .then(() => this.closeDialog())
            .catch((error) => new Error(error));
        }
    },
};
</script>