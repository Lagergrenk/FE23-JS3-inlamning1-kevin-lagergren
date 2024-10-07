import './clock.css';

type ClockProps = {
  hours: number;
  minutes: number;
  seconds: number;
};

// Clock component to display the time
const Clock = (props: ClockProps) => {
  // When the time is less than 10, add a 0 before the time
  const formatTime = (time: number): string => {
    return time < 10 ? `0${time}` : `${time}`;
  };

  return (
    <div className='clock'>
      <p className='clock__text'>
        {formatTime(props.hours)} : {formatTime(props.minutes)} : {formatTime(props.seconds)}
      </p>
    </div>
  );
};

export default Clock;
