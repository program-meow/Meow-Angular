//============== String 扩展定义 =================
//Copyright 2023 程序喵
//Licensed under the MIT license
//================================================
import * as helper from "./../common/helper";

declare global {
  /**
   * String 扩展定义
   */
  interface String {

    /**
    * 自定义扩展实现
    */
    meow(): StringExtension;
  }
}

/**
 * 自定义扩展实现
 */
String.prototype.meow = function (): StringExtension {
  return new StringExtension(this as string);
}

export { }

/**
 * String 扩展操作
 */
export class StringExtension {
  /**
   * 值
   */
  private value: string;

  /**
   * 初始化
   * @param value 值
   */
  constructor(value: string) {
    this.value = value;
  }

  /**
   * 移除起始字符串
   * @param start 要移除的值
   */
  removeStart(start: string): string {
    return helper.removeStart(this.value, start);
  }

  /**
   * 移除末尾字符串
   * @param end 要移除的值
   */
  removeEnd(end: string): string {
    return helper.removeEnd(this.value, end);
  }

  /**
   * 将分隔符分隔的字符串转换为数组
   * @param separator 分隔符,默认：','
   */
  toArray<T>(separator: string = ','): T[] {
    return helper.toArray(this.value, separator);
  }

  /**
   * json字符串转换为对象
   */
  toJsonObject<T>(): T {
    return helper.toJsonObject(this.value);
  }

  /**
   * 泛型集合转换
   * @param separator 分隔符,默认：','
   */
  toList<T>(separator: string = ','): T[] {
    return helper.toList(this.value, separator);
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
