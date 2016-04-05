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

}

export default ConversationList;
