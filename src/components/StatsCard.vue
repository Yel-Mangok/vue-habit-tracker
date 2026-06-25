<script setup>
defineProps(
    {
        title: String,
        value: Number
    }
);
</script>

<template>
    <div class=""stats-card>
         <h2>{{ value }}</h2>

         <p>{{ title }}</p>
    </div>
</template>