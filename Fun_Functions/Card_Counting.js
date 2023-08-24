/*In Blackjack, a player can determine advantage on the next hand 
over the house by keeping track of the relative number of 
high and low cards remaining in the deck.
Having more high cards in the deck favors
the player. Each card is assigned a value according to the table below
count+=1 for 2,3,4,5,6
count+=0 for 7,8,9
count-=1 for 10,j,q,k,a
based on the count, bet or hold.*/
  
let count = 0;

function cc(card) {
  // Only change code below this line
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5: 
    case 6:count+=1;break;
    case 7:
    case 8:
    case 9:count+=0;break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':count-=1;break;
    default:break;
  }

  if(count>0){return count + " Bet"; }
  return count + " Hold";
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
