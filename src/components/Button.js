import React from 'react';
import styled, {css} from 'styled-components';
import {darken, lighten} from 'polished';

const StyledButton = styled.button`

    // 공통스타일
    display: inline-flex;
    outline: none;
    border: noen;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;

    // 크기
    height: 2.25rem;
    font-size: 1rem;

    // 색상
    ${props => {
        const selected = props.theme.palette.gray;
        return css`
            background: ${selected};
            &:hover{
                background: ${lighten(0.1,selected)};
            }
            &:active{
                background: ${darken(0.1,selected)};
            }
        
        `
    }}

  

    // 기타
    & + &{
        margin-left: 1rem;
    }
`;

function Button({children, ...rest}){
    return <StyledButton {...rest}>{children}</StyledButton>
}

export default Button;
