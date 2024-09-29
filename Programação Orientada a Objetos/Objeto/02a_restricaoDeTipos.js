var json = '{"name": "Gustavo Rolim", "birth": "2024-05-10T12:00:00.000Z", "city":"Porto Alegre"}' 

var obj = JSON.parse(json, function(key, value){
    if(key == "birth"){ 
        return new Date(value); 
    }
    return value;
});

console.log("Nome: "+ obj.name);
console.log("birth: "+ obj.birth);