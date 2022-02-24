import { useState } from "react";
import Modal from 'react-modal';
import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

export function Header() {

  const [ isNewTransectionOpen, setIsNewTransectionOpen ] = useState(false);

  function handleOpenNewTransectionModal(){
    setIsNewTransectionOpen(true)
  }

  function handleCloseNewTransectionModal(){
    setIsNewTransectionOpen(false)
  }

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dtmoney" />
        <button type="button" onClick={handleOpenNewTransectionModal}>
          Nova transação
        </button>
      </Content>

      <Modal 
        isOpen={isNewTransectionOpen} 
        onRequestClose={handleCloseNewTransectionModal}
      >
        <h2>Cadastrar Transação</h2>
      </Modal>

    </Container>
  )

}