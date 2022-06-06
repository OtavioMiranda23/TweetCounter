import styled from "styled-components";

type Props = {
    counterOrigin: number;
    limmit: number
}

export const TextBox = styled.div<Props>`
    color: var(--text-body);
    //border: 1px solid magenta;
    margin-top: 1rem ;
    margin-bottom: 0rem;

    h2 {
        text-align: center;
        //border: 1px solid magenta;
        color: var(--blue);
    }

    textarea {
        font-size: 1.2rem;
        padding: 1rem;
        margin-top: 1rem;
        margin-bottom: 0;
        height: clamp(60vh, 50vh, 15rem);
        width: clamp(60vw, 60vh, 40%);
        border: ${props =>  props.counterOrigin > props.limmit ? '1px solid #E74C3C'  : '1px solid #0aa0d0' }  ;
        border-radius: 0.5rem;
        resize: none;
    }
    textarea:focus  {
        outline: none;
        
    }
`

export const ButtonCopy = styled.button`
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    margin: 0.3rem;
    color: var(--blue);
    background-color: var(--shape);
    border: 1px solid #0aa0d0;
    cursor: pointer;
    transition: 50ms;

    :hover {
        background-color: #FFFFFF;
        position: relative;
        top: -1px;
        box-shadow: 0px 5px 1px rgba(0, 0, 0, 0.1);
    }

    :active {
        background-color: var(--blue);
        color: var(--shape);
    }
    
`;