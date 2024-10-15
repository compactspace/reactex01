import styled from 'styled-components'



const Freetagname = styled.button`
    background-color: red;
    width: 100px;
    height: 100px;
`;


export function HelloWorld() {
  return <Freetagname>Hello World!</Freetagname>;
}