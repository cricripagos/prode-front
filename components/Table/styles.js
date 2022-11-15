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
            font-weight: 700;
            font-size: 22px;
            line-height: 29px;
        }
    }
    tbody {
        column-width: 20px;
        font-size: 22px;
        line-height: 29px;
        padding: 1rem;
        background: var(--dark-blue-color);
        box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        border-right: 16px solid var(--dark-blue-color);
        border-left: 16px solid var(--dark-blue-color);
        td {
            display: table-cell;
            font-size: 10px;
        }
        tr:first-child td:first-child {
            border-top-left-radius: 20px;
            background: var(--dark-blue-color);
        }
        tr:first-child td:last-child {
            border-top-right-radius: 20px;
            column-width: auto;
        }
        tr:last-child td:first-child {
            border-bottom-left-radius: 20px;
        }
        tr:last-child td:last-child {
            border-bottom-right-radius: 20px;
        }
        tr:nth-of-type(2n) {
            background: var(--light-blue-color);
        }
    }
`;
