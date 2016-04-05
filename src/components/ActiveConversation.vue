<template>
  Chat with {{conversation.name}}
</template>

<script>

  let ActiveConversation = {

    name: 'ActiveConversation',
    template: '#active-conversation-template',
    components: {},

    props: {
      conversation: Object
    },

    created() {
    }

  };

  export default ActiveConversation;


</script>

<style lang="less">



</style>
