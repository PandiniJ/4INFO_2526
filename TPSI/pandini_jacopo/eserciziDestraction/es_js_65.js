let utente = {
    nome: "Jon",
    role: "user"
}

let {nome ,role,is_admin = false } = utente ; 


console.log("nome: ",nome);
console.log("role: ", role);
console.log("is_admin: ", is_admin); 


