import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
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
