import React, {useState} from 'react';

const App = () =>{

    const [btn, setBtn] = useState(0);

    const handleClick = (event) => {
        event.preventDefault();
        alert('Botao funcionando!!!');
    }

    return(
        <div>
            <h1>Até que enfim cheguei aqui!!!</h1>
            <button onClick={handleClick}>Ok</button>
        </div>)
};

export default App;