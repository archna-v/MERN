//for each 
obj3={
    "firstname":"jai",
    "lastname":"kumar",
    "age":20
}
console.log(obj3);
//obj3.forEach((key,value)=>{
  //  console.log(key,value);

//})
//for (const (key,value) of obj3)
//{
//    console.log(key,value);
//}
for (key in obj3){
    value=obj3[key]
    console.log(key,value)
}
