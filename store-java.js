const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let users = []

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  users.forEach(user => {
    const isVisible =
      user.name.toLowerCase().includes(value) |
	  user.type.toLowerCase().includes(value) |
	  user.code.toLowerCase().includes(value)
    user.element.classList.toggle("hide", !isVisible)
  })
})

/** fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => {
    users = data.map(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0]
      const header = card.querySelector("[data-header]")
      const body = card.querySelector("[data-body]")
      header.textContent = user.name
      body.textContent = user.email
      userCardContainer.append(card)
      return { name: user.name, email: user.email, element: card }
    })
  })
  
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
} **/

fetch("https://mocki.io/v1/64047f9c-e3a9-4a1c-bbba-f9e8eab27606")
  .then(res => res.json())
  .then(data => {
    users = data.map(user => {
		console.log(data)
      const card = userCardTemplate.content.cloneNode(true).children[0]
      const header = card.querySelector("[data-header]")
      const body = card.querySelector("[data-type]")
	  const price = card.querySelector("[data-price]")
	  const code = card.querySelector("[data-code]")
	  const imgSource1 = card.querySelector("[data-img1]")
	  const imgSource2 = card.querySelector("[data-img2]")
      header.textContent = user.name
      body.textContent = user.type
	  code.textContent = user.code
	  price.textContent = user.price
	  imgSource1.src = user.img1
	  imgSource2.src = user.img2
      userCardContainer.append(card)
      return { name: user.name, code: user.code, type: user.type, price: user.price, imgSource: user.img1, imgSource1: user.img2, element: card,  }
    })
  })
  
/**let image = document.getElementById('image')

{
fetch("https://dog.ceo/api/breeds/image/random")
	.then(res => res.json())
  .then(data => {
	  console.log(data)
	  image.src = data.img1
  })
  .catch(err=>console.log(err))
}
**/
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

