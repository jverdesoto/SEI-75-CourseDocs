const data = 
[
	{
		body: "Fugit itaque ipsam perferendis sequi harum.",
		category: "Unknown generator",
		cover: "https://picsum.photos/seed/2327/1920/1080",
		createdA: "2015-05-18T20:48:08Z",
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
		createdA: "2018-08-15T19:55:08Z",
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
		createdA: "2016-06-12T00:16:07Z",
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
		createdA: "2010-06-19T16:41:51Z",
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
		createdA: "2016-04-19T19:44:19Z",
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
		createdA: "2012-11-14T20:24:23Z",
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
		createdA: "2015-10-05T17:56:52Z",
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
		createdA: "2012-01-16T01:37:42Z",
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
		createdA: "2013-06-23T14:40:58Z",
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
		createdA: "2017-09-25T10:48:38Z",
		id: 10,
		isDraft: false,
		title: "a vel laborum non a",
		views: 719,
        authorAvatar: "https://i.pravatar.cc/200?img=69",
        authorName: "Sarah Davis"
	}
]

// const title = document.createElement('h1')

// title.innerHTML = data[0].title

// title.classList.add('myClass') // this is the method for creating a class property to an element you've created.

// document.getElementById('app').appendChild(title)
function capitalizeFirstLetter(string) {
    return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

const mainDiv = document.getElementById("app");

function displayData(data) {
  data.forEach((item, index) => {
    // Create a container div for each book
    const book = document.createElement("div");
    book.className = "book";

    // Create an image element for the cover
    const coverImage = document.createElement("img");
    coverImage.src = item.cover;
    coverImage.alt = `Cover Image ${index}`;

    // Create a heading for the title and capitalise the first letter of each word
    const title = document.createElement("h2");
    title.innerText = capitalizeFirstLetter(item.title);

    // Create para for date created
    const date = document.createElement('p');
    const fullDate = new Date(item.createdA);
    const year = fullDate.getFullYear();
    date.innerText = `Release Date: ${year}`;

    // Create a para for the body/content
    const body = document.createElement("p");
    body.innerText = item.body;

    // Create an author div to hold author information
    const authorDiv = document.createElement("div");
    authorDiv.className = "author";

    // Create an author image for the avatar
    const authorAvatar = document.createElement("img");
    authorAvatar.src = item.authorAvatar;
    authorAvatar.alt = `Author Avatar ${index}`;
    authorAvatar.classList.add("authorImg"); 

    // Create a para for the author name
    const authorName = document.createElement("p");
    authorName.innerText = `Author: ${item.authorName}`;

    // Append elements to the book div
    book.appendChild(coverImage);
    book.appendChild(title);
    book.appendChild(body);
    book.appendChild(date);
    
    // Append author elements to the author div
    authorDiv.appendChild(authorAvatar);
    authorDiv.appendChild(authorName);
    
    // Append the author div to the book div
    book.appendChild(authorDiv);

    // Append the book div to the main div
    mainDiv.appendChild(book);

  });
}

// call the function
displayData(data);
