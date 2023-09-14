const pinkFloyd = {
    bandMembers: [
        { name: 'David Gilmour', role: 'Lead Guitar' },
        { name: 'Roger Waters', role: 'Bass Guitar' },
        { name: 'Syd Barrett', role: 'Guitar' },
        { name: 'Richard Wright', role: 'Keyboard' }
      ],
    discography: [
        { album: 'The Piper at the Gates of Dawn', year: 1967},
        { album: 'A Saucerful of Secrets', year: 1968 },
        { album: 'More', year: 1969 },
        { album: 'Ummagumma', year: 1969 },
        { album: 'Atom Heart Mother', year: 1970 },
        { album:'Meddle', year: 1971 },
        { album: 'Obscurred by Clouds', year: 1972 },
        { album: 'The Dark side of the Moon', year: 1973 },
        { album: 'Wish You Were Here', year: 1975 },
        { album: 'Animals', year: 1977 },
        { album: 'The Wall', year: 1979 },
        { album: 'The Final Cut', year: 1983 },
        { album: 'A Momentary Lapse of Reason', year: 1987 },
        { album: 'The Division Bell', year: 1994 },
        { album: 'The Endless River', year: 2014 }
    ]
}
function findMember (input){
    pinkFloyd.bandMembers.map((member) => {
        if(input === member.name){
            console.log(member.role);
        };
    })
}

function findYearOf (input){
    pinkFloyd.discography.map((album) => {
        if(input === album.album){
            console.log(album.year);
        };
    })
}


findMember('David Gilmour');
findYearOf('More');

const test = [1, 2, 3, 4, 5, 6, 7, 8]
oddsAndEvens(test);

function oddsAndEvens(array) {
    const result = []
    array.map((number) => {
      if (number % 2 === 0){
        return 'even';
      }else {
        return 'odd';
      }
    })
  }