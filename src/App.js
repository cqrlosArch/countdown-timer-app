import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { colors } from './theme/colors';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Counter from './components/Counter';
import Footer from './components/Footer';
import { TimeProvider } from './context/TimeContext';

const GlobalStyled = createGlobalStyle`
    html{
      font-size:14px;
    }
    *,
    *::before,
    *::after{
      box-sizing:border-box;
    }

    body{
      font-family: 'Red Hat Text', sans-serif;
      margin:0;
      position:relative;
      background: hsl(235, 16%, 14%) url('images/bg-stars.svg')  no-repeat;
      background-size:cover;
      overflow:hidden;
      color:hsl(0, 0%, 100%);
      min-height:100vh;
      height:100vh;
      @media screen and (max-width: 500px){
        
      }
    
     
      &::after{
        content:'';
        position:absolute;
        bottom:-30px;
        width:100%;
        height:200px;
        background:url('images/pattern-hills.svg') no-repeat bottom;
        background-size:100%;
        overflow:hidden;
        @media screen and (max-width: 500px){
        
      }
      }
    }
`;

function App() {
  return (
    <>
      <GlobalStyled />
      <TimeProvider>
        <ThemeProvider theme={colors}>
          <Wrapper>
            <Header />
            <Counter />
            <Footer />
          </Wrapper>
        </ThemeProvider>
      </TimeProvider>
    </>
  );
}

export default App;
