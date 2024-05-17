import { useState } from 'react';
import './AddQueueForm.css'

function AddQueueForm({ setFormState, handleAddQueue }) {
  const [elementsCount, setElementsCount] = useState(1);

  const [queueData, setQueueData] = useState({
    name: '',
    description: '',
    queue_list: []
  });

  const handleAddElement = (e) => {
    setQueueData({...queueData, queue_list: [...queueData.queue_list, e.target.value]});
  };

  const handleRemoveElement = (index) => {
    const newQueueList = queueData.queue_list.filter((item, i) => i !== index);
    setQueueData({...queueData, queue_list: newQueueList});
  };

  return (
    <div className='add-queue-form-container'>
      <div className='form-window'>
        <form
          className='add-queue-form'
          onSubmit={() => {handleAddQueue(queueData); setFormState(false)}}
        >
          <div className='form-queue-name'>
            <label>
              Queue Name
            </label>
            <br/>
            <input
              type='text'
              required
              value={queueData.name}
              onChange={(e) => setQueueData({...queueData, name: e.target.value})}
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

          {Array.from({length: elementsCount}, (_, i) => (
            <div className='form-element' key={i}>
              <input
                type='text'
                required
                onChange={handleAddElement}
              />
              <button
                type='button'
                onClick={() => handleRemoveElement(i)}
              >
                Remove
              </button>
            </div>
          ))}

          <div className='form-buttons'>
            <button 
              type='button'
              onClick={() => setFormState(false)}
            >
              Cancel
            </button>
            <button
              type='button'
              onClick={() => setElementsCount(elementsCount + 1)}
            >
              Add Element
            </button>
            <button 
              type='submit'
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
