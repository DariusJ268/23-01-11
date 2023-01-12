// 1 užduotis

let actorName = 'Ryan';
let actorSurname = 'Reynolds';

let stringName = '';

stringName += actorName + ' ';
stringName += actorSurname;

console.log(stringName);

if (actorName.length > actorSurname.length) {
    console.log(actorSurname);
} else if (actorName.length == actorSurname.length) {
    console.log(stringName);
} else {
    console.log(actorName);
}

// 2 užduotis

console.log(actorName.toUpperCase() + ' ' + actorSurname.toLowerCase());

// 3 užduotis

let initials = (actorName.charAt(0) + ' ' + actorSurname.charAt(0));
console.log(initials);

// 4 užduotis

let lastLetters = (actorName.substring(actorName.length - 3) + ' ' + actorSurname.substring(actorSurname.length -3));
console.log(lastLetters);

// 5 užduotis

let movie = 'An American in Paris';

// ilgesnis sprendimas
// let partial = (movie.replaceAll('a', '*'));
// let censorship = (partial.replaceAll('A', '*'));
// console.log(censorship);

let shorter = (movie.replace(/[a]/ig, '*'));
console.log(shorter);

// 6 užduotis

let name1 = "An American in Paris";
let name2 = "Breakfast at Tiffany's";
let name3 = "2001: A Space Odyssey";
let name4 = "It's a Wonderful Life";

let short1 = (name1.replace(/[aeiouy]/ig, ''))
console.log(short1);
let short2 = (name2.replace(/[aeiouy]/ig, ''))
console.log(short2);
let short3 = (name3.replace(/[aeiouy]/ig, ''))
console.log(short3);
let short4 = (name4.replace(/[aeiouy]/ig, ''))
console.log(short4);

// 7 užduotis

let fullName = "Star Wars: Episode "+ " ".repeat( Math.ceil(Math.random() * 10))+(Math.ceil (Math.random() * 7)+1) + " - A New Hope";

console.log(fullName);

let replace = (fullName.replace(/[a-z, :, -]/ig, ''));

console.log(replace);

// 8 užduotis

let origin = "Don't Be a Menace to South Central While Drinking Your Juice in the Hood";

let splitOrigin = (origin.split(' ').length);

console.log(splitOrigin);

