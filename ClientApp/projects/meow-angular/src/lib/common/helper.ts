//============== 辅助操作 ========================
//Copyright 2023 程序喵
//Licensed under the MIT license
//================================================
import {
  trimEnd as systemTrimEnd, trimStart as systemTrimStart, remove as systemRemove, isEmpty as systemIsEmpty, groupBy as systemGroupBy,
  hasIn, cloneDeep, assign as systemAssign, toString as systemToString, split as systemSplit, toPairs, uniqBy
} from "lodash-es";
import { format as systemFormat } from 'date-fns'
import { UUID } from './internal/uuid';

/**
 * 创建唯一标识
 */
export let uuid = (): string => {
  return UUID.UUID();
}

/**
 * 是否空值，当值为undefined、null、空对象,空字符串、空Guid时返回true，其余返回false
 * @param value 值
 */
export let isEmpty = (value): boolean => {
  if (typeof value === "number")
    return false;
  if (typeof value == "boolean")
    return false;
  if (value && value.trim)
    value = value.trim();
  if (!value)
    return true;
  if (value === "00000000-0000-0000-0000-000000000000")
    return true;
  return systemIsEmpty(value);
}

/**
 * 左补位
 * @param value 值
 * @param totalWidth 总长度
 * @param paddingChar 填充字符
*/
export let padLeft = (value: any, totalWidth: number = 2, paddingChar: string = '0'): string => {
  value = String(value);
  while (value.length < totalWidth) {
    value = paddingChar + value;
  }
  return value;
}

/**
 * 右补位
 * @param value 值
 * @param totalWidth 总长度
 * @param paddingChar 填充字符
*/
export let padRight = (value: any, totalWidth: number = 2, paddingChar: string = '0'): string => {
  value = String(value);
  while (value.length < totalWidth) {
    value = value + paddingChar;
  }
  return value;
}

/**
 * 将对象转换为url查询字符串,即?后面的参数
 * @param obj 对象
 */
export let toQueryString = (obj): string => {
  if (!obj)
    return null;
  return toPairs(obj)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
}

/**
 *  格式化日期
 * @param datetime 日期
 * @param format 格式化字符串，范例：yyyy-MM-dd,可选值：(注意：区分大小写)
 * (1) 年: yyyy
 * (2) 月: MM
 * (3) 日: dd
 * (4) 时: HH
 * (5) 分: mm
 * (6) 秒: ss
 * (7) 毫秒: SSS
 */
export let formatDate = (datetime, format: string = 'yyyy-MM-dd HH:mm:ss'): string => {
  if (!format)
    format = 'yyyy-MM-dd HH:mm:ss';
  format = format.replace(/Y/g, "y").replace(/D/g, "d");
  return systemFormat(datetime, format);
}

/**
 * json字符串转换为对象
 * @param json json字符串
 */
export let toObjectFromJson = <T>(json: string): T => {
  return JSON.parse(json);
}

/**
 * Blob转换为字符串
 * @param value 二进制大对象值
 */
export let blobToStringAsync = async (value: Blob): Promise<string> => {
  var decoder = new TextDecoder('utf-8');
  let buffer = await value.arrayBuffer();
  return decoder.decode(new Uint8Array(buffer));
}

/**
 * 移除起始字符串
 * @param source 值
 * @param start 要移除的值
 */
export let trimStart = (value: string, start: string) => {
  return systemTrimStart(value, start);
}

/**
 * 移除末尾字符串
 * @param source 值
 * @param end 要移除的值
 */
export let trimEnd = (value: string, end: string) => {
  return systemTrimEnd(value, end);
}

/**
 * 连接url
 * @param url 地址
 * @param path 路径
 */
export let joinUrl = (url: string, path: string) => {
  if (!url || !path)
    return url;
  url = trimEnd(url, "/");
  path = trimStart(path, "/");
  return `${url}/${path}`;
}

/**
 * 获取地址
 * @param url 请求地址
 * @param host 主机
 * @param path 路径
 */
export function getUrl(url: string, host: string = null, path: string = null) {
  url = getHostUrl(url, host);
  return joinUrl(url, path);
}

/**
 * 获取地址
 */
function getHostUrl(url: string, host: string) {
  if (!url)
    return null;
  if (url.startsWith("http"))
    return url;
  host = trimEnd(host, "/");
  if (url.startsWith("/")) {
    if (host)
      return `${host}${url}`;
    return url;
  }
  if (host)
    return `${host}/api/${url}`;
  return `/api/${url}`;
}
