import React from 'react';
import * as C from './styles';
import { IoIosSearch } from "react-icons/io";

function Search({ value, onChange }) {
    return (
        <C.Banner>
            <C.Text>BLOG</C.Text>
            <C.InputWrapper>
                <IoIosSearch color='black' size={30} />
                <C.InputSearch
                    placeholder='Search here'
                    value={value}
                    onChange={onChange}
                />
            </C.InputWrapper>
        </C.Banner>
    );
}

export default Search;
