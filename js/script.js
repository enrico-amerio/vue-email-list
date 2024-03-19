const {createApp} = Vue;

createApp({
  data(){
    return{
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      email: []
    }
  },
  methods:{
    getApi(){
      axios.get(this.apiUrl).then(res => {
        this.email.push(res.data.response);
      })
    
    }
  },
  mounted(){
    for(let i = 0; i < 10; i++){
      this.getApi();
    }
  }
}).mount('#app');