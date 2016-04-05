<template id="chat-template">
  <conversation-list></conversation-list>
  <active-conversation :conversation="activeConversation"></active-conversation>
</template>

<script>

  import store from '../store';
  import ConversationList from './ConversationList.vue';
  import ActiveConversation from './ActiveConversation.vue';

  let Chat = {

    name: 'Chat',

    data() {
      return {
        activeConversation: {}
      }
    },

    components: {
      ConversationList,
      ActiveConversation
    },

    route: {
      data({to}) {
        if(to.params.id){
          store.getConversation(to.params.id).then((conversation) => {
            this.activeConversation = conversation;
            console.log(conversation);
          });
        }
      }
    }

  };

  export default Chat;


</script>
