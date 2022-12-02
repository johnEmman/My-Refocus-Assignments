let string = "there is a storm coming to the East of the Philippines";


const trim = string.replaceAll(" ", "");

function recur(i){
    if(i == trim.length){
        return 0;
    } else if (trim[i] == trim[i].toUpperCase()) {
        return trim[i];
    }else{
        return recur(i + 1)
    }
}

console.log(recur(0))