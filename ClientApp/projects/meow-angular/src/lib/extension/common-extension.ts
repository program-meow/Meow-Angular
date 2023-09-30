//============== 公共 扩展操作 =================
//Copyright 2023 程序喵
//Licensed under the MIT license
//================================================
import * as helper from "./../common/helper";

declare global {
  /**
   * Object 扩展定义
   */
  interface Object {
    /**
    * 自定义扩展实现
    */
    meow(): CommonExtension;
  }
}

/**
 * 自定义扩展实现
 */
Object.prototype.meow = function (): CommonExtension {
  return new CommonExtension(this);
}

export { }

/**
 * 公共 扩展操作
 */
export class CommonExtension {
  /**
   * 值
   */
  private value: any;

  /**
   * 初始化
   * @param value 值
   */
  constructor(value: any) {
    this.value = value;
  }

  /**
   * 是否未定义
   */
  isUndefined(): boolean {
    return helper.isUndefined(this.value);
  }

  /**
   * 是否字符串
   */
  isString(): boolean {
    return helper.isString(this.value);
  }

  /**
   * 是否空值，当值为undefined、null、空对象,空字符串、空Guid时返回true，其余返回false
   */
  isEmpty(): boolean {
    return helper.isEmpty(this.value);
  }

  /**
   * 是否数字，字符串"1"返回true
   */
  isNumber(): boolean {
    return helper.isNumber(this.value);
  }

  /**
   * 是否数组
   */
  isArray(): boolean {
    return helper.isArray(this.value);
  }

  /**
   * 是否空数组,undefined和null返回false,[]返回true
   */
  isEmptyArray(): boolean {
    return helper.isEmptyArray(this.value);
  }

  /**
   * 转换为数值
   * @param precision 数值精度，即小数位数，可选值为0-20
   * @param isTruncate 是否截断，传入true，则按精度截断，否则四舍五入
   */
  toNumber(precision?: number, isTruncate?: boolean): number {
    return helper.toNumber(this.value, precision, isTruncate);
  }

  /**
   * 转换为字符串
   */
  toString(): string {
    return helper.toString(this.value);
  }

  /**
   * 转换为json字符串
   */
  toJson(): string {
    return helper.toJson(this.value);
  }

  /**
   * 将对象转换为url查询字符串,即?后面的参数
   */
  toQueryString(): string {
    return helper.toQueryString(this.value);
  }

  /**
   * 通用泛型转换
   */
  to<T>(): T {
    return helper.to(this.value);
  }

  /**
   * 判断对象上是否存在指定属性,当属性值不为undefined有效,直接属性和继承属性均可
   * @param propertyName 属性名称
   */
  hasProperty(propertyName: string): boolean {
    return helper.hasProperty(this.value, propertyName);
  }

  /**
   * 复制对象
   */
  clone<T>(): T {
    return helper.clone(this.value) as T;
  }
}
