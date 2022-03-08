import { createContext, useEffect, useState, ReactNode, useContext } from 'react';
import { api } from '../components/services/api';

interface Transaction {
  id: number,
  title: string,
  type: string,
  amount: number,
  category: string,
  createdAt: string
};

type transactionInput = Omit<Transaction, 'id' | 'createdAt'>;
interface TransactionsProviderProps {
  children: ReactNode;
};

interface transactionsContextData {

    transactions: Transaction[],
    createTransaction: (transaction: transactionInput) => Promise<void>;

};

const TransactionsContext = createContext<transactionsContextData>(
  {} as transactionsContextData
);

export function TransactionProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransaction] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get("transactions").then((response) => setTransaction(response.data.transactions));
  }, []);

 async function createTransaction (transactionINput: transactionInput){ 
   const response =  await api.post('/transactions', {
     ...transactionINput,
     createdAt: new Date()
   });
   const transaction = response.data.transactions;

   setTransaction([
    ...transactions,
    transaction
   ]);
  };

  return (

    <TransactionsContext.Provider value={{transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>

  );
};

export function useTransactions () {

  const context = useContext(TransactionsContext)

  return context;

}