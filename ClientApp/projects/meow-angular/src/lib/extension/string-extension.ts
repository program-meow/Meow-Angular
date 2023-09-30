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
     * 移除起始字符串
     * @param start 要移除的值
     */
    meowRemoveStart(start: string): string;
    /**
     * 移除末尾字符串
     * @param end 要移除的值
     */
    meowRemoveEnd(end: string): string;
    /**
     * 将分隔符分隔的字符串转换为数组
     * @param separator 分隔符,默认：','
     */
    meowToArray<T>(separator?: string): T[];
    /**
     * json字符串转换为对象
     */
    meowToJsonObject<T>(): T;
    /**
     * 泛型集合转换
     * @param separator 分隔符,默认：','
     */
    meowToList<T>(separator?: string): T[];
    /**
     * 左补位
     * @param totalWidth 总长度,默认:2
     * @param paddingChar 填充字符,默认:'0'
     */
    meowToPadLeft(totalWidth?: number, paddingChar?: string): string;
    /**
     * 右补位
     * @param totalWidth 总长度,默认:2
     * @param paddingChar 填充字符,默认:'0'
    */
    meowToPadRight(totalWidth?: number, paddingChar?: string): string;
  }
}

/**
 * 移除起始字符串
 * @param start 要移除的值
 */
String.prototype.meowRemoveStart = function (start: string): string {
  return helper.removeStart(this as string, start);
}

/**
 * 移除末尾字符串
 * @param end 要移除的值
 */
String.prototype.meowRemoveEnd = function (end: string): string {
  return helper.removeEnd(this as string, end);
}

/**
 * 将分隔符分隔的字符串转换为数组
 * @param separator 分隔符,默认：','
 */
String.prototype.meowToArray = function <T>(separator: string = ','): T[] {
  return helper.toArray(this as string, separator);
}

/**
 * json字符串转换为对象
 */
String.prototype.meowToJsonObject = function <T>(): T {
  return helper.toJsonObject(this as string);
}

/**
 * 泛型集合转换
 * @param separator 分隔符,默认：','
 */
String.prototype.meowToList = function <T>(separator: string = ','): T[] {
  return helper.toList(this as string, separator);
}

/**
 * 左补位
 * @param totalWidth 总长度,默认:2
 * @param paddingChar 填充字符,默认:'0'
 */
String.prototype.meowToPadLeft = function (totalWidth: number = 2, paddingChar: string = '0'): string {
  return helper.toPadLeft(this, totalWidth, paddingChar);
}

/**
 * 右补位
 * @param totalWidth 总长度,默认:2
 * @param paddingChar 填充字符,默认:'0'
*/
String.prototype.meowToPadRight = function (totalWidth: number = 2, paddingChar: string = '0'): string {
  return helper.toPadRight(this, totalWidth, paddingChar);
}

export { }
