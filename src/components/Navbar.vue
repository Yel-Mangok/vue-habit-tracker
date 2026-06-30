<script setup>
// Import the component CSS styles
import "../styles/components/Navbar.css";
import { useRoute } from 'vue-router';
const route = useRoute();

</script>

<template>
    <nav class="navbar">
        <span class="navbar-brand">⚡ HabitTracker</span>
        <div class="navbar-links">
            <RouterLink 
                to="/" :class="{ active: route.path === '/'}"
            >
                Habits
            </RouterLink>
            <RouterLink
                to="/analytics" :class="{ active: route.path === '/analytics'}"
            >
                Analytics
            </RouterLink>
        </div>
    </nav>
</template>