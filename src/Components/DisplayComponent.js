function DisplayComponent(props) {
  return (
    <div>
        <span>{(props.time.h >= 10) ? props.time.h : "0" + props.time.h}</span>&nbsp;:&nbsp;
        <span>{props.time.m}</span>&nbsp;:&nbsp;
        <span>{props.time.s}</span>&nbsp;:&nbsp;
        <span>{props.time.ms}</span>&nbsp;:&nbsp;
    </div>
  );
}

export default DisplayComponent;
