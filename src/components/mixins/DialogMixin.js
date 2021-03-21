var DialogMixin ={
    data() {
        return {
            dialog: false
        }
    },
    created() {
        
    },
    methods: {
        showDialog() {
            this.dialog = true;
        },
        closeDialog(){
            this.dialog = false;
        }
    },
}