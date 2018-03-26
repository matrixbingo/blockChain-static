import {fetch} from 'ea-react-dm'
import {Action} from 'ea-react-dm'
import FrwkUtil from '../../view/components/utils/util/FrwkUtil'
import LoadingBar from './LoadingBar'

export const ajax = {
    fetch: function (connect, type, url, param, valueLink, _this, callBack) {
        return (dispatch) => {
            fetch(url + FrwkUtil.UrlUtils.initParams(param), {
                method: type,
                timeout: 60000
            }).then((data) => {
                _this && callBack && callBack(_this, data)
                dispatch(connect.update(valueLink, data.msg))
            }, (error) => {
                _this && _this.showMsg && _this.showMsg('error', 'URL:' + url + ', 查询失败!!!')
                window.console.error('ajaxGet : ' + url + ' error!!', error)
            })
        }
    }
}

export default class BaseControl extends Action {
    @LoadingBar('mosk')
    static ajaxGetMosk(url, param, valueLink, _this, callBack) {
        return ajax.fetch(this, 'GET', url, param, valueLink, _this, callBack)
    }

    @LoadingBar('loading')
    static ajaxGet(url, param, valueLink, _this, callBack) {
        return ajax.fetch(this, 'GET', url, param, valueLink, _this, callBack)
    }

    @LoadingBar('mosk')
    static ajaxPostMosk(url, param, valueLink, _this, callBack) {
        return ajax.fetch(this, 'POST', url, param, valueLink, _this, callBack)
    }

    @LoadingBar('loading')
    static ajaxPost(url, param, valueLink, _this, callBack) {
        return ajax.fetch(this, 'POST', url, param, valueLink, _this, callBack)
    }
}