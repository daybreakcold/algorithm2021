/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
  let obj = {}
  cpdomains.forEach(item => {
    let str = item.split(' ')
    let prop = str[1]
    let num = +str[0]

    obj[prop] = obj[prop] ? obj[prop] + num : num
    while (prop.indexOf('.') > -1) {
      prop = prop.substr(prop.indexOf('.') + 1)
      obj[prop] = obj[prop] ? obj[prop] + num : num
    }
  })
  let list = []
  for (let prop in obj) {
    let str = obj[prop] + ' ' + prop
    list.push(str)
  }
  return list
}