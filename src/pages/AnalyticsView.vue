<script setup>
//import the vue.js function
import { computed } from 'vue';
//import the shared composable
import useHabits from "../composable/useHabits.js";
//import the page components
import RingChart from "../components/RingChart.vue";
import CategoryBar from "../components/CategoryBar.vue";
import "../styles/pages/AnalyticsView.css";

const { habits, total, completed, pending, addHabit, toggleHabit} = useHabits();

// Completion rate as percentage
const rate = computed(() =>
    total.value === 0 ? 0 : Math.round((completed.value / total.value) * 100)
);
const categories = computed(() => {
    const map={};
    for (const h of habits.value) {
        if(!map[h.category]) map[h.category] = { total: 0, completed: 0};
        map[h.category].total++;
        if(h.completed) 
        map[h.category].completed++;
    }

    return Object.entries(map).map(([name, data]) => (
        {
            name,
            ...data,
            rate: Math.round((data.completed / data.total) * 100),
        }
    ));
});
</script>

<template>
    <div class="analytics-container">
        <header class="analytics-her0">
            <h1>Analytics</h1>
            <p>Track your progress over time</p>
        </header>
        <section class="summary-grid">
            <div class="summary-card">
                <span class="summary-value">{{ total }}</span>
                <span class="summary-label">Total Habits</span>
            </div>
            <div class="summary-card highlight">
                <span class="summary-value">{{ completed }}</span>
                <span class="summary-label"> completed </span>
             </div>

             <div class="summary-card">
                <span class="summary-value">{{ pending }}</span>
                <span class="summary-label">pending</span>
             </div>

             <div class="summary-card accent">
                <span class="summary-value">{{ rate }}%</span>
                <span class="summary-label">Success Rate</span>
             </div>
        </section>
        <div class="analytics-body">
            <section class="analytics-card">
                <h2 class="card-title">Completion Rate</h2>
                <RingChart :rate="rate" :completed="completed" :total="total" />
            </section>
            <section class="analytics-card">
                <h2 class="card-title">By Category</h2>
                <div class="category-list">
                    <CategoryBar
                         v-for="cat in categories"
                         :key="cat.name"
                         :category="cat"
                    />
                </div>
            </section>
        </div>
        <section class="analytics-card habit-table">
            <h2 class="card-title">All Habits</h2>
            <div class="habit-row header-row">
                <span>Name</span>
                <span>Category</span>
                <span>Priority</span>
                <span>Status</span>
            </div>
            <div 
                v-for="habit in habits"
                :key="habit.id"
                class="habit-row"    
            >
                <span>{{ habit.name }}</span>
                <span class="tag">{{ habit.category }}</span>
                <span 
                     :class="['priority-badge', habit.priority.toLowerCase()]"
                >
                     {{ habit.priority }}
            </span>
                <span :class="[`status-badge`, habit.completed ? `done` : `pending`]"
                >
                    {{ habit.completed ? '✓ Done' : '○ Pending' }}
                </span>
            </div>
        </section>
    </div>
</template>