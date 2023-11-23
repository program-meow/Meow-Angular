//============== 事件总线操作 ==========================
//Copyright 2023 程序喵
//Licensed under the MIT license
//======================================================
import { NgEventBus } from 'ng-event-bus';
import { Meow } from "../meow";

/**
 * 事件总线操作
 */
export class EventBus {
  /**
   * 事件总线服务
   */
  private _eventbus: NgEventBus;

  /**
   * 初始化事件总线操作
   * @param meow 公共操作
   */
  constructor(private meow: Meow) {
    this._eventbus = this.meow.ioc.get(NgEventBus);
  }

  /**
   * 发布事件
   * @param key 键
   * @param data 数据
   */
  publish(key: string, data) {
    if (!this._eventbus)
      return;
    return this._eventbus.cast(key, data);
  }

  /**
   * 订阅事件
   * @param key 键
   * @param handler 事件处理操作
   */
  on<T>(key: string, handler: (result: T) => void) {
    if (!this._eventbus)
      return null;
    return this._eventbus.on(key).subscribe(value => {
      handler(<T>value.data);
    });
  }
}
