import { ViewModel } from 'meow-angular';
import { ContextMenuGroupViewModel } from './context-menu-group-view-model';
import { ContextMenuGroup } from './context-menu-group';

/**
 * 关联菜单组
 */
export class ContextMenuData extends ViewModel {
  /**
   * 索引
   */
  _index: string = "";
  /**
   * 组集合
   */
  groups: Array<ContextMenuGroup> = new Array<ContextMenuGroup>();

  /**
   * 初始化
   * @param viewModels 视图模型集合
   */
  constructor(viewModels: Array<ContextMenuGroupViewModel> = new Array<ContextMenuGroupViewModel>()) {
    super();
    this.id = this.meow.const.uuid();
    this._index = this.id.replaceAll('-', '');
    this.groups = new Array<ContextMenuGroup>();
    if (!viewModels)
      return;
    if (viewModels.length === 0)
      return;
    viewModels.forEach(t => {
      this.groups.push(new ContextMenuGroup(t, this._index));
    });
    this.groups = this.groups.sort((first, second) => {
      return first.sort - second.sort;
    });

    var count = 0;
    this.groups.forEach(group => {
      count = group.toOverallSort(count);
    });
  }
}
