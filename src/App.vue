<script>

import axios from 'axios'; //importo Axios
import { store } from "./store.js" //state management

export default {
	data() {
		return {
			store
		}
	},
	mounted() {
		this.getEventList();

	},
	methods: {
		getEventList() {
			axios.get("http://localhost:8000/api/events").then(risultato => {
				console.log(risultato.data.payload);
				this.store.eventList = risultato.data.payload;
			}).catch(errore => {
				console.error(errore);
			});
		}
	}
}
</script>

<template>
	<header> header qui </header>
	<router-view></router-view>
</template>

<style lang="scss">
// importo il foglio di stile generale dell'applicazione, non-scoped
@use './styles/general.scss';
</style>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di App.vue
</style>