import Vue from 'vue';
import ConversationList from './ConversationList';
import ActiveConversation from './ActiveConversation';

let Chat = {

  name: 'Chat',
  template: '#chat-template',
  components: {
    ConversationList,
    ActiveConversation
  },

  route: {
    data({to}) {
      console.log(to.params);
    }
  }

};

export default Chat;
