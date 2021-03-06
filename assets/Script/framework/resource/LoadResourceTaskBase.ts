import {ITask} from "../base/task/ITask";
import {LoadResourceAgent} from "./LoadResourceAgent";

export class LoadResourceTaskBase implements ITask{
    private static sSerial: number = 0;
    private _serial: number;
    private _isDone: boolean;
    private _assetName: string;
    private _userData: any;
    private _dependAssetName: Array<string>;//ToDo 临时处理，暂不使用此功能
    private _startTime:number;

    constructor(name:string, userData: any){
        this._serial = LoadResourceTaskBase.sSerial++;
        this._isDone = false;
        this._userData = userData;
        this._assetName = name;
        this._startTime = Date.now();
    }

    public isDone():boolean {
        return this._isDone;
    }

    public getTaskID():number {
        return this._serial;
    }

    public get assetName():string {
        return this._assetName;
    }

    public set done(val:boolean){
        this._isDone = val;
    }

    public get userData():any {
        return this._userData;
    }

    public set userData(val:any){
        this._userData = val;
    }

    public get startTime(){
        return this._startTime;
    }

    public set startTime(val:number){
        this._startTime = val;
    }

    // public loadMain()

    public onLoadAssetOK(agent: LoadResourceAgent, asset:any):void {

    }

    public onLoadAssetFail(agent: LoadResourceAgent, err:string):void{

    }
}