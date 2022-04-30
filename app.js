<<<<<<< HEAD
const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

// const animalArray = ['dog', 'cat', 'pig'];

// animalArray.push('cow');

// const personObj = {
// name: 'Lernantino',
// age: 99
// };

// personObj.age = 100;
// personObj.occupation = 'Developer';

const printProfileData = profileDataArr => {
    
    //This...

    for (let i = 0; i < profileDataArr.length; i++) {
      console.log(profileDataArr[i]);
    }

    console.log('================');

    //Is the same as this...

    profileDataArr.forEach((profileItem) => {

        console.log(profileItem)

    });
  };

printProfileData(profileDataArgs);
=======
const fs = require('fs');
const generatePage = require('./src/page-template');

const profileDataArgs = process.argv.slice(2);

console.log(profileDataArgs);

const [name, github] = profileDataArgs;

console.log(name, github);

const pageHTML = generatePage(name, github);

fs.writeFile('./index.html', pageHTML, err => {
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output!');
});
>>>>>>> b1d8e3a (9-2 snapshot)
