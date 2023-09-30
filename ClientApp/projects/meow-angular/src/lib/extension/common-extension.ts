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
    meowIsUndefined(): boolean;
    /**
     * 是否字符串
     */
    meowIsString(): boolean;
    /**
     * 是否空值，当值为undefined、null、空对象,空字符串、空Guid时返回true，其余返回false
     */
    meowIsEmpty(): boolean;
    /**
     * 是否数字，字符串"1"返回true
     */
    meowIsNumber(): boolean;
    /**
     * 是否数组
     */
    meowIsArray(): boolean;
    /**
     * 是否空数组,undefined和null返回false,[]返回true
     */
    meowIsEmptyArray(): boolean;
    /**
     * 转换为数值
     * @param precision 数值精度，即小数位数，可选值为0-20
     * @param isTruncate 是否截断，传入true，则按精度截断，否则四舍五入
     */
    meowToNumber(precision?: number, isTruncate?: boolean): number;
    /**
     * 转换为字符串
     */
    meowToString(): string;
    /**
     * 转换为json字符串
     */
    meowToJson(): string;
    /**
     * 将对象转换为url查询字符串,即?后面的参数
     */
    meowToQueryString(): string;
    /**
     * 通用泛型转换
     */
    meowTo<T>(): T;
    /**
     * 判断对象上是否存在指定属性,当属性值不为undefined有效,直接属性和继承属性均可
     * @param propertyName 属性名称
     */
    meowHasProperty(propertyName: string): boolean;
    /**
     * 复制对象
     */
    meowClone<T>(): T;
  }
}

/**
 * 是否未定义
 */
Object.prototype.meowIsUndefined = function (): boolean {
  return helper.isUndefined(this);
}

/**
 * 是否字符串
 */
Object.prototype.meowIsString = function (): boolean {
  return helper.isString(this);
}

/**
 * 是否空值，当值为undefined、null、空对象,空字符串、空Guid时返回true，其余返回false
 */
Object.prototype.meowIsEmpty = function (): boolean {

  return helper.isEmpty(this);
}

/**
 * 是否数字，字符串"1"返回true
 */
Object.prototype.meowIsNumber = function (): boolean {
  return helper.isNumber(this);
}

/**
 * 是否数组
 */
Object.prototype.meowIsArray = function (): boolean {
  return helper.isArray(this);
}

/**
 * 是否空数组,undefined和null返回false,[]返回true
 */
Object.prototype.meowIsEmptyArray = function (): boolean {
  return helper.isEmptyArray(this);
}

/**
 * 转换为数值
 * @param precision 数值精度，即小数位数，可选值为0-20
 * @param isTruncate 是否截断，传入true，则按精度截断，否则四舍五入
 */
Object.prototype.meowToNumber = function (precision?: number, isTruncate?: boolean): number {
  return helper.toNumber(this, precision, isTruncate);
}

/**
 * 转换为字符串
 */
Object.prototype.meowToString = function (): string {
  return helper.toString(this);
}

/**
 * 转换为json字符串
 */
Object.prototype.meowToJson = function (): string {
  return helper.toJson(this);
}

/**
 * 将对象转换为url查询字符串,即?后面的参数
 */
Object.prototype.meowToQueryString = function (): string {
  return helper.toQueryString(this);
}

/**
 * 通用泛型转换
 */
Object.prototype.meowTo = function <T>(): T {
  return helper.to(this);
}

/**
 * 判断对象上是否存在指定属性,当属性值不为undefined有效,直接属性和继承属性均可
 * @param propertyName 属性名称
 */
Object.prototype.meowHasProperty = function (propertyName: string): boolean {
  return helper.hasProperty(this, propertyName);
}

/**
 * 复制对象
 */
Object.prototype.meowClone = function <T>(): T {
  return helper.clone(this) as T;
}

export { }
