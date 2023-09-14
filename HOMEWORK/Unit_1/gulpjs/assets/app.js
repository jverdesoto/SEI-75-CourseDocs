const pinkFloyd = {
    bandMembers: [
            {roleInBand: 'guitar, vocals', name: 'Syd Barrett'},
            {roleInBand: 'guitar, vocals, bass, keys', name: 'David Gilmour'},
            {roleInBand: 'bass, guitar, vocals, synths', name: 'Roger Waters'},
            {roleInBand: 'keys, vocals', name: 'Richard Wright'},
            {roleInBand: 'drums', name: 'Nick Mason '}
        ],
    discography: [
        { year: 1967, name: 'The Piper at the Gates of Dawn'},
        { year: 1968, name: 'A Saucerful of Secrets'},
        { year: 1969, name: 'More'},
        { year: 1969, name: 'Ummagumma'},
        { year: 1970, name: 'Atom Heart Mother'},
        { year: 1971, name: 'Meddle'},
        { year: 1972, name: 'Obscured by Clouds'},
        { year: 1973, name: 'The Dark Side of the Moon'},
        { year: 1975, name: 'Wish You Were Here'},
        { year: 1977, name: 'Animals'},
        { year: 1979, name: 'The Wall'},
        { year: 1983, name: 'The Final Cut'},
        { year: 1987, name: 'A Momentary Lapse of Reason'},
        { year: 1994, name: 'The Division Bell'},
        { year: 2014, name: 'The Endless River'}
    ]
}

//function that inputs name of band member and outputs the role
function findRole(name){

    //loop through this key and creates an array of these values
const bandMembers = pinkFloyd.bandMembers.map((member) => {
   return member.name; })

   //find out the index of the array element that has the same value as the parameter
const index = bandMembers.indexOf(name);

//now we use what we found to access it
return console.log(pinkFloyd.bandMembers[index].roleInBand)
}
findRole('David Gilmour')


//function inputs name of album, outputs year
function findYearOfAlbum (albumILike){
    const albumHistory = pinkFloyd.discography.map((album) => {
        return album.name
    })
    const index = albumHistory.indexOf(albumILike)
    return console.log(pinkFloyd.discography[index].year)
}

findYearOfAlbum('The Wall')
