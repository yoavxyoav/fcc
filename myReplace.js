function myReplace(str, before, after) {
  let isCap = true
  if (before.search(/[$a-z]/) == 0) {
    isCap = false
  }

  if (isCap == true) {
    after = after[0].toUpperCase() + after.slice(1)
  }

  str = str.replace(before, after)
  
  return str;
}
