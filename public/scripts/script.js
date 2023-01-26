document.addEventListener("DOMContentLoaded", () => {
  updatePosts()
})

async function updatePosts() {
  await fetch("http://192.168.0.113:5000/api/all")
    .then(res => {
      return res.json()
    }).then(json => {
      let postElements = ''

      let posts = JSON.parse(json)
      let newPost = posts.map(post => {
        return post = `
        <div id=${post.id} class="card">
        <div class="card__header">
          <h4 class="card__title">${post.title}</h4>
        </div>
        <div class="card__body">
          <div class="card__text">
            ${post.description}
          </div>
        </div>
      </div>
    `
      })

      document.getElementById("posts").innerHTML = postElements += newPost
    })
}

function newPost() {

  let title = document.getElementById("title").value
  let description = document.getElementById("description").value

  post = { title, description }

  const options = {
    method: "POST",
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify(post)
  }

  fetch("http://192.168.0.113:5000/api/new", options)
    .then(res => {
      console.log(res)
      updatePosts()
      document.getElementById("title").value = ''
      document.getElementById("description").value = ''
    })


}