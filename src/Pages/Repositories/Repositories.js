import React, { useEffect, useState } from 'react';
//useEffect fica monitorando mudanças numa variável e dispara uma função quando a variável for alterada. ele monitora todos os ciclos de vida do componente.
import * as S from './styled';
import { useHistory } from 'react-router-dom';

export default function Repositories() {
    const history = useHistory();
    const [ repositories, setRepositories ] = useState([]);
    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName');
        if(repositoriesName !== null) {
        repositoriesName = JSON.parse(repositoriesName);
        setRepositories(repositoriesName);
        localStorage.clear(); //limpando o local storage
        //ele vai armazenar em repositoriesName o valor repositoriesname que estiver no localstorage
        } else {
            history.push('/')
        }
    }, []);
    //se nao passar nada nesse array do useEffect, ele vai monitorar quando o componente montar
    return(
        <S.Container>
            <S.Title>Repositórios</S.Title>
            <S.List>
                { repositories.map(repository => {
                    return(
                        <S.ListItem>Repositório: { repository }</S.ListItem>
                    )
                })}
            </S.List>
            <S.LinkHome to="/">Voltar</S.LinkHome>
        </S.Container>
    );
}