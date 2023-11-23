import { Injector, Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ComponentBase } from "meow-angular";
import { ContextMenuGroup } from './../model/context-menu-group';
import { ContextMenu } from './../model/context-menu';
import { SelectMenu } from './../model/select-menu';

/**
 * 菜单
 */
@Component({
  selector: 'menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.less'],
})
export class MenuItemComponent extends ComponentBase implements OnInit {
  /**
   * 菜单组集合
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

  ngOnInit() {
  }

  /**
   * 鼠标移入
   * @param event 
   * @param menu 
   * @param index 
   * @returns 
   */
  mouseenter(event: any, menu: ContextMenu) {
    if (!menu)
      return;
    this.clearChildMenu(menu);
    if (!menu.childs || menu.childs.length === 0)
      return;
    if (!event)
      return;
    //菜单项元素
    var currentTarget = event.currentTarget;
    if (!currentTarget)
      return;
    //菜单div
    var menuDiv = currentTarget.offsetParent;
    if (!menuDiv)
      return;
    //菜单组件
    var menuComponent = menuDiv.offsetParent;
    if (!menuComponent)
      return;
    var top = menuComponent.offsetTop + (currentTarget.clientHeight * menu._overall_sort) + 5;
    var left = menuComponent.offsetLeft + menuComponent.clientWidth - 6;

    var childMenuElement = this.meow.html.element.getByClassName(`parent_${menu._index}`);
    if (!childMenuElement)
      return;
    childMenuElement.style.top = top + 'px';
    childMenuElement.style.left = left + 'px';
    childMenuElement.style.opacity = '1';
  }

  clearChildMenu(menu: ContextMenu) {
    var menuElements = this.meow.html.element.getAllByClassName(`group_parent_${menu._group_parent_index}`);
    if (!menuElements)
      return;
    menuElements.forEach(element => {
      element.style.opacity = '0';
      element.style.top = '100%';
      element.style.left = '100%';
    });

    menu.childs.forEach(group => {
      group.menus.forEach(menu => {
        this.clearChildMenu(menu);
      });
    });
  }

  mousedown(menu: ContextMenu) {
    this.selectMenuFun.emit({ code: menu.code, flag: menu.childs ? menu.childs.length > 0 ? false : true : true, data: null });
  }
}
