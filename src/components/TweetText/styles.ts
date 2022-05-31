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

        padding: 1rem;
        margin-top: 1rem;
        margin-bottom: 0;
        height: 20rem;
        width: 50%;
        border: ${props =>  props.counterOrigin > props.limmit ? '1px solid #E74C3C'  : '1px solid #0aa0d0' }  ;
        border-radius: 0.5rem;
        resize: none;
    }
    textarea:focus  {
        outline: none;
        
    }
`