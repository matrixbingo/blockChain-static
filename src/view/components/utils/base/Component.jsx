import React, {Component} from 'react'
import FrwkUtil from '../util/FrwkUtil'
import _ from 'underscore'

export default class BaseComponent extends Component {

    constructor(props, context) {
        super(props, context)
    }

    getValueByReducers() {
        switch (arguments.length) {
            case 0:
                !this.props.valueLink && window.console.error('BaseComponent.getValueByReducers, valueLink or arguments[0] miss', this._reactInternalInstance && this._reactInternalInstance && this._reactInternalInstance.getName(), this.props)
                return FrwkUtil.store.getValueByReducers(this.props, this.props.valueLink)
            case 1:
                if(arguments[0].valueLink && _.isObject(arguments[0])){
                    return FrwkUtil.store.getValueByReducers(arguments[0], arguments[0].valueLink)
                }else if(_.isString(arguments[0])){
                    return FrwkUtil.store.getValueByReducers(this.props, arguments[0])
                }
                window.console.error('BaseComponent.getValueByReducers, arguments[0]', arguments[0])
                break
            case 2:
                return FrwkUtil.store.getValueByReducers(arguments[0], arguments[1])
        }
    }

    setValueByReducers() {
        switch (arguments.length) {
            case 1:
                !this.props.valueLink && window.console.error('BaseComponent.setValueByReducers, valueLink miss', this._reactInternalInstance.getName(), this.props)
                this.props.setValueByReducers(this.props.valueLink, arguments[0])
                break
            case 2:
                this.props.setValueByReducers(arguments[0], arguments[1])
                break
        }
    }

    render() {
        return (
            <h1>重写父类render()方法</h1>
        )
    }
}