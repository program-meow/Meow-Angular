//============== 元素操作 ========================
//Copyright 2023 程序喵
//Licensed under the MIT license
//================================================

/**
 * 元素操作
 */
export class Element {
  /**
   * 初始化样式操作
   */
  constructor() {
  }

  /**
   * 根据class名获取所有元素
   * @param className class名
   */
  getAllByClassName(className: string): Array<HTMLElement> {
    var result = new Array<HTMLElement>();
    if (!className)
      return result;
    var elements = document.getElementsByClassName(className);
    if (!elements)
      return result;
    if (elements.length === 0)
      return result;
    for (var i = 0; i < elements.length; i++) {
      result.push(elements[i] as HTMLElement);
    }
    return result;
  }

  /**
   * 根据class名获取元素
   * @param className class名
   */
  getByClassName(className: string): HTMLElement {
    var elements = this.getAllByClassName(className);
    if (!elements)
      return null;
    if (elements.length === 0)
      return null;
    return elements[0];
  }
}
