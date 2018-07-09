export interface IList<T> {
    add(a:T);
    insert(item:T, a:T);
    remove(a:T);
    header():T;
    tail():T;
    find(a:T):T;
    reverse_find(a:T):T;
    size():number;
    empty():boolean;
    clear():void;
}