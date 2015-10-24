describe('bottleLyrics', function() {

  it("will get the no more bottles lyrics", function() {
    expect(bottleLyrics(0)).to.equal('no more bottles of beer on the wall, no more bottles of beer.Go to store and buy some more, 99 bottles of beer on the wall')
  })

  it("will get one more bottle lyrics", function() {
    expect(bottleLyrics(1)).to.equal('One bottle of beer on the wall, 1 bottle of beer.Take one down and pass it around, no more bottles of beer on the wall.')
 })

});
