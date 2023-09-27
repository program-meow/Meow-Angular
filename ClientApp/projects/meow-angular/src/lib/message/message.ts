//============== 消息操作 =========================
//Copyright 2023 程序喵
//Licensed under the MIT license
//================================================
import { Meow } from '../meow';
import { AppConfig, initAppConfig } from '../config/app-config';

/**
 * 消息操作
 */
export class Message {
  /**
   * 应用配置
   */
  private _config: AppConfig;

  /**
   * 
   * @param ioc Ioc操作
   */
  constructor(private meow: Meow) {
    this._config = this.meow.ioc.get(AppConfig);
    initAppConfig(this._config);
  }

  /**
   * 成功消息
   * @param message 消息
   */
  success(message: string) {
    if (!message)
      return;
  }

  /**
   * 信息消息
   * @param message 消息
   */
  info(message: string) {
    if (!message)
      return;
  }

  /**
   * 警告消息
   * @param message 消息
   */
  warn(message: string) {
    if (!message)
      return;
  }

  /**
   * 错误消息
   * @param message 消息
   */
  error(message: string) {
    if (!message)
      return;
  }

}
