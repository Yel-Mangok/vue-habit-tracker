<script setup>
import { reactive } from 'vue';

const emit = defineEmits("create");

const from = reactive(
    {
        name: "",
        category: "Health",
        priority: "Medium"
    }
);

const submitHabit = () => {
    if (!from.name.trim()){
        return;
    }

    emit("create", {...from, completed: false});

    from.name = "";
};

</script>

<template>
    <form class="habit-force" @submit-prevent = "submitHabit">
      <input v-model="form.name" placeholder="Habit Name">
      
      <select v-model="">

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