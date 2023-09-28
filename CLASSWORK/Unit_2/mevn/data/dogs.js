const dogs = [
    {
        id: 1,
        name: 'Fido',
        age: 3,
        breed: 'German Shepherd',
        img: 'https://i.pravatar.cc/100'
    },
    {
        id: 2,
        name: 'Gin',
        age: 6,
        breed: 'Labrador',
        img: 'https://i.pravatar.cc/100'
    },
    {
        id: 3,
        name: 'Waka',
        age: 10,
        breed: 'Spaniel',
        img: 'https://i.pravatar.cc/100'
    },
    {
        id: 4,
        name: 'Thor',
        age: 2,
        breed: 'Golden retreiver',
        img: 'https://i.pravatar.cc/100'
    },
    {
        id: 5,
        name: 'Bobby',
        age: 10,
        breed: 'Mutt',
        img: 'https://i.pravatar.cc/100'
    },
    {
        id: 6,
        name: 'Laika',
        age: 12,
        breed: 'Mixed',
        img: 'https://i.pravatar.cc/100'
    },
    {
        id: 7,
        name: 'Taz',
        age: 5,
        breed: 'Belgian Malinois',
        img: 'https://i.pravatar.cc/100'
    },
    {
        id: 8,
        name: 'Snowie',
        age: 1,
        breed: 'Samoyed',
        img: 'https://i.pravatar.cc/100'
    },
    {
        id: 9,
        name: 'Walnut',
        age: 3,
        breed: 'Poodle',
        img: 'https://i.pravatar.cc/200'
    },
    {
        id: 10,
        name: 'Biscuit',
        age: 4,
        breed: 'Brittany Spaniel',
        img: 'https://i.pravatar.cc/200'
    }
]


// function getAll(){
//     return dogs;
// }
function getDogById(id){
    for(let i=0;i<dogs.length;i++)
    {
        if(dogs[i].id === id)
        {
            return dogs[i];
        }
    }
    return null;
}


export default {dogs, getDogById}