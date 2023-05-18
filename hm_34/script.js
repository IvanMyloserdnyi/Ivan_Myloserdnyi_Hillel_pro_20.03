const post = document.querySelector('.post_id');
const getPost = document.querySelector('.get_post');
const postCard = document.querySelector('.post_card');
const commentsToPost = document.querySelector('.comment_to_post')
const startUrl = 'https://jsonplaceholder.typicode.com/posts/'


getPost.addEventListener('click', function () {
    const postId = post.value;
    const fullUrlPost = startUrl.concat(postId);
    switch (true) {
        case postId > 0 && postId <= 100: {
            fetch(`${fullUrlPost}`)
                .then((response) => response.json())
                .then((json) => {
                    postCard.innerHTML = createPostMarkup(json);
                    commentsToPost.innerHTML = ""
                })
                .catch((error) => {
                    console.log(error)
                    alert('Help')
                })
            break
        }
        default: {
            alert('Incorrect ID');
            break
        }
    }
})
postCard.addEventListener('click', function (evt) {
    if (evt.target.nodeName === 'BUTTON' && evt.target.textContent === 'Get Comment') {
        const postId = post.value;
        const fullUrlPost = startUrl.concat(`${postId}`)
        fetch(`${fullUrlPost.concat('/comments')}`)
            .then((response) => response.json())
            .then((json) => {
                commentsToPost.innerHTML = createCommentsMarkup(json)
                console.log(json);
            })
    }
})


String.prototype.firstLetterToUppercase = function () {
    return this[0].toUpperCase() + this.slice(1);
}

function createPostMarkup(obg) {
    return `
    <div 
    style="max-width: 350px;margin: 20px auto;background: #323264;
    border-radius: 20px;padding: 10px">
        <h2><b>${obg.title.firstLetterToUppercase()}</b></h2>
        <p>${obg.body}</p>
        <button style="border-radius: 20px">Get Comment</button>
    </div>`
}

function createCommentsMarkup(comments) {
    return comments.map((comment) => `
    <div 
    style="
    max-width: 300px;margin: 20px auto; text-align: left;
    background: #643E72;border-radius: 20px;padding: 10px;">
        <p><b>Name: ${comment.name.firstLetterToUppercase()}</b></p>
        <p><b>Email: ${comment.email}</b></p>
        <p>${comment.body}</p>
        <br>
    </div>`).join('')
}
