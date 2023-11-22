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
}
