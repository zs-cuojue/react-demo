import React from 'react'
import { Button } from 'antd';
import Zs from '../zs/zs'

class classDemo extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      age: 24
    }
  }
  ageAdd = () => {
    this.setState(state => {
      return {
        age: state.age + 1
      }
    })
  }
  aggReduce = () => {
    if (this.state.age !== 0) {
      this.setState({
        age: this.state.age - 1
      })
    } else {
      this.setState({
          age: 24
      })
    }
  }
  init = (val) => {
    this.setState({
      age: val
  })
  }
  render() {
    return (
      <div>
        <Button onClick={this.ageAdd}  type="primary" danger>年龄加1</Button>
        &nbsp;
        <Button onClick={this.aggReduce} type="primary">年龄减1</Button>
        <Zs name = '张森' age= {this.state.age} init={this.init}/>
      </div>
    ) 
  }
}

export default classDemo