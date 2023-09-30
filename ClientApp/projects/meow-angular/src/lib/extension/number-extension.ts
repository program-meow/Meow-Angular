//============== Number 扩展定义 =================
//Copyright 2023 程序喵
//Licensed under the MIT license
//================================================
import * as helper from "./../common/helper";

declare global {
  /**
   * Number 扩展定义
   */
  interface Number {

    /**
    * 自定义扩展实现
    */
    meow(): NumberExtension;
  }
}

/**
 * 自定义扩展实现
 */
Number.prototype.meow = function (): NumberExtension {
  return new NumberExtension(this as number);
}

export { }

/**
 * Number 扩展操作
 */
export class NumberExtension {
  /**
   * 值
   */
  private value: number;

  /**
   * 初始化
   * @param value 值
   */
  constructor(value: number) {
    this.value = value;
  }

  /**
   * 左补位
   * @param totalWidth 总长度,默认:2
   * @param paddingChar 填充字符,默认:'0'
   */
  toPadLeft(totalWidth: number = 2, paddingChar: string = '0'): string {
    return helper.toPadLeft(this.value, totalWidth, paddingChar);
  }

  /**
   * 右补位
   * @param totalWidth 总长度,默认:2
   * @param paddingChar 填充字符,默认:'0'
   */
  toPadRight(totalWidth: number = 2, paddingChar: string = '0'): string {
    return helper.toPadRight(this.value, totalWidth, paddingChar);
  }
}
