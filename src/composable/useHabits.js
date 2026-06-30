// Import the Vue.js functions
import { ref, computed } from "vue";
// Import the dataset
import habitsList from "../data/habits.js";

const habits = ref(habitsList);

export default function useHabits() {

    const total = computed(() => habits.value.length);
    const completed = computed(() => habits.value.filter(h => h.completed).length);
    const pending = computed(() => total.value - completed.value);

    const addHabit = (habit) => {
        habits.value.push({ ...habit, id: Date.now() });
    };

    const toggleHabit = (id) => {
        const habit = habits.value.find(item => item.id === id);

        habit.completed = !habit.completed;
    };

    return { habits, total, completed, pending, addHabit, toggleHabit };
}