import styled from 'styled-components';

export const TableStyled = styled.table`
    column-width: 20px;
    border-collapse: collapse;
    overflow: hidden;
    th, td {
        padding: 1em;
    }
    thead {
        tr {
            column-width: 20px;
            color: white;
            font-style: normal;
            font-weight: 400;
            font-size: 22px;
            line-height: 29px;
        }
    }
    tbody {
        column-width: 20px;
        padding: 1rem;
        background: var(--dark-blue-color);
        border-radius: 1rem;
        border-right: 20px solid var(--dark-blue-color);
        border-left: 20px solid var(--dark-blue-color);
        td {
            display: table-cell;
            font-size: 10px;
        }
        tr:first-child td:first-child {
            border-top-left-radius: 1rem;
            background: var(--dark-blue-color);
        }
        tr:first-child td:last-child {
            border-top-right-radius: 1rem;
            column-width: auto;
        }
        tr:last-child td:first-child {
            border-bottom-left-radius: 1rem;
        }
        tr:last-child td:last-child {
            border-bottom-right-radius: 1rem;
        }
        tr:nth-of-type(2n) {
            background: var(--light-blue-color);
        }
    }
`;
