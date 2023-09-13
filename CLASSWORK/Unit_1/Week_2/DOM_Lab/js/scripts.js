const data = [
    {
        body: "Fugit itaque ipsam perferendis sequi harum.",
        category: "Unknown generator",
        cover: "https://picsum.photos/seed/2327/1920/1080",
        createdAt: "2015-05-18T20:48:08Z",
        id: 1,
        isDraft: false,
        title: "dolorum",
        views: 223,
        authorAvatar: "https://i.pravatar.cc/200?img=1",
        authorName: "Emily Smith"
    },
    {
        body: "Eos culpa et voluptatem.",
        category: "unknown generator",
        cover: "https://picsum.photos/seed/0316/1920/1080",
        createdAt: "2018-08-15T19:55:08Z",
        id: 2,
        isDraft: false,
        title: "perspiciatis rerum",
        views: 403,
        authorAvatar: "https://i.pravatar.cc/200?img=3",
        authorName: "Benjamin Johnson"
    },
    {
        body: "Illo saepe consequuntur a libero deserunt a eos, perferendis sint, accusantium qui dolorum sed at.",
        category: "unknown generator",
        cover: "https://picsum.photos/seed/4326/1920/1080",
        createdAt: "2016-06-12T00:16:07Z",
        id: 3,
        isDraft: false,
        title: "molestiae odio nisi",
        views: 994,
        authorAvatar: "https://i.pravatar.cc/200?img=5",
        authorName: "Emily Smith"
    },
    {
        body: "Unde veniam.",
        category: "unknown generator",
        cover: "https://picsum.photos/seed/4729/1920/1080",
        createdAt: "2010-06-19T16:41:51Z",
        id: 4,
        isDraft: false,
        title: "cumque est",
        views: 178,
        authorAvatar: "https://i.pravatar.cc/200?img=6",
        authorName: "Benjamin Johnson"
    },
    {
        body: "Debitis et neque facilis magnam.",
        category: "unknown generator",
        cover: "https://picsum.photos/seed/8392/1920/1080",
        createdAt: "2016-04-19T19:44:19Z",
        id: 5,
        isDraft: false,
        title: "ad impedit sunt",
        views: 733,
        authorAvatar: "https://i.pravatar.cc/200?img=7",
        authorName: "Emily Smith"
    },
    {
        body: "Error nisi deserunt consectetur ea a.",
        category: "unknown generator",
        cover: "https://picsum.photos/seed/9839/1920/1080",
        createdAt: "2012-11-14T20:24:23Z",
        id: 6,
        isDraft: false,
        title: "molestias",
        views: 151,
        authorAvatar: "https://i.pravatar.cc/200?img=8",
        authorName: "Benjamin Johnson"
    },
    {
        body: "Mollitia doloribus a reprehenderit vitae, incidunt incidunt.",
        category: "unknown generator",
        cover: "https://picsum.photos/seed/2230/1920/1080",
        createdAt: "2015-10-05T17:56:52Z",
        id: 7,
        isDraft: false,
        title: "dolore",
        views: 129,
        authorAvatar: "https://i.pravatar.cc/200?img=39",
        authorName: "Sarah Davis"
    },
    {
        body: "Reprehenderit et, asperiores sed reprehenderit nisi, architecto a reprehenderit ipsa.",
        category: "unknown generator",
        cover: "https://picsum.photos/seed/9417/1920/1080",
        createdAt: "2012-01-16T01:37:42Z",
        id: 8,
        isDraft: false,
        title: "labore quae nostrum",
        views: 757,
        authorAvatar: "https://i.pravatar.cc/200?img=48",
        authorName: "Sarah Davis"
    },
    {
        body: "Perspiciatis minima sit.",
        category: "unknown generator",
        cover: "https://picsum.photos/seed/8842/1920/1080",
        createdAt: "2013-06-23T14:40:58Z",
        id: 9,
        isDraft: false,
        title: "inventore",
        views: 448,
        authorAvatar: "https://i.pravatar.cc/200?img=55",
        authorName: "Emily Smith"
    },
    {
        body: "Dolore perferendis deleniti ab, in molestiae quia, autem perspiciatis aliquam corrupti.",
        category: "unknown generator",
        cover: "https://picsum.photos/seed/5668/1920/1080",
        createdAt: "2017-09-25T10:48:38Z",
        id: 10,
        isDraft: false,
        title: "a vel laborum non a",
        views: 719,
        authorAvatar: "https://i.pravatar.cc/200?img=69",
        authorName: "Sarah Davis"
    }
]

<<<<<<< HEAD

const app = document.getElementById('app')

//header
const header = document.createElement('header')
header.classList.add('header')
app.appendChild(header)


const title = document.createElement('h1')
title.innerHTML = 'Blog'
header.appendChild(title)
title.classList.add('title')

const subTitle = document.createElement('p')
subTitle.innerHTML = 'Gravida arcu ac tortor dignissim convallis aenean et tortor at. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse. '
header.appendChild(subTitle)

//card container
const cardContainer = document.createElement('main')
cardContainer.classList.add('card-container-main')
app.appendChild(cardContainer)


=======
>>>>>>> 085cebf (classwork, DOM manipulation)
//title
const titleContainer = document.getElementById('app')
const title = document.createElement('h1')
title.innerHTML = 'Blog'
titleContainer.appendChild(title)
title.classList.add('title')

function cardCreation(array) {
    for (let i = 0; i < array.length; i++) {

        //new card
        const card = document.createElement('article')
        card.classList.add('card')
        card.setAttribute('id', array[i].id)
<<<<<<< HEAD

        cardContainer.appendChild(card)

=======
>>>>>>> 085cebf (classwork, DOM manipulation)
        document.getElementById('app').appendChild(card)

        //card image
        const cardImage = document.createElement('img')
        cardImage.setAttribute('src', array[i].cover)
        cardImage.classList.add('card-img')
        card.appendChild(cardImage)


        //card title
        const cardTitle = document.createElement('h2')
        cardTitle.innerHTML = array[i].title
        cardTitle.classList.add('card-title')
        card.appendChild(cardTitle)


        //card date
        const cardDate = document.createElement('p')
        cardDate.innerHTML = `Created on: ${array[i].createdAt}`
        cardDate.classList.add('card-date')
        card.appendChild(cardDate)

        //card content
        const cardContent = document.createElement('p')
        cardContent.innerHTML = array[i].body
        cardContent.classList.add('card-content')
        card.appendChild(cardContent)

<<<<<<< HEAD
        //div for author
        const authorContainer = document.createElement('div')
        authorContainer.classList.add('author-container')
        card.appendChild(authorContainer)

=======
>>>>>>> 085cebf (classwork, DOM manipulation)
        //card author pic
        const authorPic = document.createElement('img')
        authorPic.setAttribute('src', array[i].authorAvatar)
        authorPic.classList.add('author-pic')
<<<<<<< HEAD
        authorContainer.appendChild(authorPic)
=======
>>>>>>> 085cebf (classwork, DOM manipulation)
        card.appendChild(authorPic)

        //card author name
        const authorName = document.createElement('p')
        authorName.innerHTML = array[i].authorName
        authorName.classList.add('author-name')
<<<<<<< HEAD
        authorContainer.appendChild(authorName)
=======
>>>>>>> 085cebf (classwork, DOM manipulation)
        card.appendChild(authorName)

    }
}

cardCreation(data)


