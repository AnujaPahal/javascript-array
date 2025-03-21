let moviesName = ["Dangal" ,  "Bahubali 2 : The Conclusion" , "Pushpa: The Rule - Part 2", "RRR"];
let list = document.querySelector(".list");
function displaymovies() {
  moviesName.forEach(function (i) {
    list.innerHTML += `<li>${i} </li>`;
  });
}
displaymovies();

console.log(displaymovies)

function addnew() {
    let newMovie = document.querySelector(".add-btn input").value;
    if (newMovie) {
      moviesName.push(newMovie);
      list.innerHTML = "";
      displaymovies();
      document.querySelector(".add-btn input").value = "";
    } else {
      alert("Please enter a movie name");
    }
  }
  