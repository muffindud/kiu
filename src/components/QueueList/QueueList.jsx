import React from 'react';
import './QueueList.css'
import Queue from '../Queue/Queue';

function QueueList({ queues, queueId, setQueueId }) {
  return (
    <div className='queue-list-container'>
      {Object.keys(queues).map((id) => (
        <Queue 
          queue={queues[id]}
          queueId={queueId}
          setQueueId={setQueueId}
        />
      ))}
    </div>
  );
}

export default QueueList;
