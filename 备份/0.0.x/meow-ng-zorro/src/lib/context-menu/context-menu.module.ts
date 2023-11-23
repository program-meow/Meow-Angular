import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module'

//关联菜单
import { ContextMenuComponent } from './context-menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuChildComponent } from './menu-child/menu-child.component';

@NgModule({
  declarations: [
    ContextMenuComponent,
    MenuItemComponent,
    MenuChildComponent,
  ],
  imports: [
    SharedModule,
  ],
  providers: [
  ],
  exports: [
    ContextMenuComponent,
  ]
})
/**
 * 关联菜单 模块
 */
export class ContextMenuModule { }
