import './clock.css';

type ClockProps = {
  hours: number;
  minutes: number;
  seconds: number;
};

// When the time is less than 10, add a 0 before the time
const formatTime = (time: number): string => {
  return time < 10 ? `0${time}` : `${time}`;
};

// Clock component to display the time
const Clock = ({ hours, minutes, seconds }: ClockProps) => {
  return (
    <div className='clock'>
      <p className='clock__text'>
        {formatTime(hours)} : {formatTime(minutes)} : {formatTime(seconds)}
      </p>
    </div>
  );
};

export default Clock;
