

function doubles(arr){
    let double = [];
    arr.forEach(function(val){
       double.push(val *2)
      }); 
      return double
}

function onlyEvenValues(arr){
    let onlyEven=[];
    arr.filter(function(val){
        if(val % 2 === 0){
          onlyEven.push(val);
        }
    });
      return onlyEven;
    }

function showFirstAndLast(arr){
        return arr.map(function(value){
            return (value[0] + value[value.length-1]);
          });
    }

function addKeyAndValue(arr,key,value){
    arr.forEach(function(val) {
            return val[key] = value
        })
        return arr
        }
    
function vowelCount(str){
    let splitArr = str.split("");
    let obj = {};
    const vowels = "aeiou";
  
    splitArr.forEach(function(letter) {
      let lowerCasedLetter = letter.toLowerCase()
      if (vowels.indexOf(lowerCasedLetter) !== -1) {
        if (obj[lowerCasedLetter]) {
          obj[lowerCasedLetter]++;
        } else {
          obj[lowerCasedLetter] = 1;
        }
      }
    });
    return obj;
  }

  function doubleValuesWithMap(arr) {
     return arr.map(function(value){
          return (value * 2)
      })
  }
        
  function valTimesIndex(arr){
    return arr.map(function(value){
        return (value * arr.indexOf(value))
    })
}

function extractKey(arr, key){
    return arr.map(function(value){
        return value[key]
      });
    }

    function extractFullName(arr){
        return arr.map(function(value){
            return (value.first+' '+value.last)
          });
    
    }

    function filterByValue(arr, key) {
        return arr.filter(function(value) {
        return value[key]
        })
    }

    function find(arr, searchValue) {
        return arr.filter(function(val){
            if (searchValue === val) {
                return val
            }
        })
    }

    function findInObj(arr, key, searchValue) {
        return arr.filter(function(val){
           return val[key] === searchValue  
        })[0];
    }

    function removeVowels(str) {
    const vowels = "aeiou";
    return str
      .toLowerCase()
      .split("")
      .filter(function(val) {
        return vowels.indexOf(val) === -1;
      })
      .join("");
  }

  function doubleOddNumbers(arr) {
    return arr
    .filter(function(val) {
      return val % 2 !== 0;
    })
    .map(function(val) {
      return val * 2;
    });
  }
  
