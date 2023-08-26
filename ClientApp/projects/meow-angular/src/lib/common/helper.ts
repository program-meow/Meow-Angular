//============== 辅助操作 ========================
//Copyright 2023 程序喵
//Licensed under the MIT license
//================================================

/**
 * 左补位
 * @param value 值
 * @param totalWidth 总长度
 * @param paddingChar 填充字符
*/
export let padLeft = (value: any, totalWidth: number = 2, paddingChar: string = '0'): string => {
  value = String(value);
  while (value.length < totalWidth) {
    value = paddingChar + value;
  }
  return value;
}

/**
 * 右补位
 * @param value 值
 * @param totalWidth 总长度
 * @param paddingChar 填充字符
*/
export let padRight = (value: any, totalWidth: number = 2, paddingChar: string = '0'): string => {
  value = String(value);
  while (value.length < totalWidth) {
    value = value + paddingChar;
  }
  return value;
}
