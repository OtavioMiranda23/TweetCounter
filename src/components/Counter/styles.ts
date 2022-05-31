import styled from "styled-components";

type Props = {
    countValue: number,
    limmitValue: number
}

export const Container = styled.div`
    //border: 1px solid magenta;
    //color: var(--blue);
    font-size: 1.1rem;
    margin: auto 10rem;
    text-align: center;
`;

export const LengthIndicator = styled.div<Props>`
    color: ${(props) => props.countValue > props.limmitValue ? '#CF1C1C ' : '#1DA1F2'};
    font-size: ${(props) => props.countValue > props.limmitValue ? '1.2rem' : '1rem' } ;

 `