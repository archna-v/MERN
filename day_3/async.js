//ex without timeout
 /*function funName()
{
    return "hello"
}
arrowfunName =async() =>{
    return "KEC"
}
console.log(funName())
console.log(arrowfunName())
///whenever we use async it is a promise
/*output: Promise { 'hello' }
          Promise { 'KEC' }
*/
//whenever we r returing something return will be converted into promise, if we replce return by console.log we'll not get promise


//ex with timeout 
/*async function funName1()
{
    setTimeout(()=>{
        console.log ("hello")
    },1000)
    
}
arrowfunName1 =async() =>{
    setTimeout(()=>{
        console.log("KEC")
    },1000)
}
console.log(funName1())
console.log(arrowfunName1())
/*output: Promise { undefined }
          Promise { undefined }
*/

//To remove promise(we had used await):
async function funName2()
{
    setTimeout(()=>{
        console.log ("hello")
    },1000);
    console.log (await "hello")
    
}
arrowfunName2 =async() =>{
    setTimeout(()=>{
        console.log("KEC")
    },1000);
    console.log (await "hello")
}
funName2()
arrowfunName2()
