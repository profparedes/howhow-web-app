import { Form } from 'react-bootstrap'
import styled from 'styled-components'

export const FormContainer = styled(Form)`
  padding: 2rem;

  input {
    border-radius: 0.5rem;
    background-color: #eee;
    border: none;
    margin-bottom: 1rem;
    padding: 0.8rem;
  }

  button {
    border-radius: 1.5rem;
    width: 100%;
    background-color: #fff;
    color: var(--primary);

    &:hover {
      background-color: #eee;
      color: var(--primary);
    }

    &:disabled {
      background-color: #ccc;
      color: #000;
      border: none;
    }
  }
`
