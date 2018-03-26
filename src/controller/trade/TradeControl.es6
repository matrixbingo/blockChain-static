import {Control} from 'ea-react-dm'
import TradeModel from '../../model/trade/TradeModel'
import BaseControl from '../base/BaseControl'

@Control(TradeModel)
export default class TradeControl extends BaseControl {

    static loadTradeList(param, _this) {
        return ::this.ajaxGet('/trade/search', param, 'tradeList', _this)
    }
}