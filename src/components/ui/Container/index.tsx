import { ContainerProps } from '@/types'
import classNames from 'classnames'
import React, { forwardRef } from 'react'



export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className }, ref) => {
    const classess = classNames(
        className,
        "px-10 md:px-14 lg:px-20 xl:px-0 xl:max-w-[1200px] xxl:max-w-[1600px] w-full mx-auto",
    );
    return <div className={`${classess}`}>{children}</div>;
  }
);

Container.displayName ="Container"


