import React, { Component /*,PropTypes*/} from 'react'
import {View} from 'ea-react-dm'
import {Head,Footer} from 'ea-head'
import {Grid,Row,Col} from 'eagle-ui'
import TestControl from '../../../controller/test/TestControl'
import BaseControl from '../../../controller/base/BaseControl'
import BookList from './BookList'
import '../../styles/test.less'

@View([TestControl, BaseControl])
export default class Test extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const logo = {
            className: 'null',
            title: 'EA'
        }

        return (
            <div>
                <Head logo={logo} />
                <BookList {...this.props} />
                <Footer />
                <Grid fluid>
                    <Row>
                        <Col>
                            <a className="eg-btn button" href="#ta">跳转</a>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}