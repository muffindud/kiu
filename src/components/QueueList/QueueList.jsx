import React from 'react';
import './QueueList.css'
import Queue from '../Queue/Queue';

function QueueList({ queues, handleDeleteQueue }) {
  const [, forceUpdate] = React.useState();

  return (
    <div className='queue-list-container'>
      {Object.keys(queues).map((id) => (
        <Queue 
          queue={queues[id]}
          queueId={id}
          handleDeleteQueue={handleDeleteQueue}
          forceUpdate={forceUpdate}
        />
      ))}
    </div>
  );
}

export default QueueList;
