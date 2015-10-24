describe('bottleLyrics', function() {

  it ("will get the entire bottleLyrics for the amount", function() {
    expect (bottleLyrics(99)).to.equal('(99) bottles of beer on the wall, (99) bottles of beer.Take one down and pass it around, (98) bottles of beer on the wall.');
  });

  it ("will get 2 bottles lyrics", function() {
    expect (bottleLyrics(2)).to.equal('2 bottles of beer on the wall, 2 bottles of beer.Take one down and pass it around, 1 bottle of beer on the wall.');
  });

  it ("will get 1 bottle lyrics", function() {
    expect (bottleLyrics(1)).to.equal('1 bottle of beer on the wall, 1 bottle of beer.Take one down and pass it around, no more bottles of beer on the wall.');
  });

  it ("will get the no more bottles lyrics", function() {
    expect (bottleLyrics(0)).to.equal('no more bottles of beer on the wall, no more bottles of beer.Go to store and buy some more, 99 bottles of beer on the wall');
  });

});
