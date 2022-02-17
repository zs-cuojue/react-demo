import React from 'react';
import { Button } from 'antd';
import './zs.css';

function Zs(props) {
  const clickBtn = () => {
    props.init(123)
  }
  return (
    <div className='zs'>
      <p>
        姓名:{props.name}, 年龄: {props.age}
        <br />
        Hello zs hello React!
      </p>
      <Button onClick={clickBtn}>子=&gt;父</Button>
    </div>
  );
}

export default Zs
