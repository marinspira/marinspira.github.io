import React from 'react';
import * as C from './styles'

function Search() {
    return (
        <>
            <C.Banner />
            <C.InputSearch placeholder='Faça sua busca aqui' />
        </>
    );
}

export default Search;