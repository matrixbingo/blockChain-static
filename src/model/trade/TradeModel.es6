import {Model} from 'ea-react-dm'
import BaseModel from './BaseModel'

@Model
export default class TradeModel extends BaseModel {
    static tradeList = {}
    static search = {
        "rabin": '0',
        "raend": '11',
        "nums": '0',
        "code": '',
        "name": '',
        "type": 0,
        "bin": '0',
        "end": '0',
        "page": 1,
        "pageSize": 10,
        "sort": '',
        "sortType": true
    }
}