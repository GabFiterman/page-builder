const alertMixin = {
    data() {
        return{
            msg: 'Você clicou no botão',
        };
    },

    methods: {
        showMsg() {
            alert(this.msg);
        },
    },
};

export default alertMixin;
