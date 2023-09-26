const todos = [
    {todo: 'Feed Dogs', done: true},
    {todo: 'learn express', done: false},
    {todo: 'buy milk', done:false}
]

module.exports = {
    getAll: function (){
        return todos
    }
}