<script setup>
import { useTodoList } from './hoooks/usetodoList'
import TodoListItem from './components/todoListItem.vue';
import { onBeforeUnmount } from 'vue';

const {
  eventName,
  deadlineRef,
  addTodo,
  getTodoListByType,
  eventTypeToOnGoing,
  eventTypeToFinished,
  deleteEvent,
  timer,
  closeTimer
} = useTodoList();

const todolistType = [
  { title: '未开始事件', status: 0 },
  { title: '进行中事件', status: 1 },
  { title: '已完成事件', status: 2 }
]

onBeforeUnmount(() => {
  clearInterval(timer);
})

</script>

<template>
  <div class="app-container">
    <h1>todo-list</h1>
    <div class="add-btn">
      <input placeholder="事件" type="text" v-model="eventName" />
      <input type="datetime-local" v-model="deadline" ref="deadlineRef">
      <button @click="addTodo">添加事件</button>
    </div>
    <button @click="closeTimer">关闭事件提醒</button>
    <hr />
    <div class="event-list-finished">
      <TodoListItem v-for="(item, index) in todolistType" :key="index" :list="getTodoListByType(item.status)" :title="item.title"
        :status="item.status" :eventTypeToOnGoing="eventTypeToOnGoing" :deleteEvent="deleteEvent"
        :eventTypeToFinished="eventTypeToFinished" />
    </div>
  </div>
</template>

<style scoped></style>
