const butt = document.getElementById('gettext');
const gets = document.getElementById('getusers');
const posts =  document.getElementById('getposts');
const addpost = document.getElementById('addPosts')
butt.addEventListener('click',getText);
async function getText(){
   const res = await fetch('sample.txt');
   const data = await res.text();
   document.getElementById('displayText').innerHTML = data;
}


gets.addEventListener('click',getUsers);

function getUsers(){
    fetch('users.json')
    .then((res) => res.json())
    .then((data) => {
        let output = '<h2>Users</h2>';
        data.forEach(function(user){
            output += `
            <ul>
            <li>ID: ${user.id}</li>
            <li>Name: ${user.name}</li>
            <li>Email: ${user.email}</li>
            </ul>
            `;
        })
        document.getElementById('output').innerHTML = output
    })
}

posts.addEventListener('click',getPosts);

function getPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>res.json())
    .then((data) => {
        let output = '<h2>Posts</h2>';
        data.forEach(function(post){
            output += `
            <ul>
            <li>userId : ${post.userId}</li>
            <li>id : ${post.id}</li>
            <li>title : ${post.title}</li>
            <li>body : ${post.body}</li>
            </ul>
            `;
        })
        document.getElementById('output').innerHTML = output;
    })
}

addpost.addEventListener('submit', addPosts)

function addPosts(e){
    e.preventDefault();

    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain , */*',
            'Content-type': 'application/json'
        },
        body:JSON.stringify({title:title, body:body})
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
}