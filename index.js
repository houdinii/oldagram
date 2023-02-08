const posts = [
    {
        id:1,
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        id:2,
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        id:3,
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
const postsEl = document.getElementById("posts");
function render(){
    postsEl.innerHTML=""
    for(let i=0; i<posts.length; i++){
        let postHTML = `
        <div class="container post" ondblclick="increaseLikes(${posts[i].id})">
            <div class="post-user-area">
                <img src="${posts[i].avatar}" alt="Post Avatar" class="post-avatar avatar hvr-grow-rotate">
                <div class="post-user-details">
                    <p class="post-username bold">${posts[i].name}</p>
                    <p class="post-location">${posts[i].location}</p>
                </div>
            </div>
            <img class="post-image" src="${posts[i].post}" alt="post image">
            <div class="lower">
                <div class="post-icons">
                    <img class="hvr-grow-rotate post-icon" src="images/icon-heart.png" alt="heart icon">
                    <img class="hvr-grow-rotate post-icon" src="images/icon-comment.png" alt="comment icon">
                    <img class="hvr-grow-rotate post-icon" src="images/icon-dm.png" alt="direct message icon">
                </div>
                <p class="bold post-likes">${posts[i].likes} likes</p>
                <p><span class="bold post-handle">${posts[i].username}</span> ${posts[i].comment}</p>
            </div>
        </div>
    `
        postsEl.innerHTML += postHTML;
    }
}

render();

function increaseLikes(id){
    let foundIndex = posts.findIndex(x => x.id === id);
    posts[foundIndex].likes += 1;
    render();
}