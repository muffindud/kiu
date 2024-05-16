import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className='add-button'>
        <button 
          className='add-queue-button'
          onClick={() => {console.log('Add Queue Button Clicked!')}}
        >
          +
        </button>
      </div>

      <div className='toggle-switch'>
        <input 
          type='checkbox' 
          className='toggle-switch-checkbox'
          id='theme-toggle' 
          name='theme-toggle'
        />
        <label 
          htmlFor='theme-toggle' 
          className='toggle-switch-label'
        >
          <span className='toggle-switch-inner' />
          <span className='toggle-switch-switch' />
        </label>
      </div>
    </nav>
  );
}

export default Navbar;
