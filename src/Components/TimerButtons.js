
import '../App.css';

function TimerButtons(props) {
  return (
    <div>
      {(props.status === 0) ?
        <div>
          <button 
              className='stopwatch-btn stopwatch-btn-gre'
              onClick={props.start}> Start
          </button>
          {/* <button 
              className='stopwatch-btn stopwatch-btn-red'
              onClick={props.stop}>
                Cancel
          </button>  */}
        </div> : ''
      }

      {(props.status === 1) ?
        <div>
          <button 
            className='stopwatch-btn stopwatch-btn-yel'
            onClick={props.stop}>
              Pause
          </button>
          <button 
            className='stopwatch-btn stopwatch-btn-red'
            onClick={props.restart}>
              Cancel
          </button>
        </div> : ''
      }

      {(props.status === 2) ?
        <div>
          <button 
            className='stopwatch-btn stopwatch-btn-gre'
            onClick={props.start}>
              Resume
          </button>
          <button 
            className='stopwatch-btn stopwatch-btn-red'
            onClick={props.restart}>
              Cancel
          </button>
        </div> : ''
      }

    </div>
  );
}

export default TimerButtons;
