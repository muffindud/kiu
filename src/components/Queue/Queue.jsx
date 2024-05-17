import React from 'react';
import './Queue.css'

function Queue({ queue, queueId, setQueueId }) {
  return (
    <div className='queue-card-container'>
      <div className='queue-card'>
        <div className='queue-card-header'>
          <h2>{queue.name}</h2>
        </div>
        <div className='queue-card-body'>
          <p>{queue.description}</p>
        </div>
        <div className='queue-card-list'>
          <ul>
            {queue.queue_list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Queue;
