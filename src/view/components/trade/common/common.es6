let TradUtil = TradUtil || {}

TradUtil.getType = function (type) {
    switch (type) {
        case 1:
            return '小盘>9000'
        case 2 :
            return '中盘>9000'
        case 3 :
            return '小盘1000~9000'
        case 4 :
            return '中盘3000~9000'
    }
}

TradUtil.getStockUrl = function (code) {
    return 'http://stockhtm.finance.qq.com/sstock/ggcx/' + code + '.shtml'
}

export default TradUtil
