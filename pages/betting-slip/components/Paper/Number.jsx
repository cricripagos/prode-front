import React from 'react';
import Text from '@components/Text/Text';
import classNames from 'classnames';

const Number = ({ number, text, className }) => {
  const classes = classNames(className, 'flex flex-row');

  return (
    <div className={classes}>
      <div>
        <Text tag={'h1'} fontSize={'75px'} lineHeight={'68px'}>{number}</Text>
      </div>
      <div className='ml-3'>
        <Text fontSize={'22px'} lineHeight={'29px'}>{text}</Text>
      </div>
    </div>
  )
}

export default Number
