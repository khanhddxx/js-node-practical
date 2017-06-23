//taskRepo.js
var repo = {
    tasks: {},
    commands: [],
    get: function (id){
        console.log('Getting task ' + id);
        return {
            name: 'new task from db'
        };
    },
    save: function(task){
        repo.tasks[task.id] = task;
        console.log('Saving ' + task.name + ' to the db');
    },
    replay: function(){
        for(var i = 0; i < repo.commands.length; i++){
            var command = repo.commands[i];
            repo.executeNoLog(command.name, command.obj);
        }
    }
};

repo.executeNoLog = function(name){
    var args = Array.prototype.splice.call(arguments, 1);
    if(repo[name]){
        return repo[name].apply(repo, args);
    }
    return false;
};

repo.execute = function(name){
    var args = Array.prototype.splice.call(arguments, 1);
    repo.commands.push({
        name: name,
        obj: args[0]
    });
    if(repo[name]){
        //.apply : pass in array
        //.call : list out each parameter individually
        return repo[name].apply(repo, args);
    }
    return false;
};

repo.execute('save', {name:'Task 1', id:1, completed: false});
repo.execute('save', {name:'Task 2', id:2, completed: false});
repo.execute('save', {name:'Task 3', id:3, completed: false});
repo.execute('save', {name:'Task 4', id:4, completed: false});
console.log(repo.tasks);

repo.tasks = {};

console.log(repo.tasks);

repo.replay();
console.log(repo.tasks);