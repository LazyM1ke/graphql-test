import React from 'react';

interface TreeProps {
  title: string;
  firstHeaderIcon?: React.ReactNode;
  secondHeaderIcon?: React.ReactNode;
  children?: React.ReactNode;
  bgColor?: string;
  padding?: string;
}

export default TreeProps;
