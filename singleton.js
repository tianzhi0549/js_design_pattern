var singleton=(function (){
    var singleton={};
    singleton.version="1.0.0";
    singleton.getVersion=function (){
        return singleton.version;
    }
    singleton.init=function (){
        //一些初始化代码
    }
    return singleton;
}());
singleton.init();
console.log(singleton.version);
console.log(singleton.getVersion());
