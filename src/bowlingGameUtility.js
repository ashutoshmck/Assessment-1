const calculateBowlingScore=(rolls)=>
{
  if(!Array.isArray(rolls))
  {
    throw new Error('Not an array');
  }

  if(rolls.length<12)
  {
    throw new Error('Invalid input');
  }
  
  let runningScore=0;
  let numberOfFrames=0;
  for(let i=0;i<rolls.length;)
  {
    if(!Number.isInteger(rolls[i])||(rolls[i]<0||rolls[i]>10))
    {
      throw new Error('Invalid element in array');
    }
    
    if(numberOfFrames==9)
    {
      //open frame
      if(rolls[i]+rolls[i+1]<10)
      {

        runningScore+=rolls[i]+rolls[i+1];
      }
      else
      {
        runningScore+=rolls[i]+rolls[i+1]+rolls[i+2];
      }
      if((rolls.length-i)>3)
      {
        throw new Error('Invalid number of frames');
      }
      break;
    }
    //if spare or open
    if(rolls[i]<10)
    {
      if(rolls[i]+rolls[i+1]==10){
        runningScore+=rolls[i]+rolls[i+1]+rolls[i+2];
      }
      else
      {
        runningScore+=rolls[i]+rolls[i+1];
      }
      numberOfFrames++;
      i+=2;
    }
    //strike
    else if (rolls[i]==10)
    {
      runningScore+=rolls[i]+rolls[i+1]+rolls[i+2];
      numberOfFrames++;
      i++;
    }
    
  }
  return runningScore;
};
module.exports={calculateBowlingScore};