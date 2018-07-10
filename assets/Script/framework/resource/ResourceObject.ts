import {ObjectBase} from "../objectpool/ObjectBase";
import {IResourceHelper} from "./IResourceHelper";

export class ResourceObject extends ObjectBase{
    private _resourceHelp: IResourceHelper;
    constructor(name:string, target:any, resourceHelp: IResourceHelper){
        super(name, target);
        this._resourceHelp = resourceHelp;
    }

    public onRelease(){
        this._resourceHelp.release(this.target);
    }
}