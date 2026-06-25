<script setup>
import { reactive } from 'vue';

const emit = defineEmits("create");

const form = reactive(
    {
        name: "",
        category: "Health",
        priority: "Medium"
    }
);

const submitHabit = () => {
    if (!form.name.trim()){
        return;
    }

    emit("create", {...form, completed: false});

    form.name = "";
};

</script>

<template>
    <form class="habit-form" @submit.prevent = "submitHabit">
      <input v-model="form.name" placeholder="Habit Name">
      
      <select v-model="form.category">

        <option>Health</option>
        <option>Learning</option>
        <option>Fitness</option>
        <option>Productivity</option>
      </select>

      <select v-model="form.priority">
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
      

      <button>Add Habit</button>
      
    </form>
</template>