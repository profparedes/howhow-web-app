import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    :root{
        --primary: #007bff;
        --soft-primary: #b5d7fe;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Nunito', sans-serif;
    }

    p {
        margin-top: 0;
        margin-bottom: 0;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    a:hover {
        color: inherit;
    }

`
