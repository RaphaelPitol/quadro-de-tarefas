import styled from 'styled-components'

export const Container = styled.header`

    background-color: var(--blue);
    padding: 1rem 1rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1{
        color: white;
        text-align: center;
    }

    button {
        font-size: 1rem;
        padding: 1rem;
        border: none;
        color: #fff;
        background-color: var(--blue-light);

        border-radius: 8px;

        &:hover{
            transition: 3s;
            filter: brightness(0.9);
            background-color: #f00;
        }
      
    }

`
