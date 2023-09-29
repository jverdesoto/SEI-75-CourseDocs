console.log("DOM Page");

const data = [
	{
		body: "Fugit itaque ipsam perferendis sequi harum.",
		category: "Unknown generator",
		cover: "https://picsum.photos/seed/2327/1920/1080",
		createdAt: "2015-05-18T20:48:08Z",
		id: 1,
		isDraft: true,
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
		isDraft: true,
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
];

console.log(data[0].title);

// const title = document.createElement('h1');
// add class property to selector
// title.classList.add('myClass');
// title.innerHTML = data[0].title;

// set body properties general styling 
const bodyView = document.getElementsByTagName("body")[0];
bodyView.style.display = "flex";
bodyView.style.flexFlow = "column wrap";
bodyView.style.alignItems = "center";
bodyView.style.justifyItems = "center";
bodyView.style.gap = "10px";
bodyView.style.fontFamily = "Helvetica";
bodyView.height = "100vh";

// set app div properties
const mainDiv = document.getElementById('app');
mainDiv.style.backgroundColor = 'darkgray';
mainDiv.height = "70vh";
mainDiv.style.display = "flex";
mainDiv.style.flexFlow = "row wrap";
mainDiv.style.gap = "10px";
mainDiv.style.padding = "10px"; 

// create card view
function createCradView(arry){
    arry.map((card) => {
        if(card.isDraft)
        {
            const cardView = document.createElement('div');
            cardView.width = 'auto';
            cardView.height = 'auto';
			cardView.style.display = "flex";
			cardView.style.flexFlow = "column";
			cardView.style.color = "white";
			cardView.style.gap = "3px";

            // create cover image view
            const coverImageView = document.createElement('img');
            coverImageView.src = card.cover;
            coverImageView.width = "500";
            coverImageView.height = "300";
            // append cover image view to card
            cardView.append(coverImageView);
            
            //create title view
            const titleView = document.createElement('div');
            titleView.innerHTML = card.title;
			titleView.style.fontSize = "1.5rem";
			titleView.style.fontWeight = "bold";
			
           
            // append title view to card
            cardView.append(titleView);

            //create date view
            const dateView = document.createElement('div');
            const dateStr = `Create At : ${new Date(card.createdAt).toLocaleDateString()}`;
			console.log(dateStr);
            dateView.innerHTML = dateStr;
            // append date view to card
            cardView.append(dateView);

			 //create content view
			 const contentView = document.createElement('div');
			 contentView.style.fontSize = "0.9rem";
			 contentView.innerHTML = card.body;
			
			 // append title view to card
			 cardView.append(contentView);
 

            // create author view component
            const authorView = document.createElement('div');
            authorView.style.display = "flex";
            authorView.style.flex = "row";
			authorView.style.alignItems = "center";
			authorView.style.justifyItems = "space-evenly";

             // create author avatar
             const authorAvatarImageView = document.createElement('img');
             authorAvatarImageView.src = card.authorAvatar;
             authorAvatarImageView.width = "30";
             authorAvatarImageView.height = "30";
			 authorAvatarImageView.style.margin = "5px";
			 authorAvatarImageView.style.borderWidth = "1px";
			 authorAvatarImageView.style.borderStyle = "solid";
			 authorAvatarImageView.style.borderColor = "white";
			 authorAvatarImageView.style.borderRadius = "50%";
             // append author avatar to author view component
             authorView.append(authorAvatarImageView);

            // create author Name view
            const authorNameView = document.createElement('div');
            authorNameView.innerHTML = card.authorName;
            
            // append author name view to author view component
            authorView.append(authorNameView);

            // append author view to card
            cardView.append(authorView);

            // append cord view to html 
            mainDiv.append(cardView);
        }
    });
    // return cards;
}

createCradView(data);
