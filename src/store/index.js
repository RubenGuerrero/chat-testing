import { EventEmitter } from 'events';
import { Promise } from 'es6-promise'

const store = new EventEmitter();

let conversations = [
  {
    id: 1,
    name: 'Vincent Porter',
    image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg',
    status: 'online'
  },
  {
    id: 2,
    name: 'Rubén Guerrero',
    image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_02.jpg',
    status: 'offline'
  },
  {
    id: 3,
    name: 'Juanito Perez',
    image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_03.jpg',
    status: 'online'
  }
];

store.getConversation = (id) => {
  return new Promise((resolve, reject) => {
    let conversation = conversations.filter((item) => {
      return item.id === parseInt(id);
    });
    resolve(conversation[0]);
  });
};

store.getConversations = () => {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(conversations);
    }, 500);
  });

};

export default store;
