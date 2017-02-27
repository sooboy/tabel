interface Data {
    getValue(): any
    getType(): string
}
class BaseData {
    data: any
    type: string
    constructor(data: any, type: string) {
        this.data = data
        this.type = type
    }
    getValue(): any {
        return this.data
    }
    getType(): string {
        return this.type
    }
}

interface Columes {
    name: string
    type: string
}

interface Setting{
    columes:Columes[]
}

function DoColume(data: Object, filter: string): string {
    var nowItem: Object = data
    var filters = filter.split(".")
    filters.forEach(item => {
        if (nowItem[item]) {
            if (typeof nowItem[item] != "object") {
                return nowItem[item]
            }
            if (nowItem[item].length) {
                return nowItem[item].join("")
            }
            nowItem = nowItem[item]
        }
    })
    return ""
}

export class Item {
    data: Data[]
    setting: Setting

    constructor(data: Object, setting: Setting) {
        this.setting =setting
        
        if (!setting.columes){
           this.data =this.parseData(data,setting.columes)
        }else{
            console.log("列字段必须设置")
        }
    }

    // 
    parseData(data: Object, columes: Columes[]): Data[] {
        var datas: BaseData[]
        columes.forEach(item => {
            datas.push(new BaseData(DoColume(data, item.name), item.type))
        })
        return datas
    }

}