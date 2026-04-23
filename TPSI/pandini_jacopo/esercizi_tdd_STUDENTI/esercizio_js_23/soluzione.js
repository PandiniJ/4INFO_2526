export const abbreviazione = (str) => {
    
    function abbreviazione(nomeCognome) {  
        let parti = nomeCognome.split(" ");
    
        let nome = parti[0];
        let cognome = parti[1];
    
        return nome + " " + cognome[0].toUpperCase() + ".";
    }
    
    
}

