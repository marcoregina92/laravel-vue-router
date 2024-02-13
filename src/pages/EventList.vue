<script>
import AppEventList from '../components/AppEventList.vue';

export default {
    name: "EventList",
    components: { AppEventList }
}
</script>

<template>
    <main>

        <section>
            <h1 class="mt-5 mb-3">Eventi</h1>
            <AppEventList />
        </section>

    </main>
</template>

<style scoped>
main {
    padding: 1rem;
}
</style>