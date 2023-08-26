//============== Html操作 ========================
//Copyright 2023 程序喵
//Licensed under the MIT license
//================================================
import { ElementRef } from '@angular/core';
import { Scroll } from './scroll';
import { Mouse } from './mouse';

/**
 * Html操作
 */
export class Html {

  /**
   * 滚动条操作
   */
  private _scroll: Scroll | undefined;

  /**
   * 鼠标操作
   */
  private _mouse: Mouse | undefined;

  /**
   * 初始化Ioc操作
   * @param elementRef 元素
   */
  constructor(private elementRef: ElementRef) {
  }

  /**
   * 滚动条操作
   * @returns
   */
  get scroll(): Scroll {
    if (!this._scroll)
      this._scroll = new Scroll(this.elementRef);
    return this._scroll;
  }

  /**
   * 鼠标操作
   * @returns
   */
  get mouse(): Mouse {
    if (!this._mouse)
      this._mouse = new Mouse();
    return this._mouse;
  }
}
