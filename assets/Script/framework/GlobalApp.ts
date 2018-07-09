import {ObjectPoolManager} from "./objectpool/ObjectPoolManager";
import {LogManager} from "./log/LogManager";

export class GlobalApp {
    public init():void{

    }

    // public static GlobalData:any = null;
    // public static get CtrlMgr():CtrlManager{
    //     return CtrlManager.getInstance();
    // }
    // public static get ViewMgr():ViewManager{
    //     return ViewManager.getInstance();
    // }
    // public static get SceneMgr():SceneManager{
    //     return SceneManager.getInstance();
    // }
    // public static get EventMgr(): EventManager {
    //     return EventManager.getInstance();
    // }
    //
    // public static get MessageCenter(): MessageCenter {
    //     return MessageCenter.getInstance(0);
    // }
    //
    // //todo 特殊，需要特殊初始化
    public static get LogMgr(): LogManager {
        return LogManager.getInstance();
    }
    //
    // public static get ObjPoolMgr():ObjectPoolManager{
    //     return ObjectPoolManager.getInstance();
    // }
    //
    // public static get ResourceMgr():ResourceManager {
    //     return ResourceManager.getInstance();
    // }
    //
    // public static get entityManager():EntityManager{
    //     return EntityManager.getInstance();
    // }
}