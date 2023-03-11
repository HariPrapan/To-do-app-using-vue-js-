var app = new Vue({
    el: '#app',
    template:`<div> <ul> <li v-for="(task,index) in tasks"> <span> {{task}} </span> <button v-on:click="deletetask(index)"> Delete </button>  </li></ul> <input type="text" v-model="taskvalue"><button @click="addtask()"> Add task </button> </div>`,
    
    data: {
       taskvalue:null,
      tasks:["Task 1", "Task 2"],
    },
      methods:{
        deletetask(ind){
            this.tasks.splice(ind,1)
        },
        addtask(){
            if (this.taskvalue){
            this.tasks.push(this.taskvalue)
        }
        }
      },
   
  })
