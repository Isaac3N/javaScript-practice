// function callbackExample(name, callback){
//     console.log(callback(name));
// }

// // var callback = function(name){
// //     return "Hello"+ " " + name; 
// // }
// // callbackExample("Isaac Ndubuisi", callback);

// callbackExample("Isaac Ndubuisi", (name)=>{
//     return `Hello ${name}`
// })

const posts = [
    {title: 'Post One', body: 'This is the post one'},
    {title: 'Post Two', body: 'This is the post two'}
] // --> to objects in a single array

function getPosts(){
    setTimeout(()=> {
        let output = "";
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
         // This lets you look at the HTML markup of the element's content nodes.
        document.body.innerHtml = output;
    }, 1000);
}
function createPost(post, callback){
    setTimeout(()=>{
        posts.push(post);
        callback();
    }, 2000);
}

createPost({title: 'Post Three', body: 'This is the post Three'}, getPosts);
