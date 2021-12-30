/*

```javascript
function wordPattern(pattern, str)
```
that given a ```pattern``` and a string ```str```, find if ```str``` follows the same sequence as ```pattern```. <br/>

For example:
```javascript
wordPattern('abab', 'truck car truck car') === true
wordPattern('aaaa', 'dog dog dog dog') === true
wordPattern('abab', 'apple banana banana apple') === false
wordPattern('aaaa', 'cat cat dog cat') === false



solutions 
*/

const wordPattern = (pattern, str) => {
  let array1 = [...new Set(pattern.split``)];
  let array2 = [...new Set(str.split` `)];
  let dict = {};
  for (let i = 0; i < array1.length; i++) {
    dict[array1[i]] = array2[i];
  }
  return pattern.replace(/\w/g, v => dict[v]) === str.split` `.join``;
}
