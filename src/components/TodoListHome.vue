<template>
  <div class="todo-home">
    <v-row>
      <v-col cols="12" md="12" lg="6" class="todo-home-box">
        <v-card class="pa-2 d-flex flex-column">
          <div class="title">To Do List</div>
          <todo-item
            v-for="(item, index) in dataTodo"
            :key="index"
            :text="item"
          ></todo-item>
        </v-card>
      </v-col>
      <v-col cols="12" md="12" lg="6" class="todo-home-box">
        <chat-component></chat-component>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ChatComponent from "./todo/ChatComponent.vue";
import TodoItem from "./todo/TodoItem.vue";
export default {
  components: { TodoItem, ChatComponent },
  name: "todo-list-home",
  data() {
    return {
      checkbox: false,
      dataTodo: [
        "Conveniently fabricate interactive technology for Conveniently fabricate interactive technology for",
        "Creating component page",
        "Follow back those who follow you",
        "Design One page theme",
        "Creating component page",
      ],
    };
  },
};
</script>

<style lang="scss">
.todo-home {
  .item-todo {
    background-color: #fafafa;
  }
}
.text {
  cursor: pointer;
}
</style>
