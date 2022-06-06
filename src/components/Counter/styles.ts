import styled from "styled-components";

type Props = {
    countValue: number,
    limmitValue: number
}

export const Container = styled.div`
    //border: 1px solid magenta;
    //color: var(--blue);
    font-size: clamp(1rem , 1.1rem ,1.2rem);
    justify-content: center;
    text-align: center;
    
    //cê bota pra width ter no mínimo 300px, tentar ocupar 40% da tela e ter no máximo 600px, algo assim
`;

export const LengthIndicator = styled.div<Props>`
    color: ${(props) => props.countValue > props.limmitValue ? '#CF1C1C ' : '#1DA1F2'};
    //font-size: ${(props) => props.countValue > props.limmitValue ? '1.2rem' : '1rem' } ;

 `