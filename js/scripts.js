
var bottleLyrics = function(input) {
  var result = "";
  for (var i=input; i >= 0; i--) {

    if(i > 2) {
      return ((i) + " bottles of beer on the wall, " + (i) + " bottles of beer.Take one down and pass it around, " + (i-1) + " bottles of beer on the wall.");
    }
    if(i === 2) {
      return ((i)  + " bottles of beer on the wall, " + (i) + " bottles of beer.Take one down and pass it around, " +  (i-1) + " bottle of beer on the wall.");
    }
    if(i === 1) {
      return  ((i) + " bottle of beer on the wall, " + (i) + " bottle of beer.Take one down and pass it around, no more bottles of beer on the wall.");
    }
    if(i === 0) {
      return ("no more bottles of beer on the wall, no more bottles of beer.Go to store and buy some more, 99 bottles of beer on the wall");
    }
  };
};


