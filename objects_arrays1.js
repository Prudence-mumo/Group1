//Question 1 
const movies = [
  { title: "The Lion King",  year: 1994, rating: 8.5, watched: true  },
  { title: "Inception",      year: 2010, rating: 8.8, watched: true  },
  { title: "Black Panther",  year: 2018, rating: 7.3, watched: false },
  { title: "Up",             year: 2009, rating: 8.2, watched: true  },
  { title: "Interstellar",   year: 2014, rating: 8.6, watched: false },
];

//Question 1
for (let i=0;i< movies.length;i++){

console.log(movies[i].title);
}

//Question 2
for (let i = 0; i < movies.length; i++) {
  if (movies[i].year > 2010) {
    console.log(movies[i].title);
  }
}


//Question 3
let counter = 0;

for (let i = 0; i < movies.length; i++) {
  if (movies[i].watched === true) {
    counter++;
  }
}

console.log(counter);

//Question 4
let highestRated = movies[0];

for (let i = 0; i < movies.length; i++) {
  if (movies[i].rating > highestRated.rating) {
    highestRated = movies[i];
  }
}

console.log(highestRated.title);

//Question 5

let result = "";

for (let i = 0; i < movies.length; i++) {
  result += movies[i].title + " (" + movies[i].year + ")";
}

console.log(result);
