const mySinglePost = {
    title: 'My Post Title',
    author: 'Rick',
    publishingDate: '2023-09-07',
    isDraft: false,
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime distinctio fuga, reiciendis dolore ducimus optio facilis, nostrum fugiat et repellendus voluptate quibusdam doloribus architecto quasi eveniet aliquid nam, aspernatur qui.',
    featuredImage: ['https://img1.com/img.jpg', 'https://img1.com/img-xl.jpg', 'https://img1.com/img-thumb.jpg']
}

const allPosts = [
    {
        title: 'My Post Title 1',
        author: 'Rick',
        publishingDate: '2023-09-07',
        isDraft: false,
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime distinctio fuga, reiciendis dolore ducimus optio facilis, nostrum fugiat et repellendus voluptate quibusdam doloribus architecto quasi eveniet aliquid nam, aspernatur qui.',
        featuredImage: ['https://img1.com/img.jpg', 'https://img1.com/img-xl.jpg', 'https://img1.com/img-thumb.jpg']
    },
    {
        title: 'My Post Title 2',
        author: 'Rick',
        publishingDate: '2023-09-07',
        isDraft: true,
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime distinctio fuga, reiciendis dolore ducimus optio facilis, nostrum fugiat et repellendus voluptate quibusdam doloribus architecto quasi eveniet aliquid nam, aspernatur qui.',
        featuredImage: ['https://img1.com/img.jpg', 'https://img1.com/img-xl.jpg', 'https://img1.com/img-thumb.jpg']
    },
    {
        title: 'My Post Title 3',
        author: 'Rick',
        publishingDate: '2023-09-07',
        isDraft: false,
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime distinctio fuga, reiciendis dolore ducimus optio facilis, nostrum fugiat et repellendus voluptate quibusdam doloribus architecto quasi eveniet aliquid nam, aspernatur qui.',
        featuredImage: ['https://img1.com/img.jpg', 'https://img1.com/img-xl.jpg', 'https://img1.com/img-thumb.jpg']
    },
    {
        title: 'My Post Title 4',
        author: 'Rick',
        publishingDate: '2023-09-07',
        isDraft: false,
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime distinctio fuga, reiciendis dolore ducimus optio facilis, nostrum fugiat et repellendus voluptate quibusdam doloribus architecto quasi eveniet aliquid nam, aspernatur qui.',
        featuredImage: ['https://img1.com/img.jpg', 'https://img1.com/img-xl.jpg', 'https://img1.com/img-thumb.jpg']
    },
    {
        title: 'My Post Title 5',
        author: 'Rick',
        publishingDate: '2023-09-07',
        isDraft: false,
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime distinctio fuga, reiciendis dolore ducimus optio facilis, nostrum fugiat et repellendus voluptate quibusdam doloribus architecto quasi eveniet aliquid nam, aspernatur qui.',
        featuredImage: ['https://img1.com/img.jpg', 'https://img1.com/img-xl.jpg', 'https://img1.com/img-thumb.jpg']
    },
    {
        title: 'My Post Title 6',
        author: 'Rick',
        publishingDate: '2023-09-07',
        isDraft: false,
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime distinctio fuga, reiciendis dolore ducimus optio facilis, nostrum fugiat et repellendus voluptate quibusdam doloribus architecto quasi eveniet aliquid nam, aspernatur qui.',
        featuredImage: ['https://img1.com/img.jpg', 'https://img1.com/img-xl.jpg', 'https://img1.com/img-thumb.jpg']
    }
]

allPosts.map((post) => {
    console.log(post.title);
})

for (let key in mySinglePost) {
    console.log(key);
}

console.log(allPosts[0].author);

// Create an object called PinkFloyd
// key called band Members => object -> keys role in band and Names
// key called dicography => array of objects include the year and the name of the album
// create function that inputs a name of band member output the role
// create function input name of album output a year

const PinkFloyd = {
    members: [
        {
            name: 'Syd Barrett',
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
    discography: [
        {
            name: 'The Piper at the Gates of Dawn',
            year: 1967
        },
        {
            name: 'A Saucerful of Secrets',
            year: 1968
        },
        {
            name: 'More',
            year: 1969
        },
        {
            name: 'Ummagumma',
            year: 1969
        },
        {
            name: 'Atom Heart Mother',
            year: 1970
        },
        {
            name: 'Meddle',
            year: 1971
        },
        {
            name: 'Obscured by Clouds',
            year: 1972
        },
        {
            name: 'The Dark Side of the Moon',
            year: 1973
        },
        {
            name: 'Wish You Were Here',
            year: 1975
        },
        {
            name: 'Animals',
            year: 1977
        },
        {
            name: 'The Wall',
            year: 1979
        },
        {
            name: 'The Final Cut',
            year: 1983
        },
        {
            name: 'A Momentary Lapse of Reason',
            year: 1987
        },
        {
            name: 'The Division Bell',
            year: 1994
        },
        {
            name: 'The Endless River',
            year: 2014
        }
    ]
}

function findMember(name){
    let role
    PinkFloyd.members.map((member)=>{
        if(name === member.name)
            role = member.role
    })
    return role
}

function findYearOfAlbum(name){
    let year
    PinkFloyd.discography.map((album) => {
        if(name === album.name)
            year = album.year
    })
    return year
}

console.log(findMember('David Gilmour'));
// Lead guitar
console.log(findYearOfAlbum('The Endless River'));
// 1969