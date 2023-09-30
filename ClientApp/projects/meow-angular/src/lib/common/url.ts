//============== Url操作 ============================
//Copyright 2023 程序喵
//Licensed under the MIT license
//===================================================
import { Meow } from "../meow";
import { ModuleConfig } from "../config/module-config";

/**
 * Url操作
 */
export class Url {
  /**
   * 查询对象
   */
  private _query;

  /**
   * 初始化Url操作
   * @param meow 公共操作
   * @param moduleConfig 模块配置
   */
  constructor(private meow: Meow, private moduleConfig: ModuleConfig = null) {
  }

  /**
   * 设置查询参数
   * @param obj 查询参数
   */
  query(obj): Url {
    this._query = obj;
    return this;
  }

  /**
   * 获取Url
   * @param url Url地址
   * @param paths 路径
   */
  get(url: string, ...paths: string[]): string {
    let apiEndpoint = this.meow.getAppConfig().apiEndpoint;
    let path = this.getPath(paths);
    let result = this.meow.helper.getUrl(this.getUrl(url), apiEndpoint, path)
    let queryString = this.meow.helper.toQueryString(this._query);
    if (queryString)
      result += `?${queryString}`;
    return result;
  }

  /**
   * 获取Api前缀
   */
  private getUrl(url: string) {
    if (!url)
      return url;
    if (url.startsWith("/"))
      return url;
    let apiPrefix = this.getApiPrefix();
    if (!apiPrefix)
      return url;
    apiPrefix = this.meow.helper.removeStart(apiPrefix, "/");
    apiPrefix = this.meow.helper.removeEnd(apiPrefix, "/");
    return `/${apiPrefix}/api/${url}`;
  }

  /**
   * 获取Api前缀
   */
  private getApiPrefix() {
    let moduleConfig = this.moduleConfig || this.meow.ioc.get(ModuleConfig);
    return moduleConfig && moduleConfig.apiPrefix;
  }

  /**
   * 获取路径
   */
  private getPath(paths: string[]) {
    let result = "";
    if (!paths || paths.length === 0)
      return result;
    paths.forEach(path => {
      if (this.meow.helper.isEmpty(path))
        return;
      path = path.replace("\\", "/");
      if (path.endsWith("/"))
        path = this.meow.helper.removeEnd(path, "/");
      result += path;
    });
    return result;
  }
}
