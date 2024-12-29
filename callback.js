//post calbacks

function databaseSharing(){
    console.log("Data stored successfully")
}
function submitForm(formMsg,dbs){                     ///2nd step 
    setTimeout(()=>{
        dbs()                                         ///data stored successfully msg is printed
        console.log(formMsg)                          ///form submitted sucessfully "  "  "
    },1000)
}
submitForm("Form submitted successfully",databaseSharing); ///1st step
///task 4: do callback with some example
///task 5: improve index.html