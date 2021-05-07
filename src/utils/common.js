
// 字符串除取首尾各四位，其他用符号代替
const replaceStr = (str, replaceStr) => {
    return str.replace(str.substring(8, str.length - 4), replaceStr)
  }
  export { replaceStr }
