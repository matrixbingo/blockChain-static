/**
 * Created by liang.wang on 16/5/10.
 */
import React, {Component} from 'react'
import {Row, Col} from 'eagle-ui'
import './TradeRow.less'
import TradUtil from '../common/common'
import {DataUtil} from '../../utils/util/Index'
import Msg from '../../utils/chart/TradeHistoryChart'
import RowImgList from './RowImgList/RowImgList'

export default class TradeRow extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {}
    }

    render() {
        const _this = this
        const list = this.props.list
        const pageNo = this.props.pageNo
        const pageSize = this.props.pageSize
        let rowNo = 1
        let page = (pageNo - 1) * pageSize + 1
        let url
        return (
            <div className="tradeRow">
                {
                    list && list.map((ele) => {
                        let rowColor = rowNo % 2 == 0 ? 'row-color-odd' : 'row-color-eve'
                        let colColor = ele.get('range') > 0 ? {color: 'red'} : {color: 'green'}
                        url = TradUtil.getStockUrl(ele.get('code'))
                        if (ele.get('range') == 0) {
                            colColor = {}
                        }
                        rowNo++
                        return <div>
                            <Row key={rowNo} className={rowColor}>
                                <Col sm={1} className="text-align-center">
                                    {<Msg value={page++} ele={ele.toJS()} {..._this.props} />}
                                </Col>
                                <Col style={{width: '14%'}} className="text-align-center">
                                    {TradUtil.getType(ele.get('type'))}
                                </Col>
                                <Col style={{width: '11%'}} className="text-align-center">
                                    {DataUtil.Date.formatTime(ele.get('time'))}
                                </Col>
                                <Col sm={1} className="text-align-center">
                                    {ele.get('code')}
                                </Col>
                                <Col sm={1} className="text-align-center">
                                    <a href={url} target="_blank">{ele.get('name')}</a>
                                </Col>
                                <Col sm={1} className="text-align-center" style={colColor}>
                                    {ele.get('price')}
                                </Col>
                                <Col sm={1} className="text-align-center" style={colColor}>
                                    {ele.get('range')}
                                </Col>
                                <Col sm={1} className="text-align-center" style={colColor}>
                                    {ele.get('speed')}
                                </Col>
                                <Col sm={1} className="text-align-center">
                                    {ele.get('stock')}
                                </Col>
                                <Col sm={1} className="text-align-center" style={ele.get('buy') != 0 ? {color: 'red'} : {}}>
                                    {ele.get('buy')}
                                </Col>
                                <Col sm={1} className="text-align-center" style={{color: 'green'}}>
                                    {ele.get('sel')}
                                </Col>
                            </Row>
                            {/*<Row className="row-color-eve">
                                <Col className="col-div-width col-left-right">
                                    <img src="http://image.sinajs.cn/newchart/daily/n/sh000001.gif"/>
                                </Col>
                                <Col className="col-div-width col-left-right">
                                    <img src="http://image.sinajs.cn/newchart/weekly/n/sh000001.gif" />
                                </Col>
                                <Col className="col-div-width col-left-right">
                                    <img src="http://image.sinajs.cn/newchart/monthly/n/sh000001.gif" />
                                </Col>
                                <Col className="col-div-width col-left-right">
                                    <img src="http://image.sinajs.cn/newchart/daily/n/sh601006.gif" />
                                </Col>
                                <Col className="col-div-width col-left-right">
                                    <img src="http://image.sinajs.cn/newchart/min/n/sh000001.gif" />
                                </Col>
                            </Row>*/}
                            <RowImgList />
                        </div>
                    })
                }
            </div>
        )
    }
}