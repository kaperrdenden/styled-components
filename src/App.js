import logo from './logo.svg';
import './App.css';
import styled, {css} from 'styled-components';
import Button from './components/Button';
import { ThemeProvider } from 'styled-components';

const Circle = styled.div`

  width: 5rem;
  height: 5rem;
  background: ${props => props.color || 'black'};
  // props.color이 존재하면 해당 컬러를 사용해주고 없으면 black 
  border-radius: 50%;
  ${ props =>
    props.huge && 
    css`
      width:10rem;
      height:10rem;
    ` }
  // 만약 props.에 huge가 존재하면 css를 이용해서 추가 css를 적어준다
  // css는 여러줄의 css코드를 조건부로 보여줄 때 이용
  
    `;
  
const AppBlock = styled.div`
    width: 512px;
    margin: 0 auto;
    margin-top: 4rem;
    border: 1px solid black;
    padding: 1rem;
`;
function App() {
  return (

    <ThemeProvider
      theme={{
        palette:{
          blue: '#228be6',
          gray: '#495057',
          pink: '#f06595',
        }
      }}
    >
      <AppBlock>
            <Button>Button</Button>
       </AppBlock>
    </ThemeProvider>
   
  );
}

export default App;
