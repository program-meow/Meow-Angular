//============== Html操作 ========================
//Copyright 2023 程序喵
//Licensed under the MIT license
//================================================
import { ElementRef } from '@angular/core';
import { Scroll } from './scroll';
import { Mouse } from './mouse';
import { Style } from './style';
import { Element } from './element';

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
   * 样式操作
   */
  private _style: Style | undefined;

  /**
   * 元素操作
   */
  private _element: Element | undefined;

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

  /**
   * 样式操作
   * @returns
   */
  get style(): Style {
    if (!this._style)
      this._style = new Style();
    return this._style;
  }

  /**
   * 元素操作
   * @returns
   */
  get element(): Element {
    if (!this._element)
      this._element = new Element();
    return this._element;
  }
}
