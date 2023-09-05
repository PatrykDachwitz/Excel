import { ref, watchEffect, toValue } from 'vue'

export function useFetch(url) {
     const date = ref(null);
     const error = ref(null);

     watchEffect(() => {

         date.value = null;
         error.value = null;

         fetch(toValue(url))
             .then(response => {
                 if (response.status === 200) {
                     return response.json();
                 } else {

                 }
             })
             .then(json => {
                 date.value = json;
                 console.log(date.value)
             })
             .catch(err => {
                 error.value = err;
             })
     })

    return { date, error };
}