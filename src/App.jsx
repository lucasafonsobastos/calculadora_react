import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';

function App() {

  const [numero, setNum] = useState('0');
  const [numero1, setNumero1] = useState('0');
  const [operador, setOperador] = useState('');

  const valor = (v) => {
    if(operador === ''){
      setNum(prev => `${prev === '0' ? '' : prev}${v}`);
    } else {
      //const num = numero;
      setOperador('');
      setNumero1(String(numero));
      setNum(v);
    }
  }

  const limpar = () => {
    setNum('0');
    setNumero1('0');
    setOperador('');
  }

  const calcular = () => {
    console.log(numero);
    console.log(operador);
    console.log(numero1);

      if(numero1 === '0'){
        setNumero1(numero);
        setNum('0');
        setOperador('+');
      } else {
        resultado();
        const num = Number(numero1) + Number(numero);
        setNum(String(num));
        setOperador('');

        console.log(numero);
        console.log(operador);
        console.log(numero1);
      }
  }

  const resultado = () => {
    let r = 0;
    switch (operador) {
      case '+':
        r = Number(numero1) + Number(numero);
        break;
    
      default:
        break;
    }
    setNum(String(r));
    console.log(r);
    //return r;
  }

  return (
    <div className="App">
      <div className='calc'>
        <Input value={numero} />
        <div className='but'>
          <Button title='AC' onClick = {() => limpar()}/>
          <Button title='C' onClick = {() => limpar()}/>
          <Button title='%' onClick = {() => calcular('%')}/>
          <Button title='/' onClick = {() => calcular('/')}/>
          <Button title='7' onClick = {() => valor('7')}/>
          <Button title='8' onClick = {() => valor('8')}/>
          <Button title='9' onClick = {() => valor('9')}/>
          <Button title='*' onClick = {() => calcular('*')}/>
          <Button title='4' onClick = {() => valor('4')}/>
          <Button title='5' onClick = {() => valor('5')}/>
          <Button title='6' onClick = {() => valor('6')}/>
          <Button title='-' onClick = {() => calcular('-')}/>
          <Button title='1' onClick = {() => valor('1')}/>
          <Button title='2' onClick = {() => valor('2')}/>
          <Button title='3' onClick = {() => valor('3')}/>
          <Button title='+' onClick = {() => calcular('+')}/>
          <Button title='0' onClick = {() => valor('0')}/>
          <Button title='0' onClick = {() => valor('0')}/>
          <Button title=',' />
          <Button title='=' />
        </div>
      </div>
    </div>
  );
}

export default App;
