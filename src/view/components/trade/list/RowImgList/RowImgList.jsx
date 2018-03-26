import React,{Component} from 'react'
import ImageView from 'eg-imageview'
import {Row, Col, Dialog} from 'eagle-ui'
import './RowImgList.less'

export default class RowImgList extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            file: [{
                name: 'demo3',
                url: 'http://image.sinajs.cn/newchart/daily/n/sh000001.gif'
            },{
                name: 'demo5',
                url: 'http://image.sinajs.cn/newchart/daily/n/sh000001.gif'
            },{
                name: 'demo6',
                url: 'http://image.sinajs.cn/newchart/daily/n/sh000001.gif'
            },{
                name: 'demo9',
                url: 'http://image.sinajs.cn/newchart/daily/n/sh000001.gif'
            }],
            showIcon:{
                leftRotate:true,
                rightRotate:true,
                zoomIn:true,
                zoomOut:true
            },
            activeIndex:0
        }
    }

    show(id) {
        Dialog.mask(id)
    }

    render() {

            return (
                <div className="rowImgList">
                    <Row className="row-color">
                        <Col className="col-div-width col-left-right">
                            <img src="http://image.sinajs.cn/newchart/daily/n/sh000001.gif" onClick={this.show.bind(this, 'testImageView3')}/>
                        </Col>
                        <Col className="col-div-width col-left-right">
                            <img src="http://image.sinajs.cn/newchart/weekly/n/sh000001.gif" onClick={this.show.bind(this, 'testImageView3')}/>
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
                    </Row>
                    <ImageView id="testImageView3" file={this.state.file} showIcon={this.state.showIcon} activeIndex={this.state.activeIndex} isMask={true}/>
                </div>
            )
    }
}