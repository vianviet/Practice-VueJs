<template>
  <v-card class="pa-3">
    <div class="title pa-3">Live Chat</div>
    <div class="chat__content">
      <message-chat
        v-for="(item, index) in messageData"
        :key="index"
        :image="item.image"
        :isUser="item.isUser"
        :title="item.title"
        :message="item.message"
        :time="item.time"
      ></message-chat>
    </div>
    <div class="input__message">
      <v-text-field
        v-model="inputMessage"
        @keydown.enter="sendMessage"
      ></v-text-field>
      <v-icon class="icon__send" @click="sendMessage">mdi-send</v-icon>
    </div>
  </v-card>
</template>

<script>
import MessageChat from "../common/MessageChat.vue";
export default {
  components: { MessageChat },
  name: "chat-component",
  data() {
    return {
      inputMessage: "",
      messageData: [
        {
          title: "John Doe",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis sunt placeat velit ad reiciendis ipsam",
          isUser: false,
          image: "https://technext.github.io/elaadmin/images/avatar/64-1.jpg",
          time: "11.11 am",
        },
        {
          title: "John Cena",
          message: "how are you ?",
          isUser: true,
          image: "https://technext.github.io/elaadmin/images/avatar/64-2.jpg",
          time: "11.11 am",
        },
        {
          title: "John Doe",
          message: "I'm fine thank you and you?",
          isUser: false,
          image: "https://technext.github.io/elaadmin/images/avatar/64-1.jpg",
          time: "11.12 am",
        },
        {
          title: "John Cena",
          message: "Sit down, please.",
          isUser: true,
          image: "https://technext.github.io/elaadmin/images/avatar/64-2.jpg",
          time: "11.12 am",
        },
      ],
    };
  },
  methods: {
    sendMessage() {
      if (this.inputMessage !== "") {
        this.messageData.push({
          title: "John Cena",
          message: this.inputMessage,
          isUser: true,
          image: "https://technext.github.io/elaadmin/images/avatar/64-2.jpg",
          time: "11.12 am",
        });
        this.inputMessage = "";
      }
    },
  },
};
</script>
<style lang="scss">
.chat__content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.input__message {
  display: flex;
  gap: 10px;
  .v-text-field input {
  }
  .icon__send {
    cursor: pointer;
    transform: rotate(-0.12turn);
  }
}
</style>
