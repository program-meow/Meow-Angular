//============== 模型 ========================
//Copyright 2023 程序喵
//Licensed under the MIT license
//============================================
import { Meow } from "./../meow";

/**
 * 模型
 */
export class Model {
    /**
     * meow
     */
    private _meow: Meow;

    /**
     * 初始化模型
     */
    constructor() {
        this._meow = new Meow(Meow.injector);
    }

    /**
     * meow
     */
    meow(): Meow {
        if (!this._meow)
            this._meow = new Meow(Meow.injector);
        return this._meow;
    }
}
