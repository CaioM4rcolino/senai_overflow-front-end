import styled from "styled-components";

export const Chip = styled.div`

    width: fit-content;
    height: auto;
    margin: 0px 10px 10px 0px;
    cursor: pointer;

    font-size: 12px;
    white-space: nowrap;
    padding: 5px;

    background-color: var(--darkGray);
    color: var(--light);

    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;

        >span{
            font-weight: bold;
            transition: .2s;

            :hover{
                color: var(--primary);
            }
        }
    
`;