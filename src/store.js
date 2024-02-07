import { reactive } from 'vue'
import axios from 'axios'; //importo Axios


export const store = reactive({
    methods: {
        myAxios: function () {
            axios.get("http://localhost:8000/api/prova").then(risultato => {
                console.log(risultato);
            }).catch(errore => {
                console.error(errore);
            });
        }
    }
});