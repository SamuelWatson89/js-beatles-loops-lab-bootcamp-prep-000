function theBeatlesPlay(musicians, instruments) {
  const beatles = []

  for (let i = 0, l = musicians.length; i < l; i++) {
    beatles.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return beatles
}