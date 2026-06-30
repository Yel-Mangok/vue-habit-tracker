<script setup>
// Import the Vue,js function to manage the page
import { watch } from "vue";
// Import the page components
import HabitCard from "../components/HabitCard.vue";
import HabitForm from "../components/HabitForm.vue";
import StatsCard from "../components/StatsCard.vue";
// Import the shared composable
import useHabits from "../composable/useHabits.js";
// Import the page CSS styles
import "../styles/pages/HabitView.css";

// Destructure everything needed from the shared composable
const { habits, total, completed, pending, addHabit, toggleHabit } = useHabits();

// Watch for habit changes (deep)
watch(habits, () => { console.log("habits updated"); }, { deep: true });

</script>

<template>

<div class="container">

    <header class="hero">

        <h1>Smart Habit Tracker</h1>

        <p>Build better habits every day</p>

    </header>

    <section class="stats-grid">

        <StatsCard title="Total"     :value="total" />
        <StatsCard title="Completed" :value="completed" />
        <StatsCard title="Pending"   :value="pending" />

    </section>

    <HabitForm @create="addHabit" />

    <section class="habits-grid">

        <HabitCard 
            v-for="habit in habits"
            :key="habit.id"
            :habit="habit"
            @toggle="toggleHabit"
        />

    </section>
</div>

</template>