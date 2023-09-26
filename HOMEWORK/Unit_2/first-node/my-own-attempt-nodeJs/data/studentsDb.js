const students = [
    {student: 'Mark Stam', status: true},
    {student: 'Jackson Mitchell', status: false},
    {student: 'Liam Johnsons', status: true},
    {student: 'Ethan Williams', status: false}
]

module.exports = {
    getAll: function (){
        return students
    }
}