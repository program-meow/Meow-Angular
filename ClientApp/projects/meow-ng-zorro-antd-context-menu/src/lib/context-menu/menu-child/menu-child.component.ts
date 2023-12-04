import { Injector, Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ComponentBase } from "meow-angular";
import { ContextMenuGroup } from './../model/context-menu-group';
import { SelectMenu } from './../model/select-menu';

/**
 * 子菜单
 */
@Component({
  selector: 'menu-child',
  templateUrl: './menu-child.component.html',
  styleUrls: ['./menu-child.component.less'],
})
export class MenuChildComponent extends ComponentBase implements OnInit {
  /**
   * 菜单集合
   */
  @Input()
  menuGroups: Array<ContextMenuGroup> = new Array<ContextMenuGroup>();
  /**
   * 选择菜单方法
   */
  @Output()
  selectMenuFun: EventEmitter<SelectMenu> = new EventEmitter<SelectMenu>();

  /**
   * 初始化组件
   * @param injector 注入器
   */
  constructor(injector: Injector) {
    super(injector);
  }

  /**
   * 初始化
   */
  ngOnInit() {
  }

  /**
   * 选择子菜单方法
   */
  childSelectMenuFun(selectMenu: SelectMenu) {
    this.selectMenuFun.emit(selectMenu);
  }
}
