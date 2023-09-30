//============== Array 扩展操作 =================
//Copyright 2023 程序喵
//Licensed under the MIT license
//================================================
import * as helper from "./../common/helper";

declare global {
  /**
   * Array 扩展定义
   */
  interface Array<T> {
    /**
     * 是否空数组,undefined和null返回false,[]返回true
     */
    meowIsEmpty(): boolean;
    /**
     * 添加到数组
     * @param item 项
     * @param index 索引
     */
    meowAdd(item, index?: number);
    /**
     * 从数组中移除子集
     * @param predicate 条件
     */
    meowRemoveBy<T>(predicate: (value: T) => boolean): Array<T>;
    /**
     * 分组
     * @param property 分组属性
     */
    meowGroupBy<T>(property?: (t: T) => any): Map<string, T[]>;
    /**
     * 去重复
     * @param property 属性
     */
    meowDistinctBy<T>(property?: (t: T) => any): T[];
  }
}

/**
 * 是否空数组,undefined和null返回false,[]返回true
 */
Array.prototype.meowIsEmpty = function (): boolean {
  return helper.isEmptyArray(this);
}

/**
 * 添加到数组
 * @param item 项
 * @param index 索引
 */
Array.prototype.meowAdd = function (item, index?: number) {
  return helper.add(this, item, index);
}

/**
 * 从数组中移除子集
 * @param predicate 条件
 */
Array.prototype.meowRemoveBy = function <T>(predicate: (value: T) => boolean): Array<T> {
  return helper.removeBy(this, predicate);
}

/**
 * 分组
 * @param property 分组属性
 */
Array.prototype.meowGroupBy = function <T>(property?: (t: T) => any): Map<string, T[]> {
  return helper.groupBy(this, property);
}

/**
 * 去重复
 * @param property 属性
 */
Array.prototype.meowDistinctBy = function <T>(property?: (t: T) => any): T[] {
  return helper.distinctBy(this, property);
}

export { }
