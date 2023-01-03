let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

   
    fetch('http://localhost:3000/toys')
    .then((response) => response.json())
    .then((toys) => toys.forEach(toy => renderToys(toy)))
    
  

  function renderToys(toy){
    // console.log("this is the entire collection", toy)
    // toy.forEach(toyObj => {
      // console.log("This is the indivual toy", toyObj.name)
     let card = document.createElement('div')
     card.className = "card"
     let toyCollection = document.getElementById("toy-collection")
     toyCollection.append(card)
     
     let toyName = document.createElement('h2')
        toyName.innerText = toy.name
       card.append(toyName)

     let image = document.createElement('img')
        image.src = toy.image
        image.className = "toy-avatar"
        card.append(image)
   
     let toyLikes = document.createElement('p')
        toyLikes.innerText =  `${toy.likes} Likes`
        card.append(toyLikes)

      let button = document.createElement('button')
      button.className = "button"
      button.innerText = "like"
      card.append(button)
      button.addEventListener("click", e => incrementLikes(toy, toyLikes))
      button.setAttribute("class", "like-btn")
      button.setAttribute("id", `${toy.id}`)
      // button.innerHTML = ``
    // })
  }
})
// fetchData();

function postData(card){
fetch('http://localhost:3000/toys'), {
method : 'POST',
headers:
{
"Content-Type": "application/json",
Accept: "application/json"
},
body: JSON.stringify({
"Content-Type": "application/json",
})
.then(response => response.json())
.then(card => console.log(card))
}
postData('http://localhost:3000/toys/1')
}


function incrementLikes(imageLikes, toyLikes){
let likes = 0



fetch(`http://localhost:3000/toys/${imageLikes.id}`, {
method : 'PATCH',
headers: {
"Content-Type": "application/json",
Accept: "application/json"
},
body: JSON.stringify({'likes': imageLikes.likes + 1})
})
.then(response => response.json())
.then((toy) => {
imageLikes.likes = toy.likes
toyLikes.innerText = toy.likes + " likes"
console.log(toy);
})
}


// create an obj of all the toys
// 








// let button = document.createElement('button')
//         button.className = "button"
//         button.innerText = "like"
//         button.addEventListener("click", function(event){
//            toyLikes.innerText = incrementLikes(data)

//         })
//         card.append(button)
//     })
//   }
// fetchData();

// function postData(card){
//   fetch('http://localhost:3000/toys'), {
//     method : 'POST',
//     headers:
//     {
//       "Content-Type": "application/json",
//       Accept: "application/json"
//     },
//     body: JSON.stringify({
//       "Content-Type": "application/json",
//     })
//     .then(response => response.json())
//     .then(card => console.log(card))
//   }
//   postData('http://localhost:3000/toys/1')
// }

// function incrementLikes(image){
//   let likes = 0
// fetch(`http://localhost:3000/toys/${image.id}`)
//   .then(response => response.json())
//   .then((data) => {
//     likes = data.likes
//   })
//   let newLikes = likes + 1

// fetch('http://localhost:3000/toys/1'), {
// method : 'PATCH',
// headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json"
// },
// body: JSON.stringify({
// "likes" : newLikes
// })
// }
// let likesText = `${newLikes} likes`
// return likesText
// };
