var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) { //从数组最后一位开始遍历
    digits[i]++ //加一操作
    digits[i] = digits[i] % 10 //余10
    if (digits[i]) return digits //不等于0直接返回
  }
  digits.unshift(1)
  return digits
};