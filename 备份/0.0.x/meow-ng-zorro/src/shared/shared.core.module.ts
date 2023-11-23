import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//组件
export const SHARED_CORE_MODULES = [
  CommonModule,
  FormsModule,
  HttpClientModule,
  BrowserModule,
  BrowserAnimationsModule,
];

//服务
export const SHARED_CORE_SERVICES = [
];


import { NgModule } from '@angular/core';
@NgModule({
  imports: [
    ...SHARED_CORE_MODULES,
  ],
  declarations: [
  ],
  providers: [
    ...SHARED_CORE_SERVICES,

  ],
  exports: [
    ...SHARED_CORE_MODULES,
  ]
})
/**
 * CORE
 */
export class SharedCoreModule {
}
