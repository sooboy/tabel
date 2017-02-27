export class Msg{
    data:Object

    constructor(){
        this.data={}
    }

    sendMsg(msgType:string,data:any){
        if(!this.data[msgType]){
            this.data[msgType].forEach(fn=>fn(data))
        }
    }

    recieveMsg(msgType:string,fn:Function){
        var fns= this.data[msgType]
         !fns? fns=[]:fns.push(fn)
    }
}