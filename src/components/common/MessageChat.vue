<template>
  <div class="each__message d-flex" :class="isUser ? 'flex-row-reverse' : ''">
    <div class="info__user d-flex flex-column align-left">
      <v-img
        :src="image"
        alt="item.name"
        :style="{
          width: '55px!important',
          height: '55px!important',
          borderRadius: '50%',
          margin: '0 0 0 5px',
        }"
      />
      <div>{{ time }}</div>
    </div>
    <div class="message__user d-flex" :class="isUser ? 'flex-row-reverse' : ''">
      <v-icon :class="isUser ? 'support-icon-user' : 'support-icon-guest'"
        >mdi-triangle</v-icon
      >
      <div class="message__content">
        <div class="px-2 pt-2">{{ title }}</div>
        <div class="pa-2">{{ message }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "message-chat",
  props: {
    title: {
      type: String,
      default: "John Doe",
    },
    message: {
      type: String,
      default: "Hello world",
    },
    isUser: {
      type: Boolean,
      default: true,
    },
    image: {
      type: String,
      default: "https://technext.github.io/elaadmin/images/avatar/64-1.jpg",
    },
    time: {
      type: String,
      default: "11.11 am",
    },
  },
};
</script>

<style lang="scss">
.each__message {
  .info__user {
    min-width: 70px;
    height: 60px;
  }
  .message__user {
    width: 85%;
  }
}
.message__content {
  background-color: #f1f2f7 !important;
  border-radius: 10px;
  z-index: 1;
}
.support-icon {
  &-guest {
    position: absolute;
    width: 20px;
    transform: rotate(-0.25turn);
    color: #f1f2f7 !important;
    font-size: 30px !important;
    margin-bottom: auto;
    padding-top: 20px;
  }
  &-user {
    position: absolute;
    width: 20px;
    transform: rotate(90deg);
    color: #f1f2f7 !important;
    font-size: 30px !important;
    margin-bottom: auto;
    padding-top: 20px;
  }
}
</style>
