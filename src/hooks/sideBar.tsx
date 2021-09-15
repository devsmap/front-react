import React, { createContext, useCallback, useContext, useState } from 'react';
import SideBar from '../components/SideBar';

type SideBarContextData = {
  isOpen: boolean;
  open(childComponent?: React.ReactNode): Promise<void>;
  close(): Promise<void>;
  isSubOpen: boolean;
  openSub(subChildComponent?: React.ReactNode): Promise<void>;
  closeSub(): Promise<void>;
};

const SideBarContext = createContext<SideBarContextData>(
  {} as SideBarContextData,
);

const SideBarProvider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSubOpen, setIsSubOpen] = useState<boolean>(false);
  const [childComponent, setChildComponent] = useState<React.FC>(() => (
    <>
      <div>Loading</div>
    </>
  ));
  const [subChildComponent, setSubChildComponent] = useState<React.FC>(() => (
    <>
      <div>Loading</div>
    </>
  ));

  const open = useCallback(async (child) => {
    setChildComponent(child);
    setIsOpen(true);
  }, []);

  const close = useCallback(async () => {
    setIsOpen(false);
    setChildComponent(() => (
      <>
        <div>Loading</div>
      </>
    ));
  }, []);

  const openSub = useCallback(async (child) => {
    setSubChildComponent(child);
    setIsSubOpen(true);
  }, []);

  const closeSub = useCallback(async () => {
    setIsSubOpen(false);
    setSubChildComponent(() => (
      <>
        <div>Empty</div>
      </>
    ));
  }, []);

  return (
    <SideBarContext.Provider
      value={{
        open,
        close,
        openSub,
        closeSub,
        isOpen,
        isSubOpen,
      }}
    >
      <SideBar
        close={close}
        closeSub={closeSub}
        isOpen={isOpen}
        isSubOpen={isSubOpen}
        subChildren={subChildComponent}
      >
        {childComponent}
      </SideBar>
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
