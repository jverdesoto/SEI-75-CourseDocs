// const myObj = new Object() // a different way of doing cont myObj = {}

//Keys can be their own types and store different values
//You cannot have 2 of the same keys

// myObj['name'] = "Joe"
// myObj.age = 32 // easier to use . as [] are not used commonly in this way


// console.log(myObj);

// const myObj = {
//     name: 'Joe', // Make sure you seperate each key with a comment
//     surename: 'Freeman',
//     age: 32,
//     student: false
// }

// console.log(myObj);

// const mySinglePost = {
//     title: 'My Post Title',
//     author: 'Rick',
//     publishingDate: '2023-00-07',
//     isDraft: false,
//     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nisi culpa ad, odit et reiciendis consequatur tempora quibusdam unde accusantium quisquam placeat exercitationem impedit earum, repellendus ratione deleniti quos qui?',
//     featuredImage: ['https://img1.com/Image.jpg', 'https://img2.com/Image.jpg','https://img3.com/Image.jpg']
// }

// // If you are using multiple objects within an array they need to all have the same keys

// const allPosts = [
//     {
//         title: 'My Post Title',
//         author: 'Rick',
//         publishingDate: '2023-00-07',
//         isDraft: false,
//         content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nisi culpa ad, odit et reiciendis consequatur tempora quibusdam unde accusantium quisquam placeat exercitationem impedit earum, repellendus ratione deleniti quos qui?',
//         featuredImage: ['https://img1.com/Image.jpg', 'https://img2.com/Image.jpg','https://img3.com/Image.jpg']
//     },
//     {
//         title: 'My second Title',
//         author: 'Rick',
//         publishingDate: '2023-00-07',
//         isDraft: false,
//         content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nisi culpa ad, odit et reiciendis consequatur tempora quibusdam unde accusantium quisquam placeat exercitationem impedit earum, repellendus ratione deleniti quos qui?',
//         featuredImage: ['https://img1.com/Image.jpg', 'https://img2.com/Image.jpg','https://img3.com/Image.jpg']
//     },
//     {
//         title: 'My third Title',
//         author: 'Rick',
//         publishingDate: '2023-00-07',
//         isDraft: false,
//         content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nisi culpa ad, odit et reiciendis consequatur tempora quibusdam unde accusantium quisquam placeat exercitationem impedit earum, repellendus ratione deleniti quos qui?',
//         featuredImage: ['https://img1.com/Image.jpg', 'https://img2.com/Image.jpg','https://img3.com/Image.jpg']
//     }
// ]

// allPosts.map((post) => {
//     console.log(post.title)
// }) 

// for (let key in mySinglePost) {
//     console.log(key);
// }

// console.log(allPosts[0].author);

// TASK

// Create an object called pink floyd
// key called band Members => object -> keys role in band and names
// key called discography => array of objects includes year and name of album
// create function that inputsname of band memeber output the role
// create function input name of album output a year

const pinkFloyd = {
    bandMembers: {
        names: ['Syd Barret', 'David Gilmour', 'Roger Waters', 'Richard Wright', 'Nick Mason'],
        roleInBand: ['lead and rhythm guitars, vocals', 'lead and rhythm guitars, vocals, bass, keyboards, synthesisers', 'bass, vocals, rhythm guitar, synthesisers', 'keyboards, piano, organ, synthesisers, vocals', 'drums, percussion']
    },
    discography: [{
        year: '1967',
        nameOfAlbum: 'The Piper at the Gates of Dawn',
    },
    {
        year: '1968',
        nameOfAlbum: 'A Saucerful of Secrets',
    },
    {
        year: '1969',
        nameOfAlbum: 'More',
    },
    {
        year: '1970',
        nameOfAlbum: 'Atom Heart Mother',
    },
    {
        year: '1971',
        nameOfAlbum: 'Meddle',
    },
    {
        year: '1972',
        nameOfAlbum: 'Obscured by Clouds',
    },
    {
        year: '1973',
        nameOfAlbum: 'The Dark Side of the Moon',
    },
    {
        year: '1975',
        nameOfAlbum: 'Wish You Were Here',
    },
    {
        year: '1977',
        nameOfAlbum: 'Animals',
    },
    {
        year: '1979',
        nameOfAlbum: 'The Wall',
    },
    {
        year: '1983',
        nameOfAlbum: 'The Final Cut',
    },
    {
        year: '1987',
        nameOfAlbum: 'A Momentary Lapse of Reason',
    },
    {
        year: '1994',
        nameOfAlbum: 'The Division Bell',
    },
    {
        year: '2014',
        nameOfAlbum: 'The Endless River',
    }
    ]
}

console.log(getRole('David Gilmour'));
console.log(getRole('Drake'))
// Lead guitar should be output
console.log(findyearofAlbum('More'));
console.log(findyearofAlbum('Divide'))


function getRole(name) {
    const index = pinkFloyd.bandMembers.names.indexOf(name);
    // console.log(pinkFloyd.bandMembers.roleInBand[index])
    if (index !== -1) {
        console.log(pinkFloyd.bandMembers.roleInBand[index]);
    } else {
        console.log(`${name} is not a memeber of this band`);
    }
}

function findyearofAlbum(albumName) {
    const index = pinkFloyd.discography.findIndex(album => album.nameOfAlbum === albumName);
    if (index !== -1) {
        console.log(pinkFloyd.discography[index].year);
    } else {
        console.log(`The Album '${albumName}' was not found`);
    }
}
