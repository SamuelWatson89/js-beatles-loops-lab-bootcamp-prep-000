function theBeatlesPlay(musicians, instruments) {
  const beatles = []

  for (let i = 0, l = musicians.length; i < l; i++) {
    beatles.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return beatles
}

function johnLennonFacts (facts) {
  const factsShouted = []
  
  let i = 0
  while (i < facts.length) {
    factsShouted.push('${facts[i]}!!!')
    i++
  }
  console.log(shoutedFacts)
return shoutedFacts
}