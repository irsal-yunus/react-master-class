import React from 'react'
import logo from './logo.svg'
import styled, { ThemeProvider } from 'styled-components'


const theme  = {
  primary: "red",
  secondary: "blue"
}

const Container = styled.div`
  text-align: center;
`
const Head = styled.h1`
  color: ${props => props.theme.secondary};
`

const Brand = styled.img`
  height: 10vh;
  margin-top: 2rem;
`
const Button = styled.button`
  color: #fff;
  background: ${props => props.primary ? "blue" : "red"};
  padding: 0.5rem 1rem;
  border: none;
  margin: 0 1rem;
`

const TomatoButton = styled(Button)`
  background: tomato;
`
const Wrapper = styled.div`
  background: yellow;
  a.test{
    background: orange;
  }
`

const AnotherButton = styled.button`
  ${props => {
    switch(props.variant){
      case "primary":
        return `background: blue`
      case "success":
        return `background: green`
      default:
        return `background: grey`
    }
  }}
`
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Brand src={logo} alt={logo} />
          <Head>Styled components</Head>      
          <Button>Primary</Button>
          <Button primary>primary</Button>
          <TomatoButton>my-tomato</TomatoButton>
          <Wrapper>biasa</Wrapper>
          <Wrapper className="test">with classname</Wrapper>     
          <AnotherButton variant="primary">primary</AnotherButton>
          <AnotherButton variant="success">success</AnotherButton>
      </Container>
    </ThemeProvider>
  );
}

export default App;