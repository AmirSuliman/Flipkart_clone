import { createContext, ReactNode, useState } from 'react';

export const DataContext = createContext<{
  account: string;
  setAccount: (value: string) => void;
} | null>(null);

const DataProvider = ({ children }: { children: ReactNode }) => {
  const [account, setAccount] = useState('');
  return (
    <DataContext.Provider value={{ account, setAccount }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
