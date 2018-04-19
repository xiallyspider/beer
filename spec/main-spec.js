const getLyrics = require("../src/lyrics")
const main = require("../src/main")

describe('print the beer song lyrics', function () {
    it('print the beer song lyrics', function() {
      let lyrics = getLyrics()
      let result = main()
      expect(result).toEqual(lyrics)
    })
})