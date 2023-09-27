//============== meow操作入口 ====================
//Copyright 2023 程序喵
//Licensed under the MIT license
//================================================
import { Injector, ElementRef } from '@angular/core';
import * as Helper from './common/helper';
import { AppConfig } from './config/app-config';
import { ModuleConfig } from './config/module-config';
import { Ioc } from './common/ioc';
import { Url } from "./common/url";
import { Html } from './html/html';
import { Message } from './message/message';
import { Loading } from "./common/loading";
import { Http } from "./http/http";
import { WebApi } from "./webapi/web-api";

/**
 * 操作入口
 */
export class Meow {
  /**
   * Ioc操作
   */
  private _ioc: Ioc | undefined;
  /**
   * 页面操作
   */
  private _html: Html | undefined;
  /**
   * 消息操作
   */
  private _message: Message | undefined;
  /**
   * 加载操作
   */
  private _loading: Loading | undefined;
  /**
   * Url操作
   */
  private _url: Url;
  /**
   * Http操作
   */
  private _http: Http;
  /**
   * WebApi操作
   */
  private _webapi: WebApi;

  /**
   * 初始化操作入口
     * @param componentInjector 组件注入器
     * @param appConfig 应用配置
     * @param moduleConfig 模块配置
   */
  constructor(private componentInjector: Injector | null = null, private appConfig: AppConfig | null = null, private moduleConfig: ModuleConfig | null = null) {
  }

  /**
   * 全局注入器
   */
  static injector: Injector;

  /**
   * 公共操作
   */
  helper = Helper;

  /**
   * Ioc操作
   */
  get ioc() {
    if (!this._ioc)
      this._ioc = new Ioc(Meow.injector, this.componentInjector);
    return this._ioc;
  };

  /**
   * 页面操作
   */
  get html() {
    if (!this._html)
      this._html = new Html(this.ioc.get(ElementRef));
    return this._html;
  }

  /**
   * 消息操作
   */
  get message() {
    if (!this._message)
      this._message = new Message(this);
    return this._message;
  };

  /**
   * 加载操作
   */
  get loading() {
    if (!this._loading)
      this._loading = new Loading(this);
    return this._loading;
  };

  /**
   * Url操作
   */
  get url() {
    if (!this._url)
      this._url = new Url(this, this.moduleConfig);
    return this._url;
  };

  /**
   * Http操作
   */
  get http() {
    if (!this._http)
      this._http = new Http(this.ioc);
    return this._http;
  };

  /**
   * WebApi操作
   */
  get webapi() {
    if (!this._webapi)
      this._webapi = new WebApi(this);
    return this._webapi;
  };

  /**
   * 初始化
   * @param injector 全局注入器
   */
  static init(injector: Injector) {
    this.injector = injector;
  }

  /**
   * 获取应用配置
   */
  getAppConfig(): AppConfig {
    if (this.appConfig)
      return this.appConfig;
    return this.ioc.get(AppConfig);
  }
}
