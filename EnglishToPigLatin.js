function translatePigLatin(str) {

  if (str.search(/[aeiou]/i) == -1) {
    str = str + "ay"
  } else if (str.search(/[$aeiou]/i) == 0) {
    str = str + "way"
  } else {
    str = str.slice(str.search(/[aeiou]/)) + str.slice(0, str.search(/[aeiou]/))+"ay"
  }  
  return str
}
