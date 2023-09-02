//============== 样式操作 ========================
//Copyright 2023 程序喵
//Licensed under the MIT license
//================================================

/**
 * 样式操作
 */
export class Style {
  /**
   * 初始化样式操作
   */
  constructor() {
  }

  /**
   * 设置属性
   * @param key 键
   * @param value 值
   * @param id ID
   */
  property(key: string, value: any, id: string | null = null): void {
    const element = id ? document.querySelector(id) as HTMLElement : document.documentElement;
    if (!element)
      return;
    element.style.setProperty(key, value);
  }

  /**
   * 设置属性
   * @param properties 属性字典
   * @param id ID
   */
  properties(properties: Record<string, any>, id: string | null = null): void {
    const element = id ? document.querySelector(id) as HTMLElement : document.documentElement;
    if (!element)
      return;
    const themeKeys = Object.keys(properties);
    themeKeys.forEach(key => {
      element.style.setProperty(key, properties[key]);
    })
  }
}
