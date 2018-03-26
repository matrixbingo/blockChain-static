/**
 * Created by liang.wang on 17/5/29.
 */
import React, {PropTypes} from 'react'
import Component from '../base/Component'
import {Select, Input} from 'eagle-ui'
import {findDOMNode} from 'react-dom'
import {FrwkUtil, DataUtil} from '../util/Index'
import './SelectPlus.less'
import _ from 'underscore'

export default class SelectPlus extends Component {
    static propTypes = {
        /**
         * 是否只读
         */
        viewOnly: PropTypes.bool,
        /**
         * 是否disabled
         */
        disabled: PropTypes.bool,
        /**
         * value链接
         */
        valueLink: PropTypes.string.isRequired,

        /**
         * 初始化数据，可以更新
         */
        list: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.object
        ])
    }
    /**
     * @type {{disabled: boolean, viewOnly: boolean, list: {}, param: {id: string, name: string}, placeholder: string, defaultId: null, defaultName: null, valueLink: string, valueLinkName: string, autoClear: boolean, getValueCallback: SelectPlus.defaultProps.getValueCallback}}
     * 优先级 viewOnly > disabled > autoClear
     * defaultChecked 优先级 defaultId > defaultName
     * valueLink <==> id
     */
    static defaultProps = {
        disabled: false,
        viewOnly: false,
        list: {},
        param: {id: 'id', name: 'name'},
        placeholder: '',
        defaultId: null,
        defaultName: null,
        valueLink: '',
        valueLinkName: '',
        autoClear: false,
        autoPromp: false,
        getValueCallback: function () {
        }
    }

    constructor(props, context) {
        super(props, context)
        this.state = {
            viewOnly: props.viewOnly,
            disabled: props.disabled,
            defaultId: props.defaultId,
            defaultName: this.initDefaultChecked(props),
            list: FrwkUtil.ComponentUtils.transform(props)
        }
    }

    initDefaultChecked(props) {
        let {valueLink, defaultId, list, defaultName, param} = props
        if (valueLink) {
            if (defaultId || _.isNumber(defaultId) || DataUtil.validate.boolean(defaultId)) {
                this.getValueByReducers(props, valueLink) != defaultId && this.setValueByReducers(defaultId)
                return DataUtil.ObjUtils.findWhereValById(list, defaultId, param.name)
            }
            if (!String(defaultId) && defaultName) {
                this.setValueByReducers(DataUtil.ObjUtils.findWhereIdByVal(list, defaultName, param.id))
            }
        }
        return defaultName
    }

    componentWillReceiveProps(nextProps) {
        let _state = {}
        nextProps.viewOnly != this.props.viewOnly && _.extend(_state, {viewOnly: nextProps.viewOnly})
        nextProps.disabled != this.props.disabled && _.extend(_state, {disabled: nextProps.disabled})
        nextProps.defaultId != this.props.defaultId && _.extend(_state, {defaultId: nextProps.defaultId})
        if (nextProps.defaultName != this.props.defaultName || nextProps.defaultId != this.props.defaultId) {
            const defaultName = this.initDefaultChecked(nextProps)
            _.extend(_state, {defaultName: defaultName})
        }
        if (!DataUtil.ObjUtils.isEqual(nextProps.list, this.props.list)) {
            const list = FrwkUtil.ComponentUtils.transform(nextProps)
            _.extend(_state, {list: list})
        }
        this.setState(_state)
    }

    getValueCallback(id, name, type) {
        this.setState({
            defaultName: name
        })
        this.props.valueLink && this.setValueByReducers(id)
        this.props.getValueCallback && this.props.getValueCallback(id, name, type, this)
        //window.console.log('id, name, type', id, name, type)
    }

    setDisabled(ref, is) {
        this.input = ref
        if (this.input) {
            const input = findDOMNode(this.input).querySelector('input')
            input.disabled = is
        }
    }

    createOptions() {
        const list = this.state.list
        let options = []
        if (DataUtil.is.Object(list)) {
            _.each(list, function (name, id) {
                options.push(<option value={id} key={name}>{name}</option>)
            })
        }
        return options
    }

    render() {
        const _this = this
        if (this.state.viewOnly) {
            return (
                <div className="selectPlus">
                    <Input readOnly type="text" value={this.state.defaultName}
                           ref={(ref) => {
                               _this.setDisabled(ref, true)
                           }}/>
                </div>
            )
        }
        return (
            <Select autoClear={this.props.autoClear}
                    readOnly={!this.props.autoPromp}
                    defaultChecked={this.state.defaultName}
                    getValueCallback={::this.getValueCallback} placeholder={this.props.placeholder}
                    ref={(ref) => {
                        _this.input = ref
                    }}>
                {this.createOptions()}
            </Select>
        )
    }

    componentDidUpdate() {
        if (this.input) {
            const input = findDOMNode(this.input).querySelector('input')
            if (this.state.disabled) {
                input.disabled = true
            } else {
                input.disabled = false
            }
        }
    }
}