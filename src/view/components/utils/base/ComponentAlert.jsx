import React from 'react'
import Component from './Component'
import Alert from 'react-s-alert'

import 'react-s-alert/dist/s-alert-default.css'
import 'react-s-alert/dist/s-alert-css-effects/slide.css'
import 'react-s-alert/dist/s-alert-css-effects/scale.css'
import 'react-s-alert/dist/s-alert-css-effects/flip.css'
import 'react-s-alert/dist/s-alert-css-effects/stackslide.css'

export default class ComponentAlert extends Component {

    constructor(props, context) {
        super(props, context)
    }

    static AlertType = {
        info: 'info',
        success: 'success',
        warning: 'warning',
        error: 'error'
    }

    /**
     * @param type : info, success, warning, error
     * @param msg
     */
    showMsg = function(type, msg){
        if(arguments.length == 0){
            type = this.AlertType.error
            msg = 'showMsg 参数缺失'
        }else if(arguments.length == 1){
            type = this.AlertType.info
        }
        Alert[type](msg, {
            position: 'top-right',
            effect: 'slide'
        })
    }
    /**
     * @param type : info, success, warning, error
     * @param html
     */
    showHTML = function(type, html){
        if(arguments.length == 0){
            type = this.AlertType.error
            html = 'showMsg 参数缺失'
        }else if(arguments.length == 1){
            type = this.AlertType.info
        }
        Alert[type](html, {
            position: 'top-right',
            effect: 'slide',
            html: true
        })
    }
    /**
     * @param type : info, success, warning, error
     * @param msg
     */
    showMsgTop = function (type, msg) {
        if(arguments.length == 0){
            type = this.AlertType.error
            msg = 'showMsgTop 参数缺失'
        }else if(arguments.length == 1){
            type = this.AlertType.info
        }
        Alert[type](msg, {
            position: 'top'
        })
    }
    /**
     * @param type : info, success, warning, error
     * @param html
     */
    showHTMLTop = function(type, html){
        if(arguments.length == 0){
            type = this.AlertType.error
            html = 'showMsg 参数缺失'
        }else if(arguments.length == 1){
            type = this.AlertType.info
        }
        Alert[type](html, {
            position: 'top',
            html: true
        })
    }

    render() {
        return (
            <div>重写父类render()方法,需要把Alert添加到对应的组件
                <Alert stack={true} timeout={4000}/>
            </div>
        )
    }
}