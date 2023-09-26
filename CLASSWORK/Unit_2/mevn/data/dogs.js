const dogs = [
    {
        id: 1,
        name: 'Fido',
        age: 3,
        breed: 'German Shepherd',
        img: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSgU4nPfMA2Ss-LB1u-cfjkd3JCEsyeyaLqufqktH0cl4DfeyvjoGMubCIvYW5OwwpB9iMBWMNAvl3qiwA',
        details: 'Fido is a playful and energetic 3-year-old German Shepherd. He loves going for long walks in the park and playing fetch with his favorite tennis ball.'
    },
    {
        id: 2,
        name: 'Casper',
        age: 10,
        breed: 'Golden Labrador',
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Labrador_on_Quantock_%282175262184%29.jpg/800px-Labrador_on_Quantock_%282175262184%29.jpg",
        details: 'Casper, the 10-year-old Golden Labrador, is a gentle giant. He enjoys lounging around the house, especially on sunny days. Casper is known for his friendly and calm demeanor.'
    },
    {
        id: 3,
        name: 'Betty',
        age: 4,
        breed: 'Cocker Spaniel',
        img: "https://www.vettimes.co.uk/app/uploads/2023/05/English-cocker-spaniel-AdobeStock_268313328.jpg",
        details: "Betty, the 4-year-old Cocker Spaniel, is a social butterfly. She adores meeting new people and is always ready for a game of hide-and-seek. Betty's wagging tail is a constant source of joy."
    },
    {
        id: 4,
        name: 'Beau',
        age: 2,
        breed: 'Cocker Spaniel',
        img: "https://i2-prod.walesonline.co.uk/incoming/article4311588.ece/ALTERNATES/s1200c/della.jpg",
        details: "Beau, also a Cocker Spaniel but only 2 years old, is a bundle of energy. He loves splashing around in puddles and is known for his mischievous nature. Beau is still learning his manners."
    },
    {
        id: 5,
        name: 'Biscuit',
        age: 4,
        breed: 'Brittany Spaniel',
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/American_Brittany_standing.jpg/1200px-American_Brittany_standing.jpg",
        details: "Biscuit, the 4-year-old Brittany Spaniel, is an adventurous spirit. He enjoys hiking and exploring the great outdoors. Biscuit is incredibly loyal and will stick by your side on any adventure."
    },
    {
        id: 6,
        name: 'PJ',
        age: 7,
        breed: 'Mixed',
        img: "https://www.science.org/do/10.1126/article.31033/abs/200990111.jpg",
        details: "PJ is a 7-year-old mixed breed dog with a heart of gold. He's a bit of a foodie and is always on the lookout for tasty treats. PJ is known for his sweet and gentle disposition."
    },
    {
        id: 7,
        name: 'Harvey',
        age: 8,
        breed: 'King Charles Cavalier Spaniel',
        img: "https://www.akc.org/wp-content/uploads/2017/11/Cavalier-King-Charles-Spaniel-standing-in-the-grass.jpg",
        details: "Harvey, the 8-year-old King Charles Cavalier Spaniel, is a regal and affectionate pup. He loves cuddling on the couch and will gladly give you his paw for a treat. Harvey is a true lap dog."
    },
    {
        id: 8,
        name: 'Ziggy',
        age: 5,
        breed: 'Cavapoo',
        img: "https://www.thesprucepets.com/thmb/luMSsUurOlJraG_Z4VLANrLpAHk=/1550x0/filters:no_upscale():strip_icc()/GettyImages-1324286255-eb3ee5beac9346f7a74e2f9430d48a13.jpg",
        details: "Ziggy, the 5-year-old Cavapoo, is a social butterfly. He enjoys going to the dog park and making new furry friends. Ziggy's curly fur is his signature look, and he takes great pride in it."
    },
    {
        id: 9,
        name: 'Luna',
        age: 2,
        breed: 'German Pointer',
        img: "https://upload.wikimedia.org/wikipedia/commons/3/38/Duitse_staande_korthaar_10-10-2.jpg",
        details: "Luna, the 2-year-old German Pointer, is a high-energy dog. She excels in agility training and loves a good game of fetch. Luna's boundless enthusiasm is infectious."
    },
    {
        id: 10,
        name: 'Hebe',
        age: 14,
        breed: 'German Pointer',
        img: "https://www.ukpets.com/oc-content/uploads/breeds/0/5650.jpg",
        details: "Hebe, the 14-year-old German Pointer, is a wise and loyal companion. She enjoys leisurely strolls in the garden and sunbathing. Hebe is a testament to the enduring love between dogs and their owners."
    }
]

const dogsExport = {
    dogs,
    soloDog: (id) => dogs.filter(dog => dog.id === id)
}

export default dogsExport
