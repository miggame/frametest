export class LoadAssetCallBacks {
    constructor(bind:any, cbOK: Function, cbFail: Function){
        this._bind = bind;
        this._loadOK = cbOK;
        this._loadFail = cbFail;
    }

    public _loadOK: Function;//TODO 为啥是public而不是private?
    public _loadFail: Function;
    public _bind: any;
}