function getLyrics () {
  let lyrics = ''
  for (let x = 99; x > 1; x--){
    lyrics += x + ` bottles of beer on the wall, ` + x + ` bottles of beer.
`
    let restBeer = x - 1
    if (restBeer == 1) {
      lyrics +=`Take one down and pass it around, `+ restBeer +` bottle of beer on the wall.
`
    } else {
      lyrics +=`Take one down and pass it around, `+ restBeer +` bottles of beer on the wall.
`
    }
  }
  lyrics += `1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`
  return lyrics
}
module.exports = function main () {
  let result = ''
  result = getLyrics()
  return result
}