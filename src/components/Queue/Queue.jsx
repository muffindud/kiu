import React from 'react';
import './Queue.css'
import { api_host } from '../../config';

function Queue({ queue, queueId, handleDeleteQueue, forceUpdate }) {
  const handleRemoteDeleteQueue = (queueId) => {
    fetch(api_host + "/queue?id=" + queueId, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
      }
    })
      .catch((error) => console.error('Error:', error))
  };

  return (
    <div className='queue-card-container'>
      <div className='queue-card'>
        <div className='queue-card-header'>
          <h2>{queue.name}</h2>
          <button 
            className='delete-queue-button'
            onClick={() => {
              handleDeleteQueue(queueId); 
              handleRemoteDeleteQueue(queueId)
            }}
          >
            Delete
          </button>
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
