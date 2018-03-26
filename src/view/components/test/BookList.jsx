import React, { Component /*,PropTypes*/} from 'react'

import {Suggestion,Grid,Row,Col,Button} from 'eagle-ui'
import Books from './Books'

export default class BookList extends Component{

    constructor(props){
        super(props)
    }

    getValue(value){
        //把参数传递给ajax
        this.props.getBooks(value,this.props.testmodel.get('bookList').toJS() )
    }
    query(){
        return this.props.testmodel.get('bookTypes').toJS()
    }
    componentDidMount(){
        this.props.queryBookTypes()
    }
    render(){
        let books = this.props.testmodel.get('books').toJS()
        return (
            <Grid fluid>
                <Row>
                    <Col sm={10} layer padding={0}>
                        <Suggestion
                            getValueCallback={::this.getValue}
                            queryCallback={::this.query}
                            icon="search"
                            iconDirection="left"
                            placeholder="请输入“测试”进行搜索" />
                    </Col>
                    <Col sm={2} end padding={0}>
                        <Button type="submit">查询</Button>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} end>
                        <Books {...this.props} books ={books}   />
                    </Col>
                </Row>

            </Grid>
        )
    }
}