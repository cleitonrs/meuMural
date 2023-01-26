module.exports = {
  posts: [
    {
      id: "dfiajfd897",
      title: "Teste do mural",
      description: "Descrição teste"
    },
  ],

  getAll() {
    return this.posts
  },

  newPost(title, description) {
    // title e description estão em forma resumida, pois chave e valor são iguais
   this.posts.push({ id: generateID, title, description })
  }
}

let generateID = () => {
  return Math.random().toString(36).substring(2, 9)
}