<template>
  <ul>
    <li v-for="conversation in conversations">
      <a v-link="{ path: '/chat/' + conversation.id }">{{conversation.name}}</a>
    </li>
  </ul>
</template>

<script>

  import store from '../store';

  let ConversationList = {

    name: 'ConversationList',
    template: '#conversation-list-template',

      data() {
      return {
        conversations: []
      };
    },

    created() {
      store.getConversations().then(conversations => {
        this.conversations = conversations;;
      });
    }

  };

  export default ConversationList;


</script>
