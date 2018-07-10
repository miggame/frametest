import {BaseClass} from "../base/BaseClass";
import {IResourceManager} from "./IResourceManager";
import {IResourceHelper} from "./IResourceHelper";
import {ObjectPoolManager} from "../objectpool/ObjectPoolManager";
import {ILoadResourceAgentHelper} from "./ILoadResourceAgentHelper";
import {LoadAssetCallBacks} from "./LoadAssetCallBacks";

export class ResourceManager extends BaseClass implements IResourceManager{
    private _resourceLoader: ResourceLoader;
    private _resourceHelper: IResourceHelper;

    constructor(){
        super();
        this._resourceLoader = new ResourceLoader(this);
        this._resourceHelper = null;
    }

    public onUpdate(delta: number, realDelta: number):void{
        this._resourceLoader.update(delta, realDelta);
    }

    public shutdown():void {
        this._resourceLoader.shutdown();
    }

    public setObjectPoolManager(objectPoolManager: ObjectPoolManager) {
        this._resourceLoader.setObjectPoolManager(objectPoolManager);
    }

    public setResourceHelper(helper: IResourceHelper){
        this._resourceHelper = helper;
    }

    public addLoadResourceAgentHelper(agentHelper: ILoadResourceAgentHelper):void {
        this._resourceLoader.addLoadResourceAgentHelper(agentHelper, this._resourceHelper);
    }

    public loadAsset(name:string, cb:LoadAssetCallBacks, userData:any){
        this._resourceLoader.loadAsset(name, cb, userData);
    }

    private unLoadAsset(obj:any){
        this._resourceLoader.unLoadAsset(obj);
    }

    public unLoadAssetTarget(obj:any){
        this._resourceLoader.unLoadAssetTarget(obj);
    }
}