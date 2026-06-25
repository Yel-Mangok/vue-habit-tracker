<script setup>
// Import the Vue,js function to manage the page
import { ref, computed, watch } from "vue";
// Import the page components
import HabitCard from "../components/HabitCard.vue";
import HabitForm from "../components/HabitForm.vue";
import StatsCard from "../components/StatsCard.vue";

// Define the variable reference (data type)
const habits = ref(
    [
        {
            id: 1,
            name: "Morning Run",
            category: "Fitness",
            priority: "High",
            completed: true
        },
        {
            id: 2,
            name: "Read Book",
            category: "Learning",
            priority: "Medium",
            completed: false
        }
    ]
);

const addHabit = (habit) => {
    habits.value.push({...habit, id: Date.now()});
};

const toggleHabit = (id) => {
    const habit = habits.value.find(item => item.id === id);

    habit.completed = !habit.completed;
};

const total = computed(() => habits.value.length);

const completed = computed(() => habits.value.filter(h => h.completed).length);

const pending = computed(() => total.value - completed.value);

watch(habits, () => { console.log("habits updated"); }, { deep: true });

</script>

<template>
    <div class="container">
        <header class = "hero">
            <h1>Smart Habit Tracker</h1>
            <p>Build better habits every day</p>
        </header>

        <section class="stats-grid">

            <StatsCard title="Total" :value="total" />
            <StatsCard title="Completed" :value="completed" />
            <StatsCard title="Pending" :value="pending" />

        </section>

        <HabitForm @creae="addHabit" />

        <section class="habits-grid">
            <HabitCard
                 v-for="habit in habits"
                 :key="habit-id"
                 :habit="habit"
                 @toggle="toggleHabit"
            />
        </section>

    </div>
</template>