
import '../App.css';

function TimerButtons(props) {
  return (
    <div>
        <button 
            className='stopwatch-btn stopwatch-btn-yel'
            onClick={props.start}> Restart
        </button>

      {(props.status === 1) ?
        <div>
          <button 
            className='stopwatch-btn stopwatch-btn-red'
            onClick={props.stop}>
              Stop
          </button>
          <button 
            className='stopwatch-btn stopwatch-btn-yel'
            onClick={props.reset}>
              Reset
          </button>
        </div> : ''
      }

      {(props.status === 2) ?
        <div>
          <button 
            className='stopwatch-btn stopwatch-btn-gre'
            onClick={props.resume}>
              Resume
          </button>
          <button 
            className='stopwatch-btn stopwatch-btn-yel'
            onClick={props.reset}>
              Reset
          </button>
        </div> : ''
      }

    </div>
  );
}

export default TimerButtons;
