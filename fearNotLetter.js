function fearNotLetter(str) {

  let fullAbc = "abcdefghijklmnopqrstuvwxyz"
  let pos = fullAbc.search(str[0])
  for (let i = 0; i <= fullAbc.length; i++) {
    if (fullAbc[pos+i] != str[i]) {
      return fullAbc[pos+i]
    }
  }
  return undefined;
}
