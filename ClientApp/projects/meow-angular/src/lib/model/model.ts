//============== 模型 ========================
//Copyright 2023 程序喵
//Licensed under the MIT license
//============================================
import { Meow } from "./../meow";

/**
 * 模型
 */
export class Model {
  /**
   * 公共操作
   */
  protected meow: Meow;

  /**
   * 初始化模型
   */
  constructor() {
    this.meow = new Meow(Meow.injector);
  }
}
