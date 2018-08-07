const PageAPI = {
  pages: [
    { number: 1, name: "Cell Contact", data: "215-875-4349" },
    { number: 2, name: "Email Contact", data: "test@test.com" },
    { number: 3, name: "Mail Contact", data: "123 nope street" }
  ],
  all: function() { return this.pages},
  get: function(id) {
    const isPage = p => p.number === id
    return this.Pages.find(isPage)
  }
}

export default PageAPI