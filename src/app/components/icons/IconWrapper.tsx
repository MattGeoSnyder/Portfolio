import React from 'react'

// This component is used to wrap the icon components
interface IconWrapperInterface extends React.ComponentProps<'div'> {
  children: React.ReactNode;
}

export function IconWrapper({ children, ...props }: IconWrapperInterface) {	
	const { className, ...rest } = props;
	
  return (
    <div className={ `flex justify-center items-center bg-accentBlue rounded-lg hover:ring-white w-full h-full ${className}` } {...rest}>
      <div className='flex flex-col justify-between pt-4 pb-1'>
	{children}
      </div>
    </div>
  );
}
