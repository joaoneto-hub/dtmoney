import { createContext, useEffect, useState, ReactNode } from 'react';
import { api } from './components/services/api';

interface Transaction {
  id: number,
  title: string,
  type: string,
  amount: number,
  category: string,
  createdAt: string
}
interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext<Transaction[]>([]);

export function TransactionProvider({ children }: TransactionsProviderProps) {
  const [transaction, setTransaction] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get("transactions").then((response) => setTransaction(response.data.transactions));
  }, []);

  return (

    <TransactionsContext.Provider value={transaction}>
      {children}
    </TransactionsContext.Provider>

  )
}