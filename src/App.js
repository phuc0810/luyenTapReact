import logo from './logo.svg';
import './App.css';
import MainComponent from './BaiTapComponent/MainComponent';
import Databinding from './DataBinding/Databinding';
import HandleEvent from './HandleEvent/HandleEvent';
import MainBsComponent from './StarBootstrap/MainBsComponent';

function App() {
  return (
    <div className="App">
      {/* <MainComponent/> */}
      {/* <Databinding/> */}
      {/* <HandleEvent/> */}
      <MainBsComponent/>
    </div>
  );
}

export default App;
