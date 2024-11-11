import {
  CameraOutlined,
  CheckCircleOutlined,
  CheckOutlined,
  CloseCircleOutlined,
  DeleteOutlined,
  IssuesCloseOutlined,
  PlusCircleOutlined,
  RetweetOutlined,
  StopOutlined,
  UnlockOutlined,
  VerticalAlignBottomOutlined,
  VerticalAlignTopOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import { notification } from "antd";
import React, { ReactNode } from "react";

export const openNotificationApprove = (
  message: ReactNode,
  description?: ReactNode,
  color = "#3cc53c"
) => {
  notification.open({
    message: message,
    description: description,

    icon: <CheckOutlined style={{ color: color }} />,
  });
};

export const openNotificationBlock = (
  message: ReactNode,
  description?: ReactNode,
  color?: string
) => {
  notification.open({
    message: message,
    description: description,

    icon: <IssuesCloseOutlined style={{ color: color }} />,
  });
};

export const openNotificationUnblock = (
  message: ReactNode,
  description?: ReactNode,
  color?: string
) => {
  notification.open({
    message: message,
    description: description,

    icon: <UnlockOutlined style={{ color: color }} />,
  });
};

export const openNotificationSuccess = (
  message: ReactNode,
  description?: ReactNode,
  color = "#3cc53c"
) => {
  notification.open({
    message: message,
    description: description,

    icon: <PlusCircleOutlined style={{ color: color }} />,
  });
};

export const openNotificationWarning = (
  message: ReactNode,
  description?: ReactNode,
  color = "#f81d22"
) => {
  notification.open({
    message: message,
    description: description,
    icon: <WarningOutlined style={{ color: color }} />,
  });
};

export const openNotificationFail = (
  message: ReactNode,
  description?: ReactNode,
  color = "#f81d22"
) => {
  notification.open({
    message: <div className="whitespace-pre-line">{message}</div>,
    description: description,

    icon: <StopOutlined style={{ color: color }} />,
  });
};

export const openNotificationChangeSuccess = (
  message: ReactNode,
  description?: ReactNode,
  color?: string
) => {
  notification.open({
    message: message,
    description: description,

    icon: <RetweetOutlined style={{ color: color }} />,
  });
};

export const openNotificationTakePhotoSuccess = (
  message: ReactNode,
  description?: ReactNode,
  color?: string
) => {
  notification.open({
    message: message,
    description: description,

    icon: <CameraOutlined style={{ color: color }} />,
  });
};

export const openNotificationUp = (
  message: ReactNode,
  description?: ReactNode,
  color?: string
) => {
  notification.open({
    message: message,
    description: description,
    icon: <VerticalAlignTopOutlined style={{ color: color }} />,
  });
};

export const openNotificationDeleteSuccess = (
  message: ReactNode,
  description?: ReactNode,
  color = "#3cc53c"
) => {
  notification.open({
    message: message,
    description: description,

    icon: <DeleteOutlined style={{ color: color }} />,
  });
};

export const openNotificationDow = (
  message: ReactNode,
  description?: ReactNode,
  color?: string
) => {
  notification.open({
    message: message,
    description: description,
    icon: <VerticalAlignBottomOutlined style={{ color: color }} />,
  });
};

export const openNotificationSuccessNG = (
  message: ReactNode,
  description?: ReactNode,
  color?: string
) => {
  notification.open({
    message: message,
    description: description,
    icon: <CheckCircleOutlined style={{ color: color }} />,
    style: {
      width: 600,
    },
  });
};

export const openNotificationSuccessReject = (
  message: ReactNode,
  description?: ReactNode,
  color?: string
) => {
  notification.open({
    message: message,
    description: description,
    icon: <CloseCircleOutlined style={{ color: color }} />,
  });
};
