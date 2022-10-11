<template>
  <v-card class="pa-3 d-flex flex-column chat-home">
    <audio controls ref="audio" class="d-none">
      <source src="../../../public/sounds/test.mp3" type="audio/mpeg" />
      Your browser does not support the audio tag.
    </audio>
    <div class="title pa-3">Live Chat</div>
    <div class="chat__content" ref="chat" v-on:scroll="onScroll">
      <div class="load-more" v-if="isLoadingMore">
        <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>
      </div>
      <message-chat
        v-for="(item, index) in messageData"
        :key="index"
        :image="item.image"
        :isUser="item.isUser"
        :title="item.title"
        :message="item.message"
        :time="item.time"
        :uploaded="item.uploaded"
      >
      </message-chat>
      <div v-if="receiveTyping" class="typing">
        {{ userTyping }} is typing...
      </div>
    </div>

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
import messageApi from "@/api/messageApi";
import MessageChat from "../common/MessageChat.vue";
import { messageDtos } from "../../util/convertAPI/messageUtil";
let timeout;
export default {
  components: { MessageChat },
  name: "chat-component",
  data() {
    return {
      stopLoadMore: false,
      bonus: 0,
      page: 1,
      isLoadingMore: false,
      room: "0001",
      inputMessage: "",
      typing: false,
      receiveTyping: false,
      userTyping: "",
      isConnected: false,
      messageData: [
        // {
        //   title: "John Doe",
        //   message:
        //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis sunt placeat velit ad reiciendis ipsam",
        //   isUser: false,
        //   image: "https://technext.github.io/elaadmin/images/avatar/64-1.jpg",
        //   time: "11.11 am",
        // },
        // {
        //   title: "John Cena",
        //   message: "how are you ?",
        //   isUser: true,
        //   image: "https://technext.github.io/elaadmin/images/avatar/64-2.jpg",
        //   time: "11.11 am",
        // },
      ],
    };
  },
  methods: {
    onScroll(e) {
      if (
        e.srcElement.scrollTop === 0 &&
        !this.isLoadingMore &&
        !this.stopLoadMore
      ) {
        this.isLoadingMore = true;
        this.page = this.page + 1;
        const test = this.$refs.chat.scrollHeight;
        setTimeout(() => {
          messageApi.getMessage("1", this.page, this.bonus).then((data) => {
            if (data.data.message.length === 0) this.stopLoadMore = true;
            this.messageData.unshift(...messageDtos(data.data.message));
            this.isLoadingMore = false;
            setTimeout(() => {
              this.$refs.chat.scrollTop =
                this.$refs.chat.scrollHeight - test - 100;
            }, 0);
          });
        }, 0);
      }
    },
    scrollToChat() {
      let a = this.$refs.chat;
      setTimeout(() => {
        a.scrollTop = a.scrollHeight;
      }, 0);
    },
    callback(data) {
      return new Promise((resolve, reject) => {
        this.$socket.emit("sendMessage", data, (err, res) => {
          if (err) {
            return reject(err);
          }
          return resolve(res);
        });
      });
    },
    sendMessage(e) {
      if (e.keyCode == 13) {
        if (this.inputMessage !== "") {
          var today = new Date();
          const message = {
            title: this.$store.state.email,
            message: this.inputMessage,
            isUser: true,
            image: this.$store.state.avatar,
            time: `${today.toLocaleTimeString("en-US", { hour12: false })}`,
            uploaded: false,
          };
          this.messageData.push(message);

          this.timeoutFunction();
          this.scrollToChat();
          this.callback({
            room: this.room,
            email: this.$store.state.email,
            message: this.inputMessage,
            avatar: this.$store.state.avatar,
          })
            .then((data) => {
              message.uploaded = true;
            })
            .catch((err) => {
              this.inputMessage = "";
            });
        }
        this.inputMessage = "";
      } else {
        this.onKeyDownNotEnter();
      }
    },
    timeoutFunction() {
      this.typing = false;
      this.$socket.emit("typing", {
        room: this.room,
        typing: this.typing,
        email: this.$store.state.email,
      });
    },
    onKeyDownNotEnter() {
      if (this.typing == false) {
        this.typing = true;
        this.$socket.emit("typing", {
          room: this.room,
          typing: this.typing,
          email: this.$store.state.email,
        });
        timeout = setTimeout(() => this.timeoutFunction(), 2000);
      } else {
        clearTimeout(timeout);
        timeout = setTimeout(() => this.timeoutFunction(), 2000);
      }
    },
    playSound() {
      this.$refs.audioe.play();
    },
  },
  mounted() {
    // setTimeout(() => {
    //   this.$refs.chat.scrollTop = this.$refs.chat.scrollHeight;
    // }, 0);
  },
  created() {
    this.$socket.emit("room", this.room);
    messageApi.getMessage("1", 1, this.bonus).then((data) => {
      this.messageData.push(...messageDtos(data.data.message));
      this.scrollToChat();
    });
  },
  beforeDestroy() {
    // this.timeoutFunction();
    this.$socket.emit("typing", {
      room: this.room,
      typing: false,
      email: this.$store.state.email,
    });
  },
  sockets: {
    connect() {
      this.isConnected = true;
    },
    disconnect() {
      this.isConnected = false;
    },
    receiveMessage: function (data) {
      this.playSound();
      var today = new Date();
      this.messageData.push({
        title: data.email,
        message: data.message,
        isUser: this.$store.state.email === data.email,
        image: data.avatar,
        time: `${today.toLocaleTimeString("en-US", { hour12: false })}`,
      });
      this.bonus = this.bonus + 1;
      if (this.$refs.chat.scrollHeight - this.$refs.chat.scrollTop < 500) {
        setTimeout(() => {
          this.$refs.chat.scrollTop = this.$refs.chat.scrollHeight;
        }, 0);
      }
    },
    receiveTyping: function (data) {
      //nhận tín nhắn từ ng khác trong phòng, push tin nhắn vào mảng ban đầu
      this.receiveTyping = data.typing;
      this.userTyping = data.email;
      // if (this.$refs.chat.scrollTop !== this.$refs.chat.scrollHeight) {
      //   setTimeout(() => {
      //     this.$refs.chat.scrollTop = this.$refs.chat.scrollHeight;
      //   }, 0);
      // }
    },
  },
};
</script>
<style lang="scss">
.chat-home {
  gap: 20px;
  .load-more {
    text-align: center;
    z-index: 3;
    width: 100%;
  }
  .typing {
    text-align: center;
    position: absolute;
    bottom: 100px;
    z-index: 1;
    width: 100%;
  }
}
.chat__content {
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 190px;
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
