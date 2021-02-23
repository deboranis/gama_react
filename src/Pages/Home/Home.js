import * as S from './styled';
import React, { useState } from 'react';
import axios from 'axios';

function App(props) {
    const [ usuario, setUsuario ] = useState('');
  //usando destructuring pra passar o useState
    function handlePesquisa() {
        axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
            // aqui guardando os nomes do repositorio num array para poder acessar/usar depois
            const repositories = response.data;
            const repositoriesName = [];
            repositories.map((repository) => {
                repositoriesName.push(repository.name);
            });
            localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName))
        });
    }
    return(
        <S.Container>
            <S.Input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario} />
            <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
        </S.Container>
    )
}

export default App;