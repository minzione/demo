Array
array.some(function (val) {
  if (val) {
    return true; // 必须return true 才会进行一个跳出，单有一个return 无法进行跳出循环
  }
})