import logo from './logo.svg';
import './App.css';
import styled, {css} from 'styled-components';
import Button from './components/Button';
import { ThemeProvider } from 'styled-components';
import Dialog from './components/Dialog';
import { useState } from 'react';

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
const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;
function App() {
  const [dialog, setDialog] = useState(false);
  const onClick = () => {
    setDialog(true);
  
  }
  const onConfirm = () => {
    console.log("확인");
    setDialog(false);
  }
  const onCancel = () => {
    console.log("취소");
    setDialog(false);
  }
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
      <>
      <AppBlock>
            <ButtonGroup>
          
              <Button size="large">Button</Button>
              <Button>Button</Button>
              <Button size="small">Button</Button>
                  
            </ButtonGroup>
            <ButtonGroup>
          
          <Button color="gray" size="large">Button</Button>
          <Button color="gray">Button</Button>
          <Button color="gray" size="small">Button</Button>
              
        </ButtonGroup>
        <ButtonGroup>
          
          <Button color="pink" size="large" outline>Button</Button>
          <Button color="pink" outline>Button</Button>
          <Button color="pink" size="small" outline>Button</Button>
              
        </ButtonGroup>
        <ButtonGroup>
          
          <Button  size="large" fullWidth>Button</Button>
          <Button color="pink" fullWidth>Button</Button>
          <Button color="gray" size="small" fullWidth onClick={onClick}>삭제</Button>
              
        </ButtonGroup>
       </AppBlock>
       <Dialog
        title="정말로 삭제하시겠습니까"
        confirmText="삭제"
        cancelText="취소"
        onConfirm={onConfirm}
        onCancel={onCancel}
        visible={dialog}
       >
         데이터를 정말로 삭제하시겠습니까?
       </Dialog>
       </>
    </ThemeProvider>
   
  );
}

export default App;
