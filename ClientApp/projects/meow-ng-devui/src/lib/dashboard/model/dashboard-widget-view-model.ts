import { ViewModel } from 'meow-angular';

/**
 * 仪表盘控件
 */
export class DashboardWidgetViewModel extends ViewModel {
  /**
   * 坐标 x（第 x 行），首行为第 0 行
   */
  x: number = 0;
  /**
   * 坐标 y（第 y 列），首列为第 0 列
   */
  y: number = 0;
  /**
   * widget 宽度（单位列）
   */
  width: number = 1;
  /**
   * widget 高度（单位行）
   */
  height: number = 1;
  /**
   * widget 调整大小最大宽度，0 为不限制
   */
  maxWidth: number = 0;
  /**
   * widget 调整大小最大高度，0 为不限制
   */
  maxHeight: number = 0;
  /**
   * widget 调整大小最小宽度，0 为不限制
   */
  minWidth: number = 0;
  /**
   * widget 调整大小最小高度，0 为不限制
   */
  minHeight: number = 0;
  /**
   * widget 是否允许调整大小
   */
  noResize: boolean = false;
  /**
   * widget 是否允许移动
   */
  noMove: boolean = false;
  /**
   * 是否忽略 x，y 自动寻找空位，仅初始化有效
   */
  autoPosition: boolean = false;
  /**
   * widget 是否锁定位置，不被其他 widget 位置挤压
   */
  locked: boolean = false;
  /**
   * 用户自定义数据，可用于区分传递等等
   */
  widgetData: any = null;
}
