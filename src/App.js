import React from 'react';
import ReactDOM from 'react-dom';

function Clock() {
  const [date, setDate] = React.useState(new Date());
  React.useEffect(() => {
    setInterval(() => setDate(new Date()), 1000);
    return () => {
      clearInterval();
    };
  }, [date]);

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}
function tick() {
  ReactDOM.render(<Clock />, document.getElementById('root'));
}

setInterval(tick, 1000);

export default tick;
