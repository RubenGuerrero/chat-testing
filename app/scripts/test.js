import Vue from 'vue';

Vue.config.debug = true

let model = {
  message: 'Hello World',
  newTodo: {
    checked: false,
    text: ''
  },
  todos: [
    {
      checked: false,
      text: 'Todo uno'
    },
    {
      checked: true,
      text: 'Todo dos'
    },
    {
      checked: false,
      text: 'Todo tres'
    }
  ]
};

model.classObject = {
  'classA': true,
  'classB': false
};

var MyComponent = Vue.extend({
  props: {
    todoText: {
      type: String,
      required: true
    },
    todoChecked: Boolean
  },
  template: '#my-component-template'
});

Vue.component('my-component', MyComponent);


let vm = new Vue({

  el: '#app',
  data: model,
  computed:  {
    buttonDisabled: function(){
      return this.newTodo.text.length === 0;
    },
    statusClass: function(){
      return function(index){
        return {
          'checked': this.todos[index].checked
        };
      }
    }
  },
  methods: {
    addTodo: function(){

      let text = this.newTodo.text.trim();
      let checked = this.newTodo.checked;

      if(text){

        this.todos.push({text: text, checked: checked});

        this.newTodo.checked = false;
        this.newTodo.text = '';

      }

    },
    removeTodo: function(index) {
      this.todos.splice(index, 1);
    }
  }

});
