import { ContextMenuGroupViewModel } from './context-menu-group-view-model';
import { ContextMenu } from './context-menu';

/**
 * 关联菜单组
 */
export class ContextMenuGroup extends ContextMenuGroupViewModel {
  /**
   * 索引
   */
  _index: string = "";
  /**
   * 父索引
   */
  _parent_index: string = "";
  /**
   * 子集
   */
  override menus: Array<ContextMenu> = new Array<ContextMenu>();

  /**
   * 初始化
   * @param viewModel 视图模型
   * @param _parent_index 父索引
   */
  constructor(viewModel: ContextMenuGroupViewModel, _parent_index: string = "") {
    super();
    this.map(viewModel, _parent_index);
    this.toSort();
  }

  /**
   * 映射
   * @param viewModel 视图模型
   * @param _parent_index 父索引
   */
  private map(viewModel: ContextMenuGroupViewModel, _parent_index: string) {
    this.id = viewModel.id || this.meow.const.uuid();
    this.code = viewModel.code;
    this.name = viewModel.name;
    this.sort = viewModel.sort;
    this._index = this.id.replaceAll('-', '');
    this._parent_index = _parent_index;
    this.menus = new Array<ContextMenu>();
    if (!viewModel.menus)
      return;
    if (viewModel.menus.length == 0)
      return;
    viewModel.menus.forEach(t => {
      this.menus.push(new ContextMenu(t, this._index, this._parent_index));
    });
  }

  /**
   * 排序
   */
  private toSort() {
    this.menus = this.menus.sort((first, second) => {
      return first.sort - second.sort;
    });
  }

  /**
   * 全局排序
   * @param startSort 开始排序号
   * @returns 排序号
   */
  toOverallSort(startSort: number): number {
    this.menus.forEach(menu => {
      menu._overall_sort = startSort;
      startSort++;

      var count = 0;
      menu.childs.forEach(group => {
        count = group.toOverallSort(count);
      })
    });
    return startSort;
  }
}
