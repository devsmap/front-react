import React, {
  Component,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';
import SideBar from '../components/SideBar';

type SideBarContextData = {
  isOpen: boolean;
  open(childComponent?: React.ReactNode): Promise<void>;
  close(): Promise<void>;
};

const SideBarContext = createContext<SideBarContextData>(
  {} as SideBarContextData,
);

const SideBarProvider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [childComponent, setChildComponent] = useState<React.FC>(() => (
    <>
      <div>Empty</div>
    </>
  ));

  const open = useCallback(async (child) => {
    setChildComponent(child);
    setIsOpen(true);
  }, []);

  const close = useCallback(async () => {
    setIsOpen(false);
  }, []);

  return (
    <SideBarContext.Provider
      value={{
        open,
        close,
        isOpen,
      }}
    >
      <SideBar isOpen={isOpen}>{childComponent}</SideBar>
      {children}
    </SideBarContext.Provider>
  );
};

function useSideBar(): SideBarContextData {
  const context = useContext(SideBarContext);

  if (!context) {
    throw new Error('useSideBar must be used within an SideBarProvider');
  }

  return context;
}

export { SideBarProvider, useSideBar };
