const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


const masterEl = document.getElementById("master")

console.log(masterEl)
function renderPosts(){
    
    for(let i = 0; i < posts.length; i++ ){
        masterEl.innerHTML += `
        <main>
            <div class="info">
            <img class="avatar" src="${posts[i].avatar}">
                <div>
                    <h3>${posts[i].name}</h3>
                    <p>${posts[i].location}</p>  
                </div>
            </div>
            <div class="error">
                <img class="post-img" src="${posts[i].post}">
            </div>
            <section class="interactions">
                <img id="like${i}" class="btn" src="images/icon-heart.png" >
                <img class="btn" src="images/icon-comment.png" >
                <img class="btn" src="images/icon-dm.png" >
            </section>
            <section class="activity">
                <p class="bold-text">${posts[i].likes} likes</p>
                <p><span class="bold-text">${posts[i].username}</span> ${posts[i].comment}</p>
            </section>
        </main>`
    
}
    }
    

renderPosts()

const likeEl1 = document.getElementById("like0")
const likeEl2 = document.getElementById("like1")
const likeEl3 = document.getElementById("like2")
console.log(likeEl2)


likeEl1.addEventListener("click", function(){
    let f = 0
    likeCount(f)
    
})
likeEl2.addEventListener("click", function(){
    let f = 1
    likeCount(f)
})
likeEl3.addEventListener("click", function(){
    let f = 2
    likeCount(f)
})

function likeCount(f){
    //console.log(posts[f].likes)
    posts[f].likes +=1
    masterEl.innerHTML = ""
    renderPosts()
}
//renderPosts()