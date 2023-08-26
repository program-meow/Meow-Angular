//============== 滚动条操作 ======================
//Copyright 2023 程序喵
//Licensed under the MIT license
//================================================
import { ElementRef } from '@angular/core';

/**
 * 滚动条操作
 */
export class Scroll {
  /**
   * 初始化滚动条操作
   * @param elementRef 元素
   */
  constructor(private elementRef: ElementRef) {
  }

  /**
   * 定位
   * @param name 元素名 例：class => .class name
   * @param locate 定位 从顶部开始计算
   */
  location(name: string, locate: number): void {
    var editorhtml = this.elementRef.nativeElement.querySelector(name);
    if (!editorhtml)
      return;
    editorhtml.scrollTop = locate;
  }

}
