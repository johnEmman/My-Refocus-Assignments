let letters = "hello World";

function main(txt){
    const toArr = txt.split('');// ================== convert the string to array
    
    function fil(arr){ // ============================= removing the white spaces of the array
        return arr.filter((e) => {
            return e != " ";
        })
    }

    let index = 0;

    function serch(arr, i){// ========================= looking to the first upperCase 
        if(i == arr.length){
            return 0;
        }else if(arr[i] == arr[i].toUpperCase()){
            return arr[i];
        }
        return serch(arr, i + 1)
    }
    
    let filtered = serch(fil(toArr), index);  // ===== declaring function to variable

    if(filtered == 0){// =============================== deciding if there is an upperCase
        console.log("No uppercase letter")
    }else{
        console.log(`In the text "${letters}", the result is “${filtered}”`)
    }
}
main(letters)


//=======================================================================================================================
//                                              second try

let strng = "john Emmanuel S. Marco";


let hey = strng.replaceAll(" ", "");

let index = 0;
function recur(arr, i){
    if(i == arr.length){
        return 0;
    }else if(arr[i] == arr[i].toUpperCase()){
        return arr[i];
    }else{
        console.log(i)
        return recur(arr, i +1)
    }
}
console.log(recur(hey, index))
































// first attempt



// let text = "there is a storm coming to the East of the Philippines";
// let textI = "no more rainy days here, sun is about to show up";

// function main(parameter){
	
// 	let i = 0;
// 	let arra = parameter.split('')//this function is to convert a string to array
	
// 	let removeWhiteSpaceFromArray = function(array){//this function is to remove the white spaces and some char
// 		return array.filter((item) => {
// 			return (item != ' ') && (item !=  ',') && (item != '!') && (item != '.') && (item != '?');
// 		});
// 	}
	
// 	function first(str,i){//recursive function. this function is looking for an uppercase char
// 		if (i == str.length)
// 			return 0;
// 		if (str[i] == str[i].toUpperCase())
// 				return str[i];
// 		return first(str, i+1);
// 	}
	
// 	let res = first(removeWhiteSpaceFromArray(arra), i);
	
// 	if (res == 0){// 
// 		console.log( "No uppercase letter");
// 	}else{
// 		console.log(`In the text "${parameter}", the result is “${res}”`);
// 	}
	
// }

// main(text)


// //pls appreciate

