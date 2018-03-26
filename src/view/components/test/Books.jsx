import React, { Component /*,PropTypes*/} from 'react'
import {Row,Col,Table,Tr,Td,Th,Button} from 'eagle-ui'

export default class Books extends Component{

    constructor(props){
        super(props)
    }

    checkUpdatePanel(index){
        //this.props.updateBook(index)
        if(index>=0){
            
            this.props.updateBookModel('book',this.props.books[index] )
        }
        this.props.updateBookModel('updateIndex',index )
    }
    onchange(key,e){
        this.props.updateBookModel(key,e.target.value )
    }

    getUpdatePanel(item){
        let index = this.props.testmodel.get('updateIndex')
        let book = this.props.testmodel.get('book').toJS()
        return (
            <Tr key={item.name}>
                <Td><input className='test-input' onChange={this.onchange.bind(this,'book.name')} value={book.name} /></Td>
                <Td><input className='test-input' onChange={this.onchange.bind(this,'book.author')} value={book.author} /></Td>
                <Td><input className='test-input' onChange={this.onchange.bind(this,'book.press')} value={book.press} /></Td>
                <Td><input className='test-input' onChange={this.onchange.bind(this,'book.price')} value={book.price} /></Td>
                <Td><input className='test-input' onChange={this.onchange.bind(this,'book.date')} value={book.date} /></Td>
                <Td><input className='test-input' onChange={this.onchange.bind(this,'book.description')} value={book.description} /></Td>
                <Td><Button onClick={()=>{
                    this.props.updateBook(index,book )
                }}>保存</Button>  <Button onClick={this.checkUpdatePanel.bind(this,-1)}>取消</Button></Td>
            </Tr>
        )
    }
    getDataPanel(item,index){

        return (
            <Tr key={item.name}>
                <Td>{item.name}</Td>
                <Td>{item.author}</Td>
                <Td>{item.press}</Td>
                <Td>{item.price}</Td>
                <Td>{item.date}</Td>
                <Td>{item.description || '无'}</Td>
                <Td><Button onClick={this.props.delBook.bind(this,index)}>删除</Button>  <Button onClick={this.checkUpdatePanel.bind(this,index)}>修改</Button></Td>
            </Tr>
        )  
    }

    render(){
        const updateIndex = this.props.testmodel.get('updateIndex')
        return (

            <Row>
                <Col>
                    <Table>
                        <thead>
                        <Tr>
                            <Th clickCallback={()=>{}}>书名</Th>
                            <Th clickCallback={()=>{}}>作者</Th>
                            <Th clickCallback={()=>{}}>出版社</Th>
                            <Th clickCallback={()=>{}}>价格</Th>
                            <Th clickCallback={()=>{}}>出版日期</Th>
                            <Th clickCallback={()=>{}}>简介</Th>
                            <Th clickCallback={()=>{}} style={{
                                width:'15%'
                            }}>操作</Th>
                        </Tr>
                        </thead>
                        <tbody>
                            {
                                this.props.books.map((item,index)=>{
                                    return updateIndex ===index ? this.getUpdatePanel(item ):this.getDataPanel(item,index)
                                })
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        )
    }
}