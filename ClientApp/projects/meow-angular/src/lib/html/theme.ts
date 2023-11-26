//============== 主题操作 ========================
//Copyright 2023 程序喵
//Licensed under the MIT license
//================================================
import { Meow } from "../meow";

/**
 * 主题操作
 */
export class Theme {
  /**
   * 储存键
   */
  private STORE_KEY = '___theme___';

  /**
   * 公共操作
   */
  private _meow: Meow;

  /**
   * 初始化主题操作
   */
  constructor() {
    this._meow = new Meow();
  }

  /**
   * 设置自定义主题
   * @param datas 主题数据
   * @param themeId 主题标识
   * @returns 色调
   */
  set(datas: Map<string, Map<string, string>>, themeId?: string): string {
    this.setTheme(datas, themeId);
    return this.setDefaultTone(datas);
  }

  /**
   * 设置自定义主题
   * @param datas 主题数据
   * @param themeId 主题标识
   */
  private setTheme(datas: Map<string, Map<string, string>>, themeId?: string): void {
    themeId ||= 'customize-theme-style';
    let innerHTML = this.getStyleHtml(datas);
    let theme = this._meow.html.element.getElementById(themeId);
    if (theme) {
      theme.innerHTML = innerHTML;
      return;
    }
    this._meow.html.element.createStyle(innerHTML, themeId, 'customize-theme');
  }

  /**
   * 设置默认色调
   * @param datas 主题数据
   * @returns 色调
   */
  private setDefaultTone(datas: Map<string, Map<string, string>>): string {
    let tones = new Array<string>();
    datas?.forEach((value, key) => tones.push(key));
    if (tones.length < 1)
      return '';
    var defaultTone = this._meow.storage.getLocalItem<string>(this.STORE_KEY);
    defaultTone = tones.includes(defaultTone) ? defaultTone : tones[0];
    this._meow.storage.setLocalItem(this.STORE_KEY, defaultTone);
    this.select(defaultTone);
    return defaultTone;
  }

  /**
   * 获取主题样式Html
   * @param datas 主题数据
   * @returns 样式Html
   */
  private getStyleHtml(datas: Map<string, Map<string, string>>): string {
    let innerHTML = ``;
    if (!datas)
      return innerHTML;
    datas.forEach((value, key) => {
      innerHTML += this.getToneStyleHtml(key, value)
    })
    return innerHTML;
  }

  /**
   * 获取色调主题样式Html
   * @param tone 色调
   * @param properties 属性
   * @returns 样式Html
   */
  private getToneStyleHtml(tone: string, properties: Map<string, string>): string {
    let innerHTML = `
      `;
    if (!properties)
      return innerHTML;
    properties.forEach((value, key) => {
      innerHTML += `   ${key}:${value};
      `;
    })
    return `
      html[data-theme='${tone}'] {${(innerHTML)}}`;
  }

  /**
   * 选择主题
   * @param tone 色调
   * @returns 色调
   */
  select(tone: string): string {
    if (!tone)
      return '';
    this._meow.storage.setLocalItem(this.STORE_KEY, tone);
    this._meow.html.element.documentElement().dataset['theme'] = tone;
    return tone;
  }

  /**
   * 获取当前色调
   * @returns 色调
   */
  getTone(): string {
    return this._meow.storage.getLocalItem<string>(this.STORE_KEY);
  }
}
