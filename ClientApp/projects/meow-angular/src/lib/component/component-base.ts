//============== 组件基类 ========================
//Copyright 2023 程序喵
//Licensed under the MIT license
//================================================
import { Injector, Component } from '@angular/core';
import { Meow } from "./../meow";

/**
 * 组件基类
 */
@Component({
  template: ''
})
export abstract class ComponentBase {
  /**
   * 公共操作
   */
  protected meow: Meow;

  /**
   * 初始化组件
   * @param injector 注入器
   */
  constructor(injector: Injector) {
    this.meow = new Meow(injector);
  }
}
