import React from 'react';
import * as C from './styles';
import { IoIosSearch } from "react-icons/io";

function Search({ value, onChange }) {
    return (
        // <div className='container'>
        //     <C.Banner>
        //         <C.Text>BLOG</C.Text>
                <C.InputWrapper>
                    <IoIosSearch color='black' size={20} />
                    <C.InputSearch
                        placeholder='Search here'
                        value={value}
                        onChange={onChange}
                    />
                </C.InputWrapper>
        //     </C.Banner>
        // </div>
    );
}

export default Search;
