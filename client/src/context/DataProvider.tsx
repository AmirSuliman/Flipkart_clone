import { createContext, ReactNode, useState } from 'react';

interface DataContextType {
  account: string;
  setAccount: (value: string) => void;
}

const defaultContextValue: DataContextType = {
  account: '',
  setAccount: () => {},
};

export const DataContext = createContext<DataContextType>(defaultContextValue);
const DataProvider = ({ children }: { children: ReactNode }) => {
  const [account, setAccount] = useState<string>(''); // State to manage the account
  return (
    <DataContext.Provider value={{ account, setAccount }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
