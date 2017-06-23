//main.js
var Task = require('./task');

var notificationService = function(){
    var message = 'Notifying ';
    this.update = function(task){
        console.log(message + task.user + ' for task ' + task.name);
    };
};

var loggingService = function(){
    var message = 'Logging ';
    this.update = function(task){
        console.log(message + task.user + ' for task ' + task.name);
    };
};

var auditingService = function(){
    var message = 'Auditing ';
    this.update = function(task){
        console.log(message + task.user + ' for task ' + task.name);
    };
};

function ObserverList(){
    this.observerList = [];
}

ObserverList.prototype.add = function(obj){
    return this.observerList.push(obj);
};

ObserverList.prototype.get = function(index){
    if (index > -1 && index < this.observerList.length){
        return this.observerList[index];
    }
};

ObserverList.prototype.removeAt = function(index){
    this.observerList.splice(index,1);
};

ObserverList.prototype.indexOf = function(obj, startIndex){
    var i = startIndex;

    while (i<this.observerList.length){
        if (this.observerList[i] === obj){
            return i;
        }
        i++;
    }
    return -1;
};

ObserverList.prototype.count = function(){
    return this.observerList.length;
};

var ObservableTask = function(data){
    Task.call(this,data);
    this.observers = new ObserverList();
};

ObservableTask.prototype.addObserver = function(observer){
    this.observers.add(observer);
};

ObservableTask.prototype.removeObserver = function(observer){
    var index = this.observers.indexOf(observer, 0);
    if (index == -1){
        console.log('not found service. cannot remove');
    }
    else {
        this.observers.removeAt(index);
    }
};

ObservableTask.prototype.addRangeObserver = function(observerList){
    for(var i=0; i<observerList.length; i++){
        this.addObserver(observerList[i]);
    }
};

ObservableTask.prototype.notify = function(context){
    var observerCount = this.observers.count();
    for (var i=0; i<observerCount; i++)
    {
        this.observers.get(i)(context);
    }
};

ObservableTask.prototype.save = function(){
    this.notify(this);
    Task.prototype.save.call(this);
};

var task1 = new ObservableTask({name: 'create a demo for constructors', user: 'Jon'});

var not = new notificationService();
var ls = new loggingService();
var audit = new auditingService();
task1.addRangeObserver([not.update,ls.update,audit.update]);
task1.save();

task1.removeObserver(audit.update);
task1.save();