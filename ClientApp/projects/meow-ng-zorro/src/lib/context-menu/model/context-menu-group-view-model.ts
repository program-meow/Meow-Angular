import { ViewModel } from 'meow-angular';
import { ContextMenuViewModel } from './context-menu-view-model';

/**
 * 关联菜单视图模型
 */
export class ContextMenuGroupViewModel extends ViewModel {
  /**
   * 编码
   */
  code: string = "";
  /**
   * 名称
   */
  name: string = "";
  /**
   * 排序
   */
  sort: number = 0;
  /**
   * 子集
   */
  menus: Array<ContextMenuViewModel> = new Array<ContextMenuViewModel>();
}
