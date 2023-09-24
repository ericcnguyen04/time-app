
import '../App.css';

function BtnComponent(props) {
  return (
    <div>
      {(props.status === 0) ?
        <button 
        className='stopwatch-btn stopwatch-btn-gre'
        onClick={props.start}>Start
        </button> : ""
      }

      {(props.status === 1) ?
        <div>
          <button 
            className='stopwatch-btn stopwatch-btn-red'
            onClick={props.start}>
              Stop
          </button>
          <button 
            className='stopwatch-btn stopwatch-btn-yel'
            onClick={props.start}>
              Reset
          </button>
        </div> : ''
      }

    </div>
  );
}

export default BtnComponent;
