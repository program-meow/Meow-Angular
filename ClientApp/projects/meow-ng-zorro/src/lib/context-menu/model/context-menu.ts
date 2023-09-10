import { ContextMenuViewModel } from './context-menu-view-model';
import { ContextMenuGroup } from './context-menu-group';

/**
 * 关联菜单
 */
export class ContextMenu extends ContextMenuViewModel {
  /**
   * 索引
   */
  _index: string = "";
  /**
   * 父索引
   */
  _parent_index: string = "";
  /**
   * 组父索引
   */
  _group_parent_index: string = "";
  /**
   * 全局排序
   */
  _overall_sort: number = 0;

  /**
   * 子集
   */
  override childs: Array<ContextMenuGroup> = new Array<ContextMenuGroup>();

  /**
   * 初始化
   * @param viewModel 视图模型
   * @param _parent_index 父索引
   * @param _overall_sort 全局排序
   */
  constructor(viewModel: ContextMenuViewModel, _parent_index: string = "", _group_parent_index: string = "", _overall_sort: number = 0) {
    super();
    this.map(viewModel, _parent_index, _group_parent_index);
    this.toSort();
  }

  /**
   * 映射
   * @param viewModel 视图模型
   * @param _parent_index 父索引
   */
  private map(viewModel: ContextMenuViewModel, _parent_index: string, _group_parent_index: string) {
    this.id = viewModel.id || this.meow.helper.uuid();
    this.code = viewModel.code;
    this.name = viewModel.name;
    this.icon = viewModel.icon;
    this.sort = viewModel.sort;
    this._index = this.id.replaceAll('-', '');
    this._parent_index = _parent_index;
    this._group_parent_index = _group_parent_index;
    this.childs = new Array<ContextMenuGroup>();
    if (!viewModel.childs)
      return;
    if (viewModel.childs.length == 0)
      return;
    viewModel.childs.forEach(t => {
      this.childs.push(new ContextMenuGroup(t, this._index));
    });
  }

  /**
   * 排序
   */
  private toSort() {
    this.childs = this.childs.sort((first, second) => {
      return first.sort - second.sort;
    });
  }
}
