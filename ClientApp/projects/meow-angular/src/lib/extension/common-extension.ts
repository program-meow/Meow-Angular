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
     * 是否未定义
     */
    isUndefined(): boolean;
    /**
     * 是否字符串
     */
    isString(): boolean;
    /**
     * 是否空值，当值为undefined、null、空对象,空字符串、空Guid时返回true，其余返回false
     */
    isEmpty(): boolean;
    /**
     * 是否数字，字符串"1"返回true
     */
    isNumber(): boolean;
    /**
     * 是否数组
     */
    isArray(): boolean;
    /**
     * 是否空数组,undefined和null返回false,[]返回true
     */
    isEmptyArray(): boolean;
    /**
     * 转换为数值
     * @param precision 数值精度，即小数位数，可选值为0-20
     * @param isTruncate 是否截断，传入true，则按精度截断，否则四舍五入
     */
    toNumber(precision?: number, isTruncate?: boolean): number;
    /**
     * 转换为字符串
     */
    toString(): string;
    /**
     * 转换为json字符串
     */
    toJson(): string;
    /**
     * 将对象转换为url查询字符串,即?后面的参数
     */
    toQueryString(): string;
    /**
     * 通用泛型转换
     */
    to<T>(): T;
    /**
     * 判断对象上是否存在指定属性,当属性值不为undefined有效,直接属性和继承属性均可
     * @param propertyName 属性名称
     */
    hasProperty(propertyName: string): boolean;
    /**
     * 复制对象
     */
    clone<T>(): T;
  }
}

/**
 * 是否未定义
 */
Object.prototype.isUndefined = function (): boolean {
  return helper.isUndefined(this);
}

/**
 * 是否字符串
 */
Object.prototype.isString = function (): boolean {
  return helper.isString(this);
}

/**
 * 是否空值，当值为undefined、null、空对象,空字符串、空Guid时返回true，其余返回false
 */
Object.prototype.isEmpty = function (): boolean {

  return helper.isEmpty(this);
}

/**
 * 是否数字，字符串"1"返回true
 */
Object.prototype.isNumber = function (): boolean {
  return helper.isNumber(this);
}

/**
 * 是否数组
 */
Object.prototype.isArray = function (): boolean {
  return helper.isArray(this);
}

/**
 * 是否空数组,undefined和null返回false,[]返回true
 */
Object.prototype.isEmptyArray = function (): boolean {
  return helper.isEmptyArray(this);
}

/**
 * 转换为数值
 * @param precision 数值精度，即小数位数，可选值为0-20
 * @param isTruncate 是否截断，传入true，则按精度截断，否则四舍五入
 */
Object.prototype.toNumber = function (precision?: number, isTruncate?: boolean): number {
  return helper.toNumber(this, precision, isTruncate);
}

/**
 * 转换为字符串
 */
Object.prototype.toString = function (): string {
  return helper.toString(this);
}

/**
 * 转换为json字符串
 */
Object.prototype.toJson = function (): string {
  return helper.toJson(this);
}

/**
 * 将对象转换为url查询字符串,即?后面的参数
 */
Object.prototype.toQueryString = function (): string {
  return helper.toQueryString(this);
}

/**
 * 通用泛型转换
 */
Object.prototype.to = function <T>(): T {
  return helper.to(this);
}

/**
 * 判断对象上是否存在指定属性,当属性值不为undefined有效,直接属性和继承属性均可
 * @param propertyName 属性名称
 */
Object.prototype.hasProperty = function (propertyName: string): boolean {
  return helper.hasProperty(this, propertyName);
}

/**
 * 复制对象
 */
Object.prototype.clone = function <T>(): T {
  return helper.clone(this) as T;
}

export { }
