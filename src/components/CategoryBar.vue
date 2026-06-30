<script setup>
import "../styles/components/CategoryBar.css";

defineProps(
    {
        category: Object
    }
);
</script>

<template>
    <div class="cat-bar">
        <div class="cat-header">
            <span class="cat-name">{{ category.name }}</span>
            <span class="cat-stat">
                {{ category.cpmpleted }} / {{ category.total }}
            </span>
        </div>
        <div class="bar-track">
                <div
                    class="bar-fill"
                    :style="{width: category.rate + '%'}"
                />

        </div>
            <span class="cat-rate">{{ category.rate }}%</span>
    </div>
</template>