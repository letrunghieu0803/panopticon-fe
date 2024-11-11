'use client';

import { Alert } from 'antd';
import { useContext } from 'react';
import { AlertContext } from './provider';

const CustomAlert = () => {
  const { alerts } = useContext(AlertContext);
  return (
    <div className="fixed right-[20px] top-[40px] z-[100001] space-y-[15px]">
      {alerts.length
        ? alerts.map((alert) => (
            <Alert
              closable
              key={alert.id}
              message={alert.message}
              type={alert.type || 'success'}
            />
          ))
        : null}
    </div>
  );
};

export default CustomAlert;
