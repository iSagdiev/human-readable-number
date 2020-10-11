module.exports = function toReadable (number) {
    if (number === 0) {
        return 'zero'
    }
    if (number > 0 && number < 10) {
     return lessTen(number);
    }
    if (number >= 10 && number < 20) {
     return tenToTwenty(number);
    }
    if (number >= 20 && number < 100) {
      if (number%10 != 0) {
        return (twentyToHundred(Math.floor(number/10)*10)+' '+lessTen(number%10));
      } else {
        return (twentyToHundred(Math.floor(number/10)*10));
      }
    
 }
 if (number >= 100 && number < 1000) {
     if (number%100 != 0) {
        if (number%100 > 0 && number%100 < 10) {
            if (number%100 === 0) {
                return (hundredToThousand(Math.floor(number/100)*100));
            } else {
                return (hundredToThousand(Math.floor(number/100)*100)+ ' ' + lessTen(number%10))
            }
            
        } else if (number%100 >= 10 && number%100 < 20) {
            return (hundredToThousand(Math.floor(number/100)*100)+ ' ' + tenToTwenty(number%100))
        } else if (number%100 >= 20 && number%100 < 100) {
            if (number%10 === 0) {
                return (hundredToThousand(Math.floor(number/100)*100)+ ' ' + twentyToHundred(number - Math.floor(number/100)*100-number%10));
            }
            else {
                return (hundredToThousand(Math.floor(number/100)*100)+ ' ' + twentyToHundred(number - Math.floor(number/100)*100-number%10)+' '+lessTen(number%10));
            }
                
 }
} else return(hundredToThousand(Math.floor(number/100)*100))
 } 
}

const lessTen = (number) => {
    let variable = (number === 1) ? 'one': (number === 2) ? 'two': (number === 3) ? 'three': (number === 4) ? 'four': (number === 5) ? 'five':
    (number === 6) ? 'six': (number === 7) ? 'seven': (number === 8) ? 'eight': (number === 9) ?'nine': '';
    return(variable);
}

const tenToTwenty = (number) => {
    let variable = (number === 10) ? 'ten': (number === 11) ? 'eleven': (number === 12) ? 'twelve': (number === 13) ? 'thirteen': (number === 14) ? 'fourteen': (number === 15) ? 'fifteen':
    (number === 16) ? 'sixteen': (number === 17) ? 'seventeen': (number === 18) ? 'eighteen': (number === 19) ? 'nineteen': '';
    return(variable);
}

const twentyToHundred = (number) => {
    let variable = (number === 20) ? 'twenty': (number === 30) ? 'thirty': (number === 40) ? 'forty': (number === 50) ? 'fifty': (number === 60) ? 'sixty': 
    (number === 70) ? 'seventy': (number === 80) ? 'eighty':(number === 90) ? 'ninety': '';
    return(variable)
}

const hundredToThousand = (number) => {
    let variable = (number === 100) ? 'one hundred': (number === 200) ? 'two hundred': (number === 300) ? 'three hundred': (number === 400) ? 'four hundred': (number === 500) ? 'five hundred': 
    (number === 600) ? 'six hundred': (number === 700) ? 'seven hundred': (number === 800) ? 'eight hundred': (number === 900) ? 'nine hundred': '';
    return(variable)
}
