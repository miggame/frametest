import {IList} from "./IList";

export class Item<T> {
    private _name: string;
    private _value: T;
    private _prev: Item<T>;
    private _next: Item<T>;

    constructor(value: T){
        this._name = value + '';
        this._value = value;
        this._prev = null;
        this._next = null;
    }

    set name(name:string){
        this._name = name;
    }

    get name():string {
        return this._name;
    }

    set value(value: T){
        this._value = value;
    }

    get value(): T{
        return this._value;
    }

    set prev(item:Item<T>){
        this._prev = item;
    }

    get prev():Item<T>{
        return this._prev;
    }

    set next(item: Item<T>){
        this._next = item;
    }

    get next():Item<T>{
        return this._next;
    }
}

export class DoubleList<T> implements IList<T>{
    private _count: number = 0;
    private _header: Item<T>;
    private _tail: Item<T>;

    constructor(){
        this._header = new Item<T>(null);
        this._header.name = 'header';
        this._tail = new Item<T>(null);
        this._tail.name = 'tail';
        this._header.prev = this._header.next = this._tail;
        this._tail.next = this._tail.prev = this._header;
    }

    add(a:T){
        let item = new Item<T>(a);
        item.prev = this._tail.prev;
        item.next = this._tail;
        this._tail.prev = item;
        item.prev.next = item;
        this._count++;
    }

    insert(item:T, a:T){
        if(this.empty()){
            return;
        }
        let indexItem = this._header.next;
        while (indexItem!==this._tail){
            if(indexItem.value == item){
                let valueItem = new Item<T>(a);
                valueItem.prev = indexItem;
                valueItem.next = indexItem.next;
                indexItem.next.prev = valueItem;
                indexItem.next = valueItem;
                this._count++;
                break;
            }
            indexItem = indexItem.next;
        }
    }

    remove(a:T):T{
        if(this.empty()){
            return;
        }
        let indexItem = this._header.next;
        while (indexItem !== this._tail){
            if(indexItem.value == a){
                indexItem.prev.next = indexItem.next;
                indexItem.next.prev = indexItem.prev;
                indexItem.next = null;
                indexItem.prev = null;
                let value = indexItem.value;
                indexItem.value = null;
                indexItem = null;
                this._count--;
                return value;
            }
            indexItem = indexItem.next;
        }
    }

    getHeaderItem():Item<T>{
        return this._header;
    }

    header():T{
        return this._header.next.value;
    }

    tail():T{
        return this._tail.prev.value;
    }

    find(a:T):T{
        if(this.empty()){
            return;
        }
        let indexItem = this._header.next;
        while (indexItem !==this._tail){
            if(indexItem.value == a){
                return indexItem.value;
            }
            indexItem = indexItem.next;
        }
        return null;
    }

    reverse_find(a:T):T{
        if(this.empty()){
            return;
        }
        let indexItem = this._tail.prev;
        while (indexItem!==this._header){
            if(indexItem.value ==a ){
                return indexItem.value;
            }
            indexItem = indexItem.prev;
        }
        return null;
    }

    size():number{
        return this._count;
    }

    clear():void {
        let item = this._header.next;
        while (item!==this._tail){
            item.prev = null;
            item.value = null;
            item = item.next;
            item.prev.next = null;
        }
        this._header.next = this._tail;
        this._tail.prev = this._header;
        this._count = 0;
    }

    empty():boolean {
        return this._count === 0;
    }

    print(){
        let item = this._header.next;
        while (item!==this._tail){
            console.log(item);
            item = item.next;
        }
    }
}