import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzRadioModule } from "ng-zorro-antd/radio";
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzTreeSelectModule } from "ng-zorro-antd/tree-select";
import { NzDatePickerModule } from "ng-zorro-antd/date-picker";
import { NzTimePickerModule } from "ng-zorro-antd/time-picker";
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzWaterMarkModule } from 'ng-zorro-antd/water-mark';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule, NZ_ICON_DEFAULT_TWOTONE_COLOR, NZ_ICONS } from 'ng-zorro-antd/icon';

//组件
export const SHARED_ZORRO_MODULES = [
  NzFormModule,
  NzGridModule,
  NzButtonModule,
  NzInputModule,
  NzInputNumberModule,
  NzAlertModule,
  NzProgressModule,
  NzSelectModule,
  NzAvatarModule,
  NzCardModule,
  NzDropDownModule,
  NzPopconfirmModule,
  NzTableModule,
  NzPopoverModule,
  NzDrawerModule,
  NzModalModule,
  NzTabsModule,
  NzToolTipModule,
  NzIconModule,
  NzCheckboxModule,
  NzSpinModule,
  NzRadioModule,
  NzSwitchModule,
  NzMessageModule,
  NzTagModule,
  NzDividerModule,
  NzDescriptionsModule,
  NzTreeModule,
  NzTreeSelectModule,
  NzDatePickerModule,
  NzTimePickerModule,
  NzImageModule,
  NzUploadModule,
  NzResultModule,
  NzWaterMarkModule,
  NzStepsModule,
  NzLayoutModule,
  NzListModule,
  NzAnchorModule,
  NzMenuModule,
];

import { NzNotificationService } from 'ng-zorro-antd/notification';
import { MenuService } from 'ng-zorro-antd/menu';
//服务
export const SHARED_ZORRO_SERVICES = [
  NzNotificationService,
  MenuService,
];

import { IconDefinition } from '@ant-design/icons-angular';
// 引入全部的图标，不推荐
import * as AllIcons from '@ant-design/icons-angular/icons';
const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
//图标
export const SHARED_ZORRO_ICONS: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);

import { NgModule } from '@angular/core';
@NgModule({
  imports: [
    ...SHARED_ZORRO_MODULES,
  ],
  declarations: [
  ],
  providers: [
    ...SHARED_ZORRO_SERVICES,

    //图标配置
    { provide: NZ_ICON_DEFAULT_TWOTONE_COLOR, useValue: '#00ff00' }, // 不提供的话，即为 Ant Design 的主题蓝色
    { provide: NZ_ICONS, useValue: SHARED_ZORRO_ICONS }
  ],
  exports: [
    ...SHARED_ZORRO_MODULES,
  ]
})
/**
 * NG-ZORRO
 */
export class SharedZorroModule {
}
