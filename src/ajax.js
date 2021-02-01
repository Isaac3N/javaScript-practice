// Asynchronous javacsript and xml

console.log('start')

function loginUser(email, password,callback){
    setTimeout(()=>{
        console.log("Now we have the data");
        callback(email, password);

    }, 5000);
}

const user = loginUser("ndubuisisaac@gmail.com", 1232452, (email, password)=> {
    console.log(email,password)
})

console.log('finish')