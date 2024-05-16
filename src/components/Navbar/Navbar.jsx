import './Navbar.css';
import { useThemeHandler } from '../ThemeHandler/ThemeHandler';

function Navbar({ setFormState }) {
  const {theme, toggleTheme} = useThemeHandler()

  return (
    <nav className='navbar'>
      <div className='add-button'>
        <button 
          className='add-queue-button'
          onClick={() => setFormState(true)}
        >
          +
        </button>
      </div>

      <div className='toggle-switch'>
        <input 
          onClick={toggleTheme}
          type='checkbox' 
          className='toggle-switch-checkbox'
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
