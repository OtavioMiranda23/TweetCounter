import { Container, LengthIndicator } from "./styles";

interface ICounterOrigin {
    counterOrigin: number;
    limmit: number
}

export function Counter (props: ICounterOrigin) {

    
    return (
        <Container>
            <LengthIndicator
             countValue={props.counterOrigin}
             limmitValue={props.limmit}
             >
                { props.counterOrigin <= props.limmit ?
                `Você digitou ${props.counterOrigin} caracteres!`:
                `Retire ${props.counterOrigin - props.limmit} caracteres!` }
                
            </LengthIndicator>
        </Container>
    )
};