export function count_occurence(text) {
   
   let atext = text.split(' '); 

   let occorrenze = new Map()

   atext.forEach(parola => {
      
      occorrenze.set(parola, (occorrenze.get(parola) || 0) + 1)

   });

   return occorrenze; 
}


