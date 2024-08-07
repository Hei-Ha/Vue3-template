<script setup lang="ts">

import { ref } from 'vue'
const text = ref('Hello World')

</script>

<template>
    <p class="hello">{{ text }}</p>
</template>