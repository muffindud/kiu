import React from 'react';
import './QueueList.css'
import Queue from '../Queue/Queue';

function QueueList({ queues }) {
  return (
    <div className='queue-list-container'>
      {queues.map((queue, index) => (
        <Queue queue={queue}/>
      ))}
    </div>
  );
}

export default QueueList;
