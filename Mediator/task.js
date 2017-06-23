var Task = function(data){
    this.name = data.name;
    this.completed = data.completed;
    this.priority = data.priority;
    this.user = data.user;
    this.project = data.project;
}

Task.prototype.complete = function(){
        console.log('completing task: ' + this.name);
        this.completed = true;
}
Task.prototype.save = function(){
        console.log('saving task: ' + this.name)
}

module.exports = Task;