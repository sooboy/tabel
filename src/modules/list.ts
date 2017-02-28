import  { Item,Setting } from './item';

export class List{
    originData:Object[]
    items:Item[]
    setting:Setting
    constructor(data:Object[],setting:any){
        console.log("the setting",setting,data)
        this.originData =data
        this.setting =setting
        this.Init()
    }

    Init(){
        console.log(this.setting)
        this.items =[]
        this.originData.forEach(item=>{
         this.items.push(new Item(item,this.setting))
        })
    }
}