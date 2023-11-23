import { Injector, Component, OnInit, Input, HostListener, Output, EventEmitter } from '@angular/core';
import { ComponentBase, Style, Coordinates2D, MouseLocation } from "meow-angular";
import { ContextMenuData } from './model/context-menu-data';
import { ContextMenuGroupViewModel } from './model/context-menu-group-view-model';
import { SelectMenu } from './model/select-menu';

/**
 * 关联菜单
 */
@Component({
  selector: 'meow-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.less'],
})
export class ContextMenuComponent extends ComponentBase implements OnInit {
  /**
   * 显示
   */
  show: boolean = false;
  /**
   * 菜单样式
   */
  menu_style: Style = new Style();
  /**
   * 菜单集合
   */
  @Input()
  menus: Array<ContextMenuGroupViewModel> = new Array<ContextMenuGroupViewModel>();
  /**
   * 固定：固定于鼠标事件位置。false 则菜单显示超出会计算偏移量，使菜单始终显示在区域内。 默认true
   */
  @Input()
  fixed: boolean = true;
  /**
   * 样式
   */
  @Input()
  style: Style = new Style();
  /**
   * 数据
   */
  data: ContextMenuData = new ContextMenuData();
  /**
   * 菜单朝右
   */
  menuToRight: boolean = true;
  /**
   * 自定义数据
   */
  private _custom_data: any;
  /**
   * 可否关闭
   */
  private _can_close: boolean = true;

  /**
   * 选择菜单方法
   */
  @Output()
  select: EventEmitter<SelectMenu> = new EventEmitter<SelectMenu>();

  /**
   * 监听全局鼠标按下事件
   * @param event 事件
   */
  @HostListener('window:mouseup', ['$event'])
  onMouseClick(event: any) {
    if (this._can_close) {
      this.close();
    } else {
      this._can_close = true;
    }
  }

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
    this.data = new ContextMenuData(this.menus);
    this.close();
  }

  /**
   * 关闭
   */
  close(): void {
    this.clearStyle();
    this.show = false;
    this._can_close = true;
  }


  /**
   * 打开
   * @param event 鼠标事件
   * @param data 自定义数据
   */
  open(event: any, data: any = null): void {
    if (!event)
      return;
    event.preventDefault();
    event.stopPropagation();
    if (!this.data)
      return;
    if (!this.data.groups)
      return;
    if (this.data.groups.length === 0)
      return;
    this._custom_data = data;
    this.show = true;
    var defaultLocation = this.meow.html.mouse.location(event);
    var eventLocation = this.getEventLocation(event);
    setTimeout(() => {
      this.initStyle(defaultLocation, eventLocation);
    }, 100);
  }

  /**
   * 获取事件定位
   */
  private getEventLocation(event: any) {
    var result = { clientWidth: 0, clientHeight: 0, offsetLeft: 0, offsetTop: 0 };
    var currentTarget = event.currentTarget;
    if (!currentTarget)
      return result;
    result.clientWidth = currentTarget.clientWidth;
    result.clientHeight = currentTarget.clientHeight;

    var offsetParent = currentTarget.offsetParent;
    if (!offsetParent)
      return result;
    result.offsetTop = offsetParent.offsetTop;
    result.offsetLeft = offsetParent.offsetLeft;

    // var left_top: Coordinates2D = { x: offsetLeft, y: offsetTop };
    // var right_top: Coordinates2D = { x: offsetLeft + clientWidth, y: offsetTop };
    // var left_bottom: Coordinates2D = { x: offsetLeft, y: offsetTop + clientHeight };
    // var right_bottom: Coordinates2D = { x: offsetLeft + clientWidth, y: offsetTop + clientHeight };
    return result;
  }

  /**
   * 初始化样式
   */
  private initStyle(defaultLocation: MouseLocation, eventLocation: any): void {
    var location = this.getLocation(defaultLocation, eventLocation);
    this.menu_style.opacity = 1;
    this.menu_style.top = location.y + 'px';
    this.menu_style.left = location.x + 'px';
    this.menu_style.transition = 'opacity 0.5s';
  }

  /**
   * 获取定位
   */
  private getLocation(defaultLocation: MouseLocation, eventLocation: any): Coordinates2D {
    if (!defaultLocation)
      return new Coordinates2D();
    var result = { x: defaultLocation.x, y: defaultLocation.y };
    if (this.fixed)
      return result;
    if (!eventLocation)
      return result;
    var mainParentElement = this.meow.html.element.getByClassName(this.data._index);
    if (!mainParentElement)
      return result;
    if (!mainParentElement?.firstChild)
      return result;
    var mainElement = mainParentElement.firstChild as HTMLElement;
    var width = mainElement.clientWidth;
    var height = mainElement.clientHeight;

    if (eventLocation.offsetLeft + eventLocation.clientWidth - defaultLocation.x < width)
      result.x = eventLocation.offsetLeft + eventLocation.clientWidth - width - 5;
    if (eventLocation.offsetTop + eventLocation.clientHeight - defaultLocation.y < height)
      result.y = eventLocation.offsetTop + eventLocation.clientHeight - height - 5;

    if (!this.existChildMenu())
      return result;

    if (eventLocation.offsetLeft + eventLocation.clientWidth - defaultLocation.x < width * 2)
      this.menuToRight = false;
    else
      this.menuToRight = true;

    return result;
  }

  /**
   * 存在子菜单
   */
  private existChildMenu(): boolean {
    var flag = false;
    if (!this.data)
      return flag;
    if (!this.data.groups)
      return flag;
    if (this.data.groups.length === 0)
      return flag;
    this.data.groups.forEach(group => {
      group.menus.forEach(menu => {
        if (menu.childs.length > 0)
          flag = true;
      })
    })
    return flag;
  }

  /**
   * 清除样式
   */
  private clearStyle(): void {
    if (!this.menu_style)
      return;
    this.menu_style.opacity = 0;
    this.menu_style.top = '100%';
    this.menu_style.left = '100%';
    this.menu_style.transition = 'opacity 0.5s';
  }

  /**
   * 选择菜单
   */
  selectMenu(selectMenu: SelectMenu) {
    this._can_close = selectMenu.flag;
    if (!selectMenu.flag)
      return;
    this.close();
    selectMenu.data = this._custom_data;
    this.select?.emit(selectMenu);
  }
}
