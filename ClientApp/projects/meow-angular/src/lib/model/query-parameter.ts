//============== 查询参数 =========================
//Copyright 2023 程序喵
//Licensed under the MIT license
//=================================================
import { Model } from "./model";
import { DefaultConfig } from "../config/default-config";

/**
 * 查询参数
 */
export class QueryParameter extends Model {
  /**
   * 初始化查询参数
   */
  constructor() {
    super();
    this.page = 1;
    this.pageSize = DefaultConfig.pageSize;
  }

  /**
   * 页索引，即第几页
   */
  page?: number;
  /**
   * 每页显示行数
   */
  pageSize?: number;
  /**
   * 排序条件
   */
  order?: string;
  /**
   * 搜索关键字
   */
  keyword?: string;
}
