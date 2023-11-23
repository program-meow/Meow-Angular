import { NgModule } from '@angular/core';
// ANGULAR - CORE
import { SharedCoreModule } from './shared.core.module';
// NG-ZORRO
import { SharedZorroModule } from './shared.zorro.module';

@NgModule({
  imports: [
    // ANGULAR - CORE
    SharedCoreModule,
    // NG-ZORRO
    SharedZorroModule,
  ],
  declarations: [
  ],
  providers: [
  ],
  exports: [
    // ANGULAR - CORE
    SharedCoreModule,
    // NG-ZORRO
    SharedZorroModule,
  ]
})
/**
 * 共享模组
 */
export class SharedModule {
}
