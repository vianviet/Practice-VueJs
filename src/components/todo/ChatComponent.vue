<template>
  <v-card class="pa-3 d-flex flex-column chat-home">
    <div class="title pa-3">Live Chat</div>
    <div class="chat__content" ref="chat">
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
    <div class="typing">Typing</div>
    <div class="input__message">
      <v-text-field
        v-model="inputMessage"
        @keydown="sendMessage"
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
      room: "0001",
      inputMessage: "",
      typing: false,
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
      ],
    };
  },
  methods: {
    sendMessage(e) {
      if (e.keyCode == 13) {
        if (this.inputMessage !== "") {
          this.$socket.emit("sendMessage", {
            room: this.room,
            message: this.inputMessage,
          });
          this.messageData.push({
            title: "Nguoi gui",
            message: this.inputMessage,
            isUser: true,
            image: "https://technext.github.io/elaadmin/images/avatar/64-2.jpg",
            time: "11.12 am",
          });
          this.inputMessage = "";
          let a = this.$refs.chat;
          setTimeout(() => {
            a.scrollTop = a.scrollHeight;
          }, 0);
        }
      } else {
        this.onKeyDownNotEnter();
      }
    },
    timeoutFunction() {
      this.$socket.emit("typing", { room: this.room, typing: this.typing });
    },
    onKeyDownNotEnter() {
      let timeout;
      if (this.typing == false) {
        this.typing = true;
        this.$socket.emit("typing", { room: this.room, typing: this.typing });
        timeout = setTimeout(this.timeoutFunction(), 5000);
      } else {
        clearTimeout(timeout);
        timeout = setTimeout(this.timeoutFunction(), 5000);
      }
    },
  },
  mounted() {
    setTimeout(() => {
      this.$refs.chat.scrollTop = this.$refs.chat.scrollHeight;
    }, 0);
  },
  created() {
    this.$socket.emit("room", this.room);
  },
  sockets: {
    connect() {
      // Fired when the socket connects.
      this.isConnected = true;
      console.log("server connected");
    },
    disconnect() {
      this.isConnected = false;
      console.log("server disconnected");
    },
    // initRoom: function (message) {
    //   // Đây là nơi nhận cái even initRoom với param là message mà server emit về
    //   this.messageData.push({
    //     title: "John Doe",
    //     message: message,
    //     isUser: false,
    //     image: "https://technext.github.io/elaadmin/images/avatar/64-1.jpg",
    //     time: "11.11 am",
    //   });
    // },
    // statusRoom: function (message) {
    //   this.messageData.push({
    //     title: "John Doe",
    //     message: message,
    //     isUser: false,
    //     image: "https://technext.github.io/elaadmin/images/avatar/64-1.jpg",
    //     time: "11.11 am",
    //   });
    // },
    receiveMessage: function (data) {
      console.log("message nhan", data);
      //nhận tín nhắn từ ng khác trong phòng, push tin nhắn vào mảng ban đầu
      this.messageData.push({
        title: "Server",
        message: data,
        isUser: false,
        image: "https://technext.github.io/elaadmin/images/avatar/64-1.jpg",
        time: "11.11 am",
      });
      setTimeout(() => {
        this.$refs.chat.scrollTop = this.$refs.chat.scrollHeight;
      }, 0);
    },
    receiveTyping: function (data) {
      console.log("typing nhan", data);
      //nhận tín nhắn từ ng khác trong phòng, push tin nhắn vào mảng ban đầu
      // this.messageData.push({
      //   title: "Server",
      //   message: data,
      //   isUser: false,
      //   image: "https://technext.github.io/elaadmin/images/avatar/64-1.jpg",
      //   time: "11.11 am",
      // });
      // setTimeout(() => {
      //   this.$refs.chat.scrollTop = this.$refs.chat.scrollHeight;
      // }, 0);
    },
  },
};
</script>
<style lang="scss">
.chat-home {
  gap: 20px;
  .typing {
    text-align: center;
  }
}
.chat__content {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-height: 190px;
  overflow-y: scroll;
}
.chat__content::-webkit-scrollbar {
  display: none;
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
