import './App.css';
import BaseRouter from './router';

function App() {
  return (
    <div className="App">
      <div className='nav'>
        <a href='#/'>home</a> | <a href='#/about'>about</a> | <a href='#/chart'>chart</a> | <a href='#/echarts'>echarts</a> | <a href='#/hooks'>hooks</a><br />
      </div>
      <div className='content'>
        <BaseRouter />
      </div>
    </div>
  );
}

export default App;
