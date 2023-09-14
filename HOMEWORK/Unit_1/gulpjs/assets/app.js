/*
const myObj = [
	{
		title: "My Post Title",
		author: "Rick",
		publishingDate: "2023-09-07",
		isDraft: false,
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},
	{
		title: "Another Post Title",
		author: "Tim",
		publishingDate: "2023-08-12",
		isDraft: true,
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
	},
	{
		title: "This is another post!",
		author: "Sofia",
		publishingDate: "2023-07-28",
		isDraft: false,
		content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	}
]

for (i = 0; i < myObj.length; i++) {
    console.log(`Post ${i}:`)
    console.log(myObj[i].title)
    console.log(myObj[i].author)
    console.log(myObj[i].publishingDate)
    console.log(myObj[i].content)
}
*/

// Create an object called pinkFloyd
// key called bandMembers => object key roleInBand value name
// key called discography => array of objects => name / year
// create function that inputs a name of a band member - outputs their role
// create function that inputs a name of an album - outputs the year

// const pinkFloyd = {
//     bandMembers: {
//         "Syd Barrett": "lead and rhythm guitars, vocals",
//         "David Gilmour": "lead and rhythm guitars, vocals, bass, keyboards, synthesisers",
//         "Roger Waters": "bass, vocals, rhythm guitar, synthesisers",
//         "Richard Wright": "keyboards, piano, organ, synthesisers, vocals",
//         "Nick Mason": "drums, percussion"
//     },
//     discography:[
//         {
//             name: "The Piper at the Gates of Dawn",
//             year: 1967
//         },
//         {
//             name: "A Saucerful of Secrets",
//             year: 1968
//         },
//         {
//             name: "More",
//             year: 1969
//         },
//         {
//             name: "Ummagumma",
//             year: 1969
//         },
//         {
//             name: "Atom Heart Mother",
//             year: 1970
//         },
//         {
//             name: "Meddle",
//             year: 1971
//         },
//         {
//             name: "Obscured by Clouds",
//             year: 1972
//         },
//         {
//             name: "The Dark Side of the Moon",
//             year: 1973
//         },
//         {
//             name: "Wish You Were Here",
//             year: 1975
//         },
//         {
//             name: "Animals",
//             year: 1977
//         },
//         {
//             name: "The Wall",
//             year: 1979
//         },
//         {
//             name: "The Final Cut",
//             year: 1983
//         },
//         {
//             name: "A Momentary Lapse of Reason",
//             year: 1987
//         },
//         {
//             name: "The Division Bell",
//             year: 1994
//         },
//         {
//             name: "The Endless River",
//             year: 2014
//         }
//     ]
// }

// const roleInBand = (member) => `${member}'s role in the band was ${pinkFloyd.bandMembers[member]}.`
// const releaseYear = (album) => `${album} was released in ${pinkFloyd.discography.filter((item) => item.name === album).map((item) => item.year)}.`

// // const roleInBand = (member) => (pinkFloyd.bandMembers[member]) 
// //     ? `${member}'s role in the band was ${pinkFloyd.bandMembers[member]}.` 
// //     : `${member} was not a member of Pink Floyd.`
// // const releaseYear = (album) => (pinkFloyd.discography.filter((item) => item.name === album)) 
// //     ? `${album} was released in ${pinkFloyd.discography.filter((item) => item.name === album).map((item) => item.year)}.` 
// //     : `Pink Floyd did not release an album called ${album}`

// console.log(roleInBand("Roger Waters"))
// console.log(releaseYear("The Division Bell"))