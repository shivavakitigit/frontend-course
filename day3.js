// // Movie data array
// let movieData = [
//     {
//         title: "Fighter",
//         language: "Hindi",
//         format: "2D, IMAX",
//         rating: "8.5/10",
//         imageUrl: "https://m.media-amazon.com/images/M/MV5BZjI2NGQxMGMtYzQ5Mi00NTBjLWJhYzktMjE2ZDkxOTU3YWZjXkEyXkFqcGc@._V1_QL75_UX1640_.jpg",
//         genres: ["Action", "Thriller"],
//         certificate: "UA"
//     },
//     {
//         title: "Hanuman",
//         language: "Telugu",
//         format: "2D, 3D",
//         rating: "9.0/10",
//         imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end/et00019066-ndsyelfgrt-portrait.jpg",
//         genres: ["Action", "Fantasy"],
//         certificate: "UA"
//     },
//     {
//         title: "Captain Miller",
//         language: "Tamil",
//         format: "2D",
//         rating: "8.8/10",
//         imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end/et00012104-dlbbxmwbtr-portrait.jpg",
//         genres: ["Action", "Period"],
//         certificate: "UA"
//     }
// ];

// // Function to create movie card HTML
// function createCard(movie) {
//     return `
//         <div class="col-md-4 mb-4">
//             <div class="movie-card custom-card">
//                 <div class="movie-poster">
//                     <img src="${movie.imageUrl}" alt="${movie.title}" class="card-img-top">
//                     <div class="certificate">${movie.certificate}</div>
//                 </div>
//                 <div class="card-body">
//                     <h5 class="movie-title">${movie.title}</h5>
//                     <div class="movie-info">
//                         <span class="rating">
//                             <i class="fas fa-star"></i> ${movie.rating}
//                         </span>
//                         <span class="format">${movie.format}</span>
//                     </div>
//                     <div class="language-genres">
//                         <span class="language">${movie.language}</span>
//                         <span class="genres">${movie.genres.join(", ")}</span>
//                     </div>
//                     <button class="book-button">Book tickets</button>
//                 </div>
//             </div>
//         </div>
//     `;
// }

// // Function to render all cards
// function renderCards() {
//     const container = document.getElementById('cardContainer');
//     container.innerHTML = movieData.map(movie => createCard(movie)).join('');
// }

// // Function to add new movie
// function addNewMovie() {
//     const form = document.getElementById('addMovieForm');
//     const formData = new FormData(form);

//     // Get the image file
//     const posterFile = formData.get('poster');

//     // Create URL for the uploaded image
//     const imageUrl = URL.createObjectURL(posterFile);

//     // Create new movie object
//     const newMovie = {
//         title: formData.get('title'),
//         language: formData.get('language'),
//         format: formData.get('format'),
//         rating: formData.get('rating'),
//         imageUrl: imageUrl,
//         genres: formData.get('genres').split(',').map(genre => genre.trim()),
//         certificate: formData.get('certificate')
//     };

//     // Add to movie data array
//     movieData.push(newMovie);

//     // Re-render cards
//     renderCards();

//     // Close modal
//     const modal = bootstrap.Modal.getInstance(document.getElementById('addMovieModal'));
//     modal.hide();

//     // Reset form
//     form.reset();
// }

// // Render cards when page loads
// window.onload = renderCards;

// productList.map(productList)=>{
//     return
// }

// function map(productList){
// for (let index = 0; index < productList.length; index++) {
//     const element = productList[index];
//     return element
// }
// }

// // pass by value and pass by reference

// // pass by value primitives
// // pass by reference non primitives

// const a = 20
// function passByValue(rec){
// console.log(rec)
// }

// console.log(passByValue(a))

// const a = {
//   age: 20,
//   address: "hyd",
//   location: {
//     name: "jublihills",
//   },
// };
// function passByRef(rec) {
//   const copy = { ...rec };

//   copy.location.name = "ameerpet";
//   console.log(copy,"inside copy referevalue");
// }

// console.log(passByRef(a));

// console.log(a, "outside ");

// const b = 50

// const passByRef = (receive) => {
//   receive = "saiiiii";
//   console.log(receive);
// };

// console.log(b, "immadiate after funtion call");
// passByRef(b);

// console.log(b, "after  funtion call");

const loca = "rajamundry";
const location2 = "hyd";
const loc3 = "somehwere";

function curryingExp(loca, location2, loc3) {
  console.log(loca, location2);
   function get2() {
    return loca + location2;
  };
  function get3() {
    return loca + location2 + loc3;
  }

  return get2
}

curryingExp(loca)(location2)(loc3);



// passByref


// redux

// globalState

// const initialState = {
//     name :"sharwani"
// }


// if(type==="login"){
//     ...state,
//     initialState.name = "shiva"
// }