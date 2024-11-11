'use client';

import React, { useCallback, useContext, useMemo, useState } from 'react';

export type OnActionType = () => void;

interface AlertContextInterface {
  message: string | JSX.Element;
  id: string;
  type?: 'success' | 'info' | 'warning' | 'error' | undefined;
}
interface AlertContextValue {
  alerts: AlertContextInterface[];
  setAlerts:
    | React.Dispatch<React.SetStateAction<AlertContextInterface[]>>
    | undefined;
}

const AlertContext = React.createContext<AlertContextValue>({
  alerts: [],
  setAlerts: undefined,
});

const AlertProvider = ({ children }: { children: React.ReactNode }) => {
  const [alerts, setAlerts] = useState<AlertContextInterface[]>([]);

  const contextValue = useMemo(
    () => ({
      alerts,
      setAlerts,
    }),
    [alerts, setAlerts],
  );
  return (
    <AlertContext.Provider value={contextValue}>
      {children}
    </AlertContext.Provider>
  );
};

const useAlert = () => {
  const { alerts, setAlerts } = useContext(AlertContext);
  const openAlert = useCallback(
    ({
      message,
      duration,
      type,
    }: {
      message: string | JSX.Element;
      duration: number;
      type?: 'success' | 'info' | 'warning' | 'error' | undefined;
    }) => {
      const id = (Math.random() + 1).toString(36).substring(7);
      const newAlert = {
        message,
        id,
        ...(type && { type }),
      };

      setAlerts?.((prev) => [...prev, newAlert]);
      setTimeout(() => {
        setAlerts?.((prev) => prev?.filter((alert) => alert.id !== id));
      }, duration);
    },
    [setAlerts, setTimeout],
  );

  const closeAlertsByType = useCallback(
    (type: string) => {
      const newAlerts = alerts.filter((alert) => alert.type !== type);
      setAlerts?.(newAlerts);
    },
    [setAlerts, alerts],
  );
  return { alerts, openAlert, closeAlertsByType };
};
export { AlertContext, AlertProvider, useAlert };
