'use client';

import React, { useContext, useMemo } from 'react';
import useStateRef from 'react-usestateref';

interface PopUpProps {
  title: JSX.Element | string;
  content: JSX.Element | string;
  onClose?: () => void;
  setZIndex?: number;
  canClose?: boolean;
}

interface PopUpContextInterface {
  closePopUp: (count?: number, popupId?: string) => void;
  showPopUp: <T>(
    contentCreator: (popUpOptions: PopUpProps & T) => JSX.Element,
    popUpOptions: PopUpProps & T,
  ) => string;
  openingPopUp: PopUpData[];
}

const PopUpContext = React.createContext<PopUpContextInterface | undefined>(
  undefined,
);

interface PopUpData {
  id: string;
  content: JSX.Element;
  options: PopUpProps;
}
const PopUpProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [openingPopUp, setOpeningPopUp, openingPopUpRef] = useStateRef<
    PopUpData[]
  >([]);
  const disableScroll = () => {
    document.body.style.maxWidth = `calc(100vw - ${window.innerWidth - document.body.clientWidth}px)`;
    document.body.style.overflow = 'hidden';
  };
  const enableScroll = () => {
    document.body.style.maxWidth = 'unset';
    document.body.style.overflow = 'auto';
  };

  const providerValue = useMemo(
    () => ({
      openingPopUp,
      closePopUp: (count?: number, popupId?: string) => {
        if (popupId) {
          setOpeningPopUp(
            openingPopUpRef.current.filter((e) => e.id !== popupId),
          );
        } else {
          setOpeningPopUp(
            openingPopUpRef.current.slice(0, count ? -count : -1),
          );
        }
        if (openingPopUpRef.current.length === 0) {
          enableScroll();
        }
      },
      showPopUp: <T = never,>(
        ContentCreator: (popUpOptions: PopUpProps & T) => JSX.Element,
        popUpOptions: PopUpProps & T,
      ) => {
        const popUpId = (Math.random() + 1).toString(36).substring(7);
        const popUpOptionsWDefault: PopUpProps & T = {
          ...popUpOptions,
        };
        const onClosePressed = () => {
          setOpeningPopUp(
            openingPopUpRef.current.filter((e) => e.id !== popUpId),
          );
          if (openingPopUpRef.current.length === 0) {
            enableScroll();
          }
          popUpOptionsWDefault.onClose?.();
        };
        const popUpContent = (
          <ContentCreator {...popUpOptionsWDefault} onClose={onClosePressed} />
        );
        setOpeningPopUp([
          ...openingPopUpRef.current,
          {
            id: popUpId,
            content: popUpContent,
            options: popUpOptionsWDefault,
          },
        ]);

        disableScroll();
        return popUpId;
      },
    }),
    [openingPopUp],
  );
  return (
    <PopUpContext.Provider value={providerValue}>
      {children}
      {openingPopUp.length > 0 &&
        openingPopUp.map((e) => <div key={e.id}>{e.content}</div>)}
    </PopUpContext.Provider>
  );
};

const usePopUp = () => {
  const popups = useContext(PopUpContext);
  if (popups == null) {
    throw new Error('usePopUp() called outside of a PopUpProvider?');
  }
  return popups;
};

export { PopUpProvider, usePopUp };
export type { PopUpProps };
