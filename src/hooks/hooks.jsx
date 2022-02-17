import React, {useState, useEffect} from "react";
import { Button } from 'antd';

function Hooks() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (count) {
      document.title = `You clicked ${count} times`
    }
  })
  return (
    <Button onClick={() => {setCount(count + 1)}} type="primary">点击修改文档标题</Button>
  )
}

export default Hooks
