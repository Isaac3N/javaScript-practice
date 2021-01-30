const getRandomUsers = (n) => {
    const fetchRandomUsers = fetch(`https://randomuser.me/api/?results= ${n}`)
    fetchRandomUsers.then(data => {
        data.json().then(randomUsers => { 
            //console.log(JSON.stringify(randomUsers.results));
            randomUsers.results.forEach(user => {
                const {gender, email} = user;
                console.log(`${gender} - ${email}`)
            })
             // ---> to get the method in json
    });
})
}

getRandomUsers(10);

/* Using promises and the fetch api to retrieve random profile */