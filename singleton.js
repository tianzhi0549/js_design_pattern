var singleton=(function (){
    var singleton={};
    singleton.version="1.0.0";
    singleton.getVersion=function (){
        return singleton.version;
    }
    return singleton;
}());
console.log(singleton.version);
console.log(singleton.getVersion());
