import React from 'react'
import styled from 'styled-components'
import connect from '@connect'
import { Card, Modal, Button,Input,Row,Col } from 'antd';


const Root = styled.div`
    display:flex;
    flex-wrap: wrap;
    header{
        width:100%;
        margin:10px 5px;
        border-radius:5px;
        background:#fff;
        text-align:center;
        padding:10px 0;
        font-size:20px;
    }
    .infoCard{
        width:300px;
        margin:10px;
    }
    .textLabel{
        display:flex;
        span{
            width:20%;
            line-height:32px;
        }
    }
`

@connect('contacts')
export default class Contacts extends React.Component {

    constructor(props){
        super(props)
        this.state={
            userArr:[],
            visible:false,
            itemInfo:{}
        }
    }
    async componentDidMount(){
        await this.props.loadContactsUsers()
        this.setState({
            userArr:this.props.userArr
        })
    }

    showModel(item){
        this.setState({
            visible:true,
            itemInfo:item
        })
       
    }
    handleCancel(){
        this.setState({
            visible:false
        })
    }

    render() {
        const { userArr,visible,itemInfo } = this.state;
        return (
            <Root>
                <header>通讯录</header>
                <div >
                    {
                        userArr.map(item => {
                            return(
                                <Card key={item.uid} 
                                    className='infoCard'
                                    title={item.name} extra={<a onClick={this.showModel.bind(this,item)}>编辑</a>}>
                                    <p>{item.gender}</p>
                                    <p>{item.phone}</p>
                                    <p>{item.city.name[0]+'  - '+item.city.name[1]}</p>
                                    <p>{item.education.label}</p>
                                </Card>
                            )
                        })
                    }
                </div>
                <Modal title="编辑用户信息"
                    visible={visible}
                    // onOk={this.handleOk}
                    // confirmLoading={confirmLoading}
                    onCancel={this.handleCancel.bind(this)}
                >
                    <Row className='textLabel'>
                        <span>姓名：</span>
                        <Input value={itemInfo.name}></Input>
                    </Row>
                    <Row className='textLabel'>
                        <span>姓名：</span>
                        <Input value={itemInfo.name}></Input>
                    </Row>
                    <Row className='textLabel'>
                        <span>姓名：</span>
                        <Input value={itemInfo.name}></Input>
                    </Row>
                    <Row className='textLabel'>
                        <span>姓名：</span>
                        <Input value={itemInfo.name}></Input>
                    </Row>
                    
                </Modal>
            </Root>
        )
    }
}