import { useState } from 'react';
import './AddQueueForm.css'

function AddQueueForm({ onSubmit, onCancel}) {
  const [queueData, setQueueData] = useState({
    name: '',
    description: '',
    queue_list: []
  });

  return (
    <div className='add-queue-form-container'>
      <div className='form-window'>
        <form>
          <div className='form-queue-name'>
            <label>
              Queue Name
            </label>
            <br/>
            <input
              type='text'
              value={queueData.name}
              onChange={(e) => setQueueData({...queueData, name: e.target.value})}
              required
            />
          </div>

          <div className='form-description'>
            <label>
              Description (Optional)
            </label>
            <br/>
            <textarea
              value={queueData.description}
              onChange={(e) => setQueueData({...queueData, description: e.target.value})}
            />
          </div>

          <div className='form-buttons'>
            <button 
              type='button'
              onClick={() => onCancel()}
            >
              Cancel
            </button>
            <button 
              type='button'
              onClick={() => onSubmit(queueData)}
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddQueueForm;
