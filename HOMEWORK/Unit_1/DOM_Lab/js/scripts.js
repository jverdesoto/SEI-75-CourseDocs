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
    authorName: "Emily Smith",
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
    authorName: "Benjamin Johnson",
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
    authorName: "Emily Smith",
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
    authorName: "Benjamin Johnson",
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
    authorName: "Emily Smith",
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
    authorName: "Benjamin Johnson",
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
    authorName: "Sarah Davis",
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
    authorName: "Sarah Davis",
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
    authorName: "Emily Smith",
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
    authorName: "Sarah Davis",
  },
];

const createAndAppend = (
  parentElement,
  newElementType,
  addedClass,
  addedId
) => {
  const x = document.createElement(newElementType);

  if (addedId) {
    x.setAttribute("id", addedId);
  }
  if (addedClass) {
    x.classList.add(addedClass);
  }

  parentElement.appendChild(x);
  return x;
};

//add structure to html
const app = document.getElementById("app");
const newSection = createAndAppend(app, "section", null, null);

const populatePageWith = (array) => {
  for (const obj of array) {
    if (!obj.isDraft) {
      //add card to section
      const addedCard = createAndAppend(newSection, "div", "card", null);

      //add img to card
      const img = createAndAppend(addedCard, "img", "cover-img", null);
      img.src = obj.cover;

      //add title to card
      const title = createAndAppend(addedCard, "h3", null, "title");
      title.innerText = obj.title;

      //add date to card
      const date = createAndAppend(addedCard, "h4", null, "date");
      date.innerText = "Date created: " + obj.createdAt;

      //add body to card
      const body = createAndAppend(addedCard, "p", null, "body-text");
      body.innerText = obj.body;

      //add final div to card
      const authorDetails = createAndAppend(
        addedCard,
        "div",
        "avatar-author",
        null
      );

      //add avatar to author details div
      const avatar = createAndAppend(authorDetails, "img", null, "avatar");
      avatar.src = obj.authorAvatar;

      //add name to author details div
      const name = createAndAppend(authorDetails, "h3", null, "name");
      name.innerText = obj.authorName;
    }
  }
};

populatePageWith(data);
