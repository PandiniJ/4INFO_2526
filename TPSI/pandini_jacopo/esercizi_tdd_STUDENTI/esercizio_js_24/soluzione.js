export const protect_email = (email) => {

        let splitted = email.split("@");
        let pivot = splitted[0].lenght / 2 ;

        return `${splitted[0].substring(0,pivot)}...@${splitted[1]}`;
        

 
};
