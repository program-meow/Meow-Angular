//================ 应用配置 ==============================
//Copyright 2023 程序喵
//Licensed under the MIT license
//========================================================
import { Injectable } from '@angular/core';
import { AuthorConfig } from './author-config'

/**
 * 应用配置
 */
@Injectable()
export class AppConfig {
  /**
   * 著作配置
   */
  author: AuthorConfig = new AuthorConfig();
}

/**
 * 初始化应用配置
 * @param config 应用配置
 */
export function initAppConfig(config: AppConfig) {
  if (!config)
    return;
}
