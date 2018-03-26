import DataUtil from './DataUtil'
let FrwkUtil = FrwkUtil || {}
import _ from 'underscore'
import $ from 'jquery'

FrwkUtil.store = {
    getValueByReducers: function (props, valueLink) {
        (!props || !valueLink) && window.console.error('FrwkUtil.store.getValueByReducers : props or valueLink is undefined', props, valueLink)
        let keys = valueLink.split('.')
        const modelName = keys.shift()
        const model = props[modelName.toLowerCase()]
        if (!model || !keys) {
            window.console.warn('FrwkUtil.store.getValueByReducers model or keys miss:', props, valueLink)
            return ''
        }
        let val = '', rs = []
        try {
            if (keys.length > 1) {
                for (var i in keys) {
                    if (i == 0) {
                        rs = model.get(keys[i])
                    } else if (i > 0) {
                        rs = rs.get(keys[i])
                    }
                }
                val = rs
            } else {
                val = model.get(keys[0])
            }
        } catch (e) {
            window.console && window.console.error('FrwkUtil.store.getValueByReducers', keys.join(), rs, e)
        }
        return val
    }
}

FrwkUtil.UrlUtils = {
    /**
     * 获取get请求所有参数
     * 例http://a.html?b=1&c=2
     * @returns {b:1,c:2}
     */
    getUrls: function () {
        var aQuery = window.location.href.split('?')
        var aGET = {}
        if (aQuery.length > 1) {
            var aBuf = aQuery[1].split('&')
            for (var i = 0, iLoop = aBuf.length; i < iLoop; i++) {
                var aTmp = aBuf[i].split('=')
                aGET[aTmp[0]] = aTmp[1]
            }
        }
        return aGET
    },
    /**
     * 组合请求参数
     * @param {b:1,c:2}
     * @returns ?b=1&c=2
     */
    initParams: function (data) {
        if (!data || _.isEmpty(data)) {
            return ''
        }
        var arr = []
        for (var item in data) {
            arr.push('&' + item + '=')
            arr.push(data[item])
        }
        if (arr.length == 0) {
            return ''
        }
        var str = arr.join('')
        return '?' + str.substring(1, str.length)
    }
}

FrwkUtil.ComponentUtils = {
    /**
     * 初始化 defaultId
     * @param _this
     * TODO 根据 defaultName 取 defaultId
     */
    getDefaultId: function (_this) {
        let {defaultId, valueLink} = _this.props
        if (defaultId || _.isNumber(defaultId) || DataUtil.validate.boolean(defaultId)) {
            FrwkUtil.store.getValueByReducers(_this.props, valueLink) != defaultId && _this.props.setValueByReducers(valueLink, defaultId)
            return defaultId
        } else {
            defaultId = String(FrwkUtil.store.getValueByReducers(_this.props, _this.props.valueLink))
        }
        if (!defaultId) {
            window.console.error(_this.props.valueLink, 'defaultId is null')
        }
        return defaultId
    },
    /**
     * 初始化 数组或对象
     * [{name:'tom', id:1}, {name:'jerry', id:2}] ==> {'1':'tom','2':'jerry'}
     * {1:'tom',2:'jerry'} ==> {'1':'tom','2':'jerry'}
     * @param _this
     */
    transform: function (props) {
        let {list, param} = props, objs = {}
        try {
            if (DataUtil.is.Array(list)) {
                for (let i in list) {
                    const item = list[i]
                    const id = String(item[param.id])
                    if (item[param.id] == undefined || item[param.name] == undefined) {
                        window.console.error(props.valueLink, 'transform: param.id or param.name is undefined')
                    }
                    objs[id] = String(item[param.name])
                }
            } else if (DataUtil.is.Object(list)) {
                _.each(list, function (name, id) {
                    objs[String(id)] = String(name)
                })
            }
            if ($.isEmptyObject(objs)) {
                window.console.error(props.valueLink, 'transform: objs is null!!!')
            }
        } catch (e) {
            window.console.error(props.valueLink + '.initList', e, list)
        }
        return objs
    }
}

export default FrwkUtil