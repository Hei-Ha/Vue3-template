<script setup>
import { onMounted, ref } from 'vue';
import { HelloWorld } from '@src/components';

const count = ref(1)

onMounted(() => {
    console.log('onMounted')
})

</script>

<template>
    <div>this is home</div>
    <HelloWorld />
    This is page component:
    <div>
        <RouterLink class="mr-10" to="page1">Click_to_Page1</RouterLink>
        <RouterLink to="page2">Click_to_Page2</RouterLink>
    </div>
    <RouterView />
</template>