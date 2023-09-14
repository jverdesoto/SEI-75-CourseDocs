const myObj = {
    name: 'Joe',
    surname: 'Freeman',
    age: 32,
    student: false,
};

myObj.shoeSize = 8.5;

// console.log(myObj.shoeSize);

// Create an object called PinkFloyd
// key called band Members => object -> keys role in band and Names
// key called dicography => array of objects include the year and the name of the album
// create function that inputs a name of band member output the role
// create function input name of album output a year
// example console.log(findMember('David Guilmore'));
// Lead guitar
// example console.log(findYearOfAlbum('More'));
// 1969

let pinkFloyd = {
    bandMembers: [
            { name: 'David Gilmour', role: 'Lead Guitar' },
            { name: 'Roger Waters', role: 'Bass Guitar' },
            { name: 'Syd Barrett', role: 'Guitar' },
            { name: 'Richard Wright', role: 'Keyboard' }
          ],
    discography: [
        {albumTitle: 'The Piper at the Gates of Dawn',year: 1967},
        {albumTitle: 'A Saucerful of Secrets',year: 1968},
        {albumTitle: 'More',year: 1969},
    ]
};

function findRole (cheese) {
    let allBandMembers = pinkFloyd.bandMembers.map(member => {
        return member.name;
    })
    let index = allBandMembers.indexOf(cheese);
    //console.log(pinkFloyd.bandMembers[index]);
   //console.log(index);
   return pinkFloyd.bandMembers[index].role;
};

console.log(findRole("David Gilmour"));