//============== 元素操作 ========================
//Copyright 2023 程序喵
//Licensed under the MIT license
//================================================

/**
 * 元素操作
 */
export class Element {
  /**
   * 初始化元素操作
   */
  constructor() {
  }

  /**
   * Document对象
   * @returns
   */
  document(): Document {
    return document;
  }

  /**
   * Document元素
   * @returns
   */
  documentElement(): HTMLElement {
    return this.document().documentElement;
  }

  /**
   * 根据class名获取所有元素
   * @param className class名
   */
  getAllByClassName(className: string): Array<HTMLElement> {
    var result = new Array<HTMLElement>();
    if (!className)
      return result;
    var elements = this.document().getElementsByClassName(className);
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

  /**
   * 根据标识获取元素
   * @param elementId 元素标识
   * @returns Html元素
   */
  getElementById(elementId: string): HTMLElement | null {
    return this.document()?.getElementById(elementId);
  }

  /**
   * 在hear中创建样式
   * @param styleHtmlStr 样式Html字符串
   * @param styleId 样式标识
   * @param dataType 数据类型
   */
  createStyle(styleHtmlStr: string, styleId?: string, dataType?: string) {
    let style = this.document()?.createElement('style');
    if (!style)
      return;
    style.id = styleId;
    style.setAttribute('data-type', dataType);
    style.innerHTML = styleHtmlStr;
    this.document()?.querySelectorAll('head')[0].appendChild(style);
  }

}
