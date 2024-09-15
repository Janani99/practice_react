import './App.css';
import WebWorkerExample from './webWorker';
import Counter from './hooks/useState/counter';
import FormInput from './hooks/useState/formInput';
import ArrayOfItems from './hooks/useState/arrayOfItems';
import UseEffectSample from './hooks/useEffect/useEffect';
import FocusInput from './hooks/useRef/focusInput';
import Timer from './hooks/useRef/timer';
import CounterRef from './hooks/useRef/counter';
import IntervalTimer from './hooks/useRef/intervalTimer';
import UseMemo from './hooks/useMemo/useMemo';
import Parent from './hooks/useCallback/parent';
import UseContext from './hooks/useContext';
import { Route, Routes } from 'react-router-dom';
import Navigation from './navigationList';
import Home from './home';
import HooksNavigation from './hooks/hooksNavigation';
import UseState from './hooks/useState/useState';
import UseRef from './hooks/useRef/useRef'




function App() {

  return (
    <div className="App">
      <p style={{ background: "red" }}> PRACTICE REACT </p>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='webworker' element={<WebWorkerExample />}></Route>
        <Route path="hooks/*" element={<HooksNavigation />}>
          <Route path="useState/*" element={<UseState />}>
            <Route path="arrayofItems" element={<ArrayOfItems />}></Route>
            <Route path="counter" element={<Counter />}></Route>
            <Route path="formInputs" element={<FormInput />}></Route>
          </Route>
          <Route path="useRef/*" element={<UseRef/>}>
          <Route path="counterRef" element={<CounterRef />}></Route>
          <Route path="focusInput" element={<FocusInput />}></Route>
          <Route path="intervalTimer" element={<IntervalTimer />}></Route>
          <Route path="timer" element={<Timer />}></Route>
          </Route>
          <Route path="useEffect" element={<UseEffectSample />}></Route>
          <Route path="useMemo" element={<UseMemo />}></Route>
          <Route path="useCallback" element={<Parent />}></Route>
          <Route path="useContext" element={<UseContext />}></Route>
           
        </Route>
      </Routes>

    </div>
  );
}

export default App;
