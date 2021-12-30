
/*
Having two standards for a keypad layout is inconvenient!  
Computer keypad's layout:  
<img src="http://upload.wikimedia.org/wikipedia/commons/9/99/Numpad.svg" style="width:250px;height:250px"
alt="7 8 9  \n
4 5 6  \n
1 2 3  \n
  0 \n"
/>

 
Cell phone keypad's layout:  
<img src="http://upload.wikimedia.org/wikipedia/commons/d/dd/Mobile_phone_keyboard.svg" style="width:100px;height:70px"
alt="1 2 3\n 
4 5 6\n  
7 8 9\n  
  0\n"
/>

Solve the horror of unstandardized keypads by providing a function that converts computer input to a number as if it was typed on a phone.

Example:  
"789" -> "123"

Notes:  
You get a string with numbers only
*/





//Solutions:




function computerToPhone(numbers){
  let phoneNumbers = '0123456789';
  let computer = '0789456123'
  phoneNumbers = phoneNumbers.split('');
  computer = computer.split('');
  
  let translatedStr = '';
  
  for (let i = 0; i < numbers.length; i++){
    let number = numbers[i];
    
    computer.indexOf(number);
    translatedStr += computer[number];
  }
  return translatedStr;
}