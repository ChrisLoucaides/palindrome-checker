function palindrome(str) {
  let formatted = str.replace(/[^\w]|_/g, "").toLowerCase().replace();
  let firstHalf = "";
  let secondHalf = "";

  if(formatted.length%2 !== 0){
    let midpoint = Math.trunc(formatted.length/2)


    for(let i = 0; i < midpoint; i++){
      firstHalf = firstHalf.concat(formatted.charAt(i));
    }

    for(let i = midpoint+1; i <= formatted.length; i++){
      secondHalf = secondHalf.concat(formatted.charAt(i))
    }
  }
  else{
    let midpoint = formatted.length/2
    for(let i = 0; i < midpoint; i++){
      firstHalf = firstHalf.concat(formatted.charAt(i))
    }

    for(let i = midpoint; i < formatted.length; i++){
      secondHalf = secondHalf.concat(formatted.charAt(i))
    }
  }

  if(firstHalf === reverseString(secondHalf)){
    return true;
  }
  else{
    return false;
  }
}

function reverseString(str){
  let array = str.split("")
  let reverseArray = array.reverse();
  return reverseArray.join("");
}
