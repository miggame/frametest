import {ResourceManager} from "./ResourceManager";
import {TaskPool} from "../base/task/TaskPool";
import {LoadResourceTaskBase} from "./LoadResourceTaskBase";
import {ObjectPool} from "../objectpool/ObjectPool";
import {ObjectPoolManager} from "../objectpool/ObjectPoolManager";
import {AssetObject} from "./AssetObject";
import {ILoadResourceAgentHelper} from "./ILoadResourceAgentHelper";
import {IResourceHelper} from "./IResourceHelper";
import {LoadResourceAgent} from "./LoadResourceAgent";
import {LoadAssetCallBacks} from "./LoadAssetCallBacks";

export class ResourceLoader {
    private _resourceManager: ResourceManager;
    private _taskPool: TaskPool<LoadResourceTaskBase>;
    private _assetPool:; IObjectPool<AssetObject>;

    constructor(resMgr: ResourceManager){
        this._resourceManager = resMgr;
        this._taskPool = new TaskPool<LoadResourceTaskBase>();
        this._assetPool = null;
    }

    public get totalAgentCount():number {
        return this._taskPool.totalCount;
    }

    public get freeAgentCount():number {
        return this._taskPool.freeCount;
    }

    public get workAgentCount():number {
        return this._taskPool.workCount;
    }

    public update(delta:number, realDelta: number):void {
        this._taskPool.update(delta, realDelta);
    }

    public shutdown(){
        this._taskPool.shutDown();
    }

    public setObjectPoolManager(objectPoolManager:ObjectPoolManager) {
        this._assetPool = objectPoolManager.createPoolMultiSpawn<AssetObject>('Asset Pool', 2000, 10, 2000);
    }

    public addLoadResourceAgentHelper(agentHelper: ILoadResourceAgentHelper, resourceHelper: IResourceHelper):void{
        let agent = new LoadResourceAgent(agentHelper, resourceHelper, this._assetPool, this);
        this._taskPool.addAgent(agent);
    }

    public loadAsset(name:string, cb:LoadAssetCallBacks, userData: any){
        let task = new LoadAssetTask(name, cb, userData);
        this._taskPool.addTask(task);
    }

    public unLoadAsset(obj:any){
        this._assetPool.unSpawn(obj);
    }

    public unLoadAssetTarget(obj:any){
        this._assetPool.unSpawnTarget(obj);
    }

}