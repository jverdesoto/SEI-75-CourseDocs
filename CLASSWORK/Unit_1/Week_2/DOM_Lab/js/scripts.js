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
		isDraft: true,
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
		isDraft: true,
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
		isDraft: true,
		title: "a vel laborum non a",
		views: 719,
        authorAvatar: "https://i.pravatar.cc/200?img=69",
        authorName: "Sarah Davis"
	}
]

//set up page HTML structure
const header = document.createElement("header")
document.getElementById("app").appendChild(header)

const title = document.createElement("h1")
title.innerHTML = "Blog"
document.querySelector('header').appendChild(title)

const main = document.createElement("main")
document.getElementById("app").appendChild(main)

const galleryContainer = document.createElement("div")
galleryContainer.setAttribute("id", "gallery-container")
document.querySelector('main').appendChild(galleryContainer)

//Generate cards
for (i = 0; i < 6; i++) {
    const cardDiv = document.createElement("div")
    cardDiv.setAttribute("id", `card${i + 1}`)
    cardDiv.classList.add("card")

    const imageDiv = document.createElement("div")
    imageDiv.classList.add("card-image")

    const contentDiv = document.createElement("div")
    contentDiv.classList.add("content")

    const postTitle = document.createElement("h2")
    postTitle.classList.add("post-title")

    const postDate = document.createElement("h4")
    postDate.classList.add("post-date")

    const postBody = document.createElement("p")
    postBody.classList.add("post-body")

    const authorDiv = document.createElement("div")
    authorDiv.classList.add("author-info")

    const authorAvatarDiv = document.createElement("div")
    authorAvatarDiv.classList.add("author-avatar")

    const authorNameDiv = document.createElement("div")
    authorNameDiv.classList.add("author-name")

    document.getElementById('gallery-container').appendChild(cardDiv)
    document.getElementById(`card${i + 1}`).append(imageDiv, contentDiv, authorDiv)
    document.querySelector(`#card${i + 1}>.content`).append(postTitle, postDate, postBody)
    document.querySelector(`#card${i + 1}>.author-info`).append(authorAvatarDiv, authorNameDiv)
}

//Filter out draft posts
const publishPosts = data.filter((post) => (!post.isDraft))
let cardCount = 1;

const populateCard = (post, cardId) => {
    // Select card elements
    const currentCard = document.getElementById(cardId)
    const postImage = currentCard.querySelector('.card-image')
    const postTitle = currentCard.querySelector('.post-title')
    const postDate  = currentCard.querySelector('.post-date')
    const postBody = currentCard.querySelector('.post-body')
    const postAuthorAvatar = currentCard.querySelector('.author-avatar')
    const postAuthor = currentCard.querySelector('.author-name')

    // Add post content to card elements
    postImage.innerHTML = `<img src="${post.cover}">`
    postTitle.innerHTML = post.title
    postDate.innerHTML = post.createdAt
    postBody.innerHTML = post.body
    postAuthorAvatar.innerHTML = `<img src="${post.authorAvatar}">`
    postAuthor.innerHTML = post.authorName
}

for (post of publishPosts) {
    populateCard(post, `card${cardCount}`)
    cardCount++
    if (cardCount > 6) break
}



