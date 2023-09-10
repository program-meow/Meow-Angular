//============== 视图模型 ========================
//Copyright 2023 程序喵
//Licensed under the MIT license
//================================================
import { Model } from "./model";
import { IKey } from "./key";

/**
 * 视图模型
 */
export class ViewModel extends Model implements IKey {
    /**
     * 标识
     */
    id: string;
}
