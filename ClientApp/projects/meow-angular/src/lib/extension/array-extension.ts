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
     * 自定义扩展实现
     */
    meow<T>(): ArrayExtension<T>;
  }
}

/**
 * 自定义扩展实现
 */
Array.prototype.meow = function <T>(): ArrayExtension<T> {
  return new ArrayExtension(this);
}

export { }

/**
 * Array 扩展操作
 */
export class ArrayExtension<T> {
  /**
   * 值
   */
  private value: Array<T>;

  /**
   * 初始化
   * @param value 值
   */
  constructor(value: Array<T>) {
    this.value = value;
  }

  /**
   * 是否空数组,undefined和null返回false,[]返回true
   */
  isEmpty(): boolean {
    return helper.isEmptyArray(this.value);
  }

  /**
   * 添加到数组
   * @param item 项
   * @param index 索引
   */
  add(item, index?: number) {
    return helper.add(this.value, item, index);
  }

  /**
   * 从数组中移除子集
   * @param predicate 条件
   */
  removeBy(predicate: (value: T) => boolean): Array<T> {
    return helper.removeBy(this.value, predicate);
  }

  /**
   * 分组
   * @param property 分组属性
   */
  groupBy(property?: (t: T) => any): Map<string, T[]> {
    return helper.groupBy(this.value, property);
  }

  /**
   * 去重复
   * @param property 属性
   */
  distinctBy(property?: (t: T) => any): T[] {
    return helper.distinctBy(this.value, property);
  }
}
