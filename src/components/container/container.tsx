import React, { ReactNode } from 'react';
import "./container.scss";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className = "" }: ContainerProps) => {
  return <div className={`container-custom ${className}`}>{children}</div>
};