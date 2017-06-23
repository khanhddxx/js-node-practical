//task.js
// var task = {
//     title: "My task",
//     description: 'My description'
// };
// Object.defineProperty(task, 'toString', {
//     value: 
//     function(){
//     return this.title + ' ' + this.description;
//     },
//     writeable : false,
//     configurable: false,
//     enumerable: false
// });

// var urgentTask = Object.create(task);
// Object.defineProperty(urgentTask, 'toString', {
//     value: 
//     function(){
//     return this.title + ' ' + 'is urgent';
//     },
//     writeable : false,
//     configurable: false,
//     enumerable: false
// });

// console.log(urgentTask.toString());

var Repo = require('./taskRepository');

var Task = function(data){
    this.name = data.name;
    this.completed = false;
}

Task.prototype.complete = function(){
        console.log('completing task: ' + this.name);
        this.completed = true;
}
Task.prototype.save = function(){
        console.log('saving task: ' + this.name)
        Repo.save(this);
}

module.exports = Task;