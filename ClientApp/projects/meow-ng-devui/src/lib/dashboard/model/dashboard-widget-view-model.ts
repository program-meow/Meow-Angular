import { ViewModel } from 'meow-angular';
import { GridStackOptions } from 'gridstack';

/**
 * 仪表盘控件
 */
export class DashboardWidgetViewModel extends ViewModel {
  /**
   * x轴位置 (默认: 0)
   */
  x: number = 0;
  /**
   * y轴位置 (默认: 0)
   */
  y: number = 0;
  /**
   * 宽度 (默认: 1)
   */
  width: number = 1;
  /**
   * 高度 (默认: 1)
   */
  height: number = 1;
  /**
   * 如果为true，则x、y参数将被忽略，小部件将被放置在第一个可用位置 (默认: false)
   */
  autoPosition: boolean = false;
  /**
   * 调整大小/创建过程中允许的最小宽度 (默认: 1)
   */
  minWidth: number = 1;
  /**
   * 调整大小/创建过程中允许的最大宽度 (默认: 1)
   */
  maxWidth: number = 100;
  /**
   * 调整大小/创建过程中允许的最小高度 (默认: 1)
   */
  minHeight: number = 1;
  /**
   * 调整大小/创建过程中允许的最大高度 (默认: 1)
   */
  maxHeight: number = 100;
  /**
   * 阻止调整大小 (默认: false)
   */
  noResize: boolean = false;
  /**
   * 阻止移动 (默认: false)
   */
  noMove: boolean = false;
  /**
   * 锁定 (默认: false)
   */
  locked: boolean = false;
  /**
   * html作为内容附加到内部
   */
  content: string = '';
  /**
   * 可选的嵌套网格选项和子项列表，然后在运行时转换为实际实例以从中获取选项
   */
  subGridOpts: GridStackOptions = null;
  /**
   * 组件数据
   */
  widgetData: any = null;
}
