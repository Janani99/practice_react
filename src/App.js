import './App.css';
import WebWorkerExample from './webWorker';
// import Counter from './hooks/useState/counter';
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

function App() {
  return (
    <div className="App">
      <p style={{ background: "red" }}> PRACTICE REACT </p>
      {/* ---------------------------useState samples */}
      {/* <Counter/>
      <FormInput/>
      <ArrayOfItems/> */}
      {/* ---------------------------useState samples */}

      {/* ---------------------------webworker samples */}
      {/* <WebWorkerExample/> */}
      {/* ---------------------------webworker samples */}
      {/* --------------------------- useEffect */}

      {/* <UseEffectSample /> */}
      {/* <FocusInput/> */}
      {/* <Timer/> */}

{/* <CounterRef/> */}
{/* <IntervalTimer/> */}
{/* <UseMemo/> */}
{/* <Parent/> */}
<UseContext/>
    </div>
  );
}

export default App;
