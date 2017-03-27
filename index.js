function b(newString){

    for(var i = 1 ; i < 13; i++ ){
        var newString = i + " ";
        for(var j = 1; j < 13; j++){
            newString += ((i*j) + " ");
        }
        console.log(newString);
    }
}
b(100);