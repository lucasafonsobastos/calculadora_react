import './index.css';

function Button({ title, onClick}) {  
  return (
      <button onClick={onClick} type="button">
        {title}
      </button>
    );
  }
  
  export default Button;