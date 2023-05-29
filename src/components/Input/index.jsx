import './index.css';

function Input(props) {
  const { value } = props;  
  return (
    <div>
        <input disabled value={value} />
    </div>
    );
  }
  
  export default Input;