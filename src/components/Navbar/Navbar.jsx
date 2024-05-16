import './Navbar.css';
import { useThemeHandler } from '../ThemeHandler/ThemeHandler';

function Navbar() {
  const {theme, toggleTheme} = useThemeHandler()

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
          onClick={toggleTheme}
          type='checkbox' 
          className={theme === 'dark' ? 'toggle-switch-checkbox' : 'toggle-switch-checkbox light'}
          id='theme-toggle' 
          name='theme-toggle'
          defaultChecked={theme === 'dark'}
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
