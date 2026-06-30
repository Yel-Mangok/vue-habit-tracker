<script setup>
import "../styles/components/RingChart.css";
import { computed } from 'vue';

const props = defineProps(
    {
        rate:       Number,
        completed:  Number,
        total:      Number
    }
);

const radius = 70;
const circumference = 2 * Math.PI * radius;
const offset = computed(() => circumference - (props.rate / 100) * circumference);
</script>

<template>
    <div class="ring-wrapper">
        <svg width="200" height="200" view-box="0 0 220 220">
            <!-- Background ring -->
            <circle
                cx="110" cy="110" :r="radius"
                fill="none"
                stroke="#1e293b"
                stroke-width="18"
            />

            <!-- Track ring (border effect) -->
            <circle 
                cx="110" cy="110" :r="radius"
                fill="none"
                stroke="url(#ringGradient)"
                stroke-width="14"
                stroke-linecap="round"
                :stroke-dasharray="circumference"
                :stroke-dashoffset="offset"
                transform="rotate(-90 110 110)"
                class="progress-ring"
            />

            <!-- Gradient definition -->
            <defs>
                <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%"   stop-color="#2563eb"/>
                    <stop offset="100%"   stop-color="#7c3aed"/>
                </linearGradient>
            </defs>

            <!-- Rate value -->
            <text x="110" y="110" text-anchor="middle" class="ring-text-rate">
                {{ rate }}
            </text>

            <!-- Label -->
            <text x="110" y="124" text-anchor="middle" class="ring-text-label">
                completion
            </text>

        </svg>

        <p class="summary">
            <span class="ring-completed">{{ completed }}</span>
            of
            <span class="ring-total">{{ total }}</span>
            habits done
        </p>
    </div>
</template>