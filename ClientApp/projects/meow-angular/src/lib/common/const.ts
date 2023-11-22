//============== Url常量 ========================
//Copyright 2023 程序喵
//Licensed under the MIT license
//===============================================
import { UUID } from './internal/uuid';

/**
 * 常量操作
 */
export class Const {
  /**
   * 空GUID
   */
  static guidEmpty = "00000000-0000-0000-0000-000000000000";
  /**
   * 默认GUID
   */
  static guidDefault = "00000000-0000-0000-0000-000000000001";

  /**
   * 创建唯一标识
   */
  static uuid = (): string => {
    return UUID.UUID();
  }
}
