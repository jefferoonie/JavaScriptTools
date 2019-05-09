//Function creates a string with x amount of spaces.

//Example use of function.
console.log(createSpaceFilledString(1))
console.log(createSpaceFilledString(2))
console.log(createSpaceFilledString(3))
console.log(createSpaceFilledString(4))
console.log(createSpaceFilledString(5))

function createSpaceFilledString(numSpaces) 
{
  var spaces = '';
  
  var i;
  for (i = 0; i < numSpaces; i++)
  {
    spaces += '\xa0';
  }
  return spaces;
}
