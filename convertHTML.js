function convertHTML(str) {
  const dic = {
    "&": '&amp;',
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": "&apos;"
  }

  for (let c in dic) {
    let regex = new RegExp(c, "g")
    str = str.replace(regex, dic[c])
  }
  
  console.log(str)
  return str;
}

convertHTML("Dolce & Gabbana");
