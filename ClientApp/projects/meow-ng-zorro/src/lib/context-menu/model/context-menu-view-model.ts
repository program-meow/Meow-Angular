import { ViewModel } from 'meow-angular';
import { ContextMenuGroupViewModel } from './context-menu-group-view-model';

/**
 * 关联菜单视图模型
 */
export class ContextMenuViewModel extends ViewModel {
  /**
   * 编码
   */
  code: string = "";
  /**
   * 名称
   */
  name: string = "";
  /**
   * 图标
   */
  icon: string = "";
  /**
   * 排序
   */
  sort: number = 0;
  /**
   * 子集
   */
  childs: Array<ContextMenuGroupViewModel> = new Array<ContextMenuGroupViewModel>();
}
