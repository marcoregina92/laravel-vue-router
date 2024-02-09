<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console

export default {
    name: "AppComponent",
    data() {
        return {
            store
        }
    },
    methods: {
        doThings() {
            console.log("AppComponent does things");
        }
    },
    mounted() {
        register(this); //per debuggare il componente da console
        this.doThings();
    }
}
</script>

<template>
    <div>
        <h1>Eventi:</h1>
    </div>

    <div class="container">
        <div class="d-flex flex-wrap justify-content-between">
            <div v-for="evento in store.eventList" class="card " style="width: 18rem;">
                <div class="card-body">
                    <h2 class="card-title">{{ evento.name }} evento di</h2>
                    <h5 class="card-text">Città: {{ evento.city }}</h5>
                    <p class="card-text">Data: {{ evento.date }}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di AppComponent
</style>