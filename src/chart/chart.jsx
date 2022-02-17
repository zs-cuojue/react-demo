import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/plots';
import chartData from './chartData.json'
import './chart.css'

const DemoColumn = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    setData(chartData)
  };
  const config = {
    data,
    xField: 'product_type',
    yField: 'order_amt',
    isGroup: true,
    isStack: true,
    seriesField: 'product_sub_type',
    groupField: 'sex',
    tooltip: {
      formatter: datum => ({
        name: `${datum.product_sub_type} ${datum.sex === '男' ? '👦' : '👧'}`,
        value: datum.order_amt,
      }),
    },
  };

  return (
    <div className='chart-box'>
      <Column {...config} />
    </div>
  ) 
};

export default DemoColumn
