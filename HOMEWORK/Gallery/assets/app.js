// const myObj = new Object();

// myObj['name'] = "Joe";
// myObj.age = 32;

// console.log(myObj);

// const myObj = {
//     name: 'Joe',
//     surname: 'Freeman',
//     age: 32,
//     student: false
// };
// console.log(myObj);

// const mySinglePost= {
//     title: 'My Post Title 1',
//     author: 'Rick',
//     publishingDate: '2023-09-07',
//     isDraft: false,
//     content: 'blahblahblah',
//     featuredImage: ['http://img1.com/img.jpg', 'http://img1.com/img-xl.jpg', 'http://img1.com/img-thumb.jpg']
// }
// console.log(myBlog);

// const allPost = [
//     {
//         title: 'My Post Title 2',
//         author: 'Rick',
//         publishingDate: '2023-09-07',
//         isDraft: false,
//         content: 'blahblahblah',
//         featuredImage: ['http://img1.com/img.jpg', 'http://img1.com/img-xl.jpg', 'http://img1.com/img-thumb.jpg']
//     },
//     {
//         title: 'My Post Title 3',
//         author: 'Rick',
//         publishingDate: '2023-09-07',
//         isDraft: false,
//         content: 'blahblahblah',
//         featuredImage: ['http://img1.com/img.jpg', 'http://img1.com/img-xl.jpg', 'http://img1.com/img-thumb.jpg']
//     },
//     {
//         title: 'My Post Title 4',
//         author: 'Rick',
//         publishingDate: '2023-09-07',
//         isDraft: false,
//         content: 'blahblahblah',
//         featuredImage: ['http://img1.com/img.jpg', 'http://img1.com/img-xl.jpg', 'http://img1.com/img-thumb.jpg']
//     },

// ]

// allPost.map((post) => {
//     console.log(post.title);
// })

// for (let key in mySinglePost) {
//     console.log(key);
// }

// create an object called PinkFloyd
// key called BandMemebers => object -> roleinband value Name
// key discography => array of objects which will include the year and the name of the album
// create a function that will input a name of the band member and it will output the role
// create a function tha inputs a name of an album and outputs the year





const pinkFloyd = {
    bandMembers : [
        {
            name: 'Syd Barret',
            role: 'lead and rhythm guitars, vocals'
        },
        {
            name: 'David Gilmour',
            role: 'lead and rhythm guitars, vocals, bass, keyboards, synthesisers'
        },
        {
            name: 'Roger Waters',
            role: 'bass, vocals, rhythm guitar, synthesisers'
        },
        {
            name: 'Richard Wright',
            role: 'keyboards, piano, organ, synthesisers, vocals'
        },
        {
            name: 'Nick Mason',
            role: 'drums, percussion'
        }
    ],


   discography : [
        {
            title:'The Piper at the Gates of Dawn',
            year: 1967
        },
        {
            title: 'A Saucerful of Secrets',
            year: 1968
        },
        {
            title: 'More',
            year: 1969
        },
        {
            title: 'Ummagumma',
            year: 1969
        },
        {
            title: 'Atom Heart Mother',
            year: 1970
        },
        {
            title: 'Meddle',
            year: 1971
        },
        {
            title: 'Obscured by Clouds',
            year: 1972
        },
        {
            title: 'The Dark Side of the Moon',
            year: 1973
        },
        {
            title: 'Wish You Were Here',
            year: 1975
        },
        {
            title: 'Animals',
            year: 1977
        },
        {
            title: 'The Wall',
            year: 1979
        },
        {
            title:'The Final Cut',
            year: 1987
        },
        {
            title: 'A Momentary Lapse of Reason',
            year: 1987
        },
        {
            title: 'The Division Bell',
            year: 1994
        },
        {
            title: 'The Endless River',
            year: 2014
        },
   ]

}


function findMember(memberName) {
    let role = 'lol :) not a member, you are the worst fan!';
    pinkFloyd.bandMembers.forEach((memberInfo) => {
        if (memberName === memberInfo.name)
        role = memberInfo.role;
    })
    return role;
}    

function findYearOfAlbum(albumName) {
    let year = 'omg do you even like Pink Floyd?! that/s not an album';
    pinkFloyd.discography.forEach((albumInfo) => {
        if (albumName === albumInfo.title)
        year = albumInfo.year;
    })
    return year;
}    

console.log(findMember('Syd Barret'));
console.log(findMember('Britney Spears'));
console.log(findYearOfAlbum('The Piper at the Gates of Dawn'));
console.log(findYearOfAlbum('The White Album'));

