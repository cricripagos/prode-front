import React from 'react'
import { TableStyled } from './styles';

const Table = ({ children }) => {
  return (
    <TableStyled className="table-auto w-full">
        {children}
    </TableStyled>
  )
}

export default Table