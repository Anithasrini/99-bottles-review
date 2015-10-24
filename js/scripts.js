var bottleLyrics = function(amount) {

  if(amount === 0) {
     return "no more bottles of beer on the wall, no more bottles of beer.Go to store and buy some more, 99 bottles of beer on the wall";
  }

  if(amount === 1) {
     return  "1 bottle of beer on the wall, 1 bottle of beer.Take one down and pass it around, no more bottles of beer on the wall.";
  }
  if(amount === 2) {
    return "2 bottles of beer on the wall, 2 bottles of beer.Take one down and pass it around, 1 bottle of beer on the wall.";
  }

var amount = 99; amount > 0; amount -1
  if(amount > 0) {
      return "(amount) bottles of beer on the wall, (amount) bottles of beer.Take one down and pass it around, (amount-1) more bottles of beer on the wall.";
  }
  else {
 return false;
 }

  $(".song").append(result);
  $("#result").show();

}
