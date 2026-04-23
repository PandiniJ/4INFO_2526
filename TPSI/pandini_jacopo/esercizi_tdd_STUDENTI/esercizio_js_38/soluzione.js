export const reverse = (l) => {
    function invertiArray(arr) {
        let arrayInvertito = [];
        
        for (let i = arr.length - 1; i >= 0; i--) {
          arrayInvertito.push(arr[i]);
        }
        
        return arrayInvertito;
      }
      
      const input = [1, 2, 3, 4, 5];
      console.log(invertiArray(input)); 
      
};