//============== 鼠标操作 ======================
//Copyright 2023 程序喵
//Licensed under the MIT license
//================================================

import { MouseLocation } from './model/mouse-location';

/**
 * 鼠标操作
 */
export class Mouse {
  /**
   * 初始化鼠标操作
   */
  constructor() {
  }

  /**
   * 获取定位
   * @param event 鼠标事件 前端使用 $event
   */
  location(event: any): MouseLocation {
    var result = new MouseLocation();
    if (!event) {
      event = window.event;
    }
    if (event.pageX || event.pageY) {
      result.x = event.pageX;
      result.y = event.pageY;
    }
    else if (event.clientX || event.clientY) {
      result.x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      result.y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    result.relativeX = result.x;
    result.relativeY = result.y;
    if (event.target) {
      var offEl = event.target;
      var offX = 0;
      var offY = 0;
      if (typeof (offEl.offsetParent) != "undefined") {
        while (offEl) {
          offX += offEl.offsetLeft;
          offY += offEl.offsetTop;
          offEl = offEl.offsetParent;
        }
      }
      else {
        offX = offEl.x;
        offY = offEl.y;
      }
      result.relativeX -= offX;
      result.relativeY -= offY;
    }
    result.domId = event.target.id;
    return result;
  }
}
