module.exports = function check(str, bracketsConfig) {
    // your solution
  if (str.length % 2 != 0) {
    return false;
  };

  let stack =[];
  for (let i = 0; i < str.length; i++) {
    for(let k = 0; k < bracketsConfig.length; k++){
      
      if (str[i] === bracketsConfig[k][0]) {
        stack.push(str[i]);
      } else if (str[i] === bracketsConfig[k][1]) {
        
        const lastBrackInStack = stack.pop();

        console.log(
            "br k0",
            bracketsConfig[k][0],
            "br k1",
            bracketsConfig[k][1],
            lastBrackInStack
        );
        if (bracketsConfig[k][0] !== lastBrackInStack) {
            return false;
        }
      } 
    }
  }
  return stack.length === 0;   
};
