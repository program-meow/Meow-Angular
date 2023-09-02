//============== 服务基类 ========================
//Copyright 2023 程序喵
//Licensed under the MIT license
//================================================
import { Injector, Injectable } from '@angular/core';
import { Meow } from "./../meow";

/**
 * 服务基类
 */
@Injectable({
  providedIn: 'root',
})
export abstract class ServiceBase {
  /**
   * 公共操作
   */
  protected meow: Meow;

  /**
   * 初始化服务
   * @param injector 注入器
   */
  constructor(injector: Injector) {
    this.meow = new Meow(injector);
  }
}
