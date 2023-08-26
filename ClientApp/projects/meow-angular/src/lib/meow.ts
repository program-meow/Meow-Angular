//============== meow操作入口 ====================
//Copyright 2023 程序喵
//Licensed under the MIT license
//================================================
import { Injector, ElementRef } from '@angular/core';
import * as Helper from './common/helper';
import { Ioc } from './common/ioc';
import { Html } from './html/html';

/**
 * 操作入口
 */
export class Meow {
  /**
   * Ioc操作
   */
  private _ioc: Ioc | undefined;

  /**
   * 页面操作
   */
  private _html: Html | undefined;


  /**
   * 初始化操作入口
   * @param componentInjector 组件注入器
   */
  constructor(private componentInjector: Injector | null = null) {
  }

  /**
   * 全局注入器
   */
  static injector: Injector;

  /**
   * 公共操作
   */
  helper = Helper;

  /**
   * Ioc操作
   */
  get ioc() {
    if (!this._ioc)
      this._ioc = new Ioc(Meow.injector, this.componentInjector);
    return this._ioc;
  };

  /**
   * 页面操作
   */
  get html() {
    if (!this._html)
      this._html = new Html(this.ioc.get(ElementRef));
    return this._html;
  }

  /**
   * 初始化
   * @param injector 全局注入器
   */
  static init(injector: Injector) {
    this.injector = injector;
  }
}
