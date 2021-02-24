import * as S from './styled';
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from  'react-router-dom';
//o history permite controlar qual pagina estamos

function App(props) {
    const history = useHistory();
    const [ usuario, setUsuario ] = useState('');
    const [ erro, setErro ] = useState(false);
  //usando destructuring pra passar o useState
    function handlePesquisa() {
        axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
            // aqui guardando os nomes do repositorio num array para poder acessar/usar depois
            const repositories = response.data;
            const repositoriesName = [];
            repositories.map(repository => {
                repositoriesName.push(repository.name);
            });
            localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
            setErro(false);
            history.push('/repositories');
        })
        .catch(err => {
            setErro(true);
        });
    }

    return(
        <S.Container>
            <S.Input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario} />
            <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
            { erro ? <S.ErrorMsg>Usuário não encontrado</S.ErrorMsg> : '' }
            {/* se ocorrer o erro, mostre a mensagem de erro */}
        </S.Container>
    )
}

export default App;