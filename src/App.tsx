import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { useState } from 'react';
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionOpen, setIsNewTransactionOpen] = useState(false);

    function handleOpenNewTransaction() {
        setIsNewTransactionOpen(true);
    }

    function handleCloseNewTransaction() {
        setIsNewTransactionOpen(false);
    }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransaction} />
      <Dashboard />

      <NewTransactionModal
      isOpen={isNewTransactionOpen}
      onRequestClose={handleCloseNewTransaction}
      />
      <GlobalStyle />
    </>
  );
}
