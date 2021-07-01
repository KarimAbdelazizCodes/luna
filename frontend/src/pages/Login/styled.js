import styled from "styled-components";

export const PageWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    margin: 0px;

    footer, header {
        width: 100%;

        div{
            padding: 0 20px;
        }
    }

    main {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-y: scroll;

        /* Width */
        ::-webkit-scrollbar {
            width: 15px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
            background: #f1f1f1;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
            background: ${(props) => props.theme.orange};
            border-radius: 8px;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
            background: ${(props) => props.theme.red};;
        }

        h1 { 
            padding: 15px;
            text-align: center;
            white-space: nowrap;
        }
    }

    .registration {
        width: 42%;

        form {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;        
        }

        p {
            text-align: center;
        }

        .message {
            position: absolute;
            left: 0px;
            color: ${(props) => props.theme.red};
            width: 100%;
        }

        div {
            width: 100%;
            margin-bottom: 3%;
        }
        button {
            width: 200px;
            margin-top: 10%;
            text-transform: capitalize;
        }

        .title_decorator {
            width: 120px;
            border-bottom: ${(props) => props.theme.orangeLine};
            margin: 0 auto;
            margin-bottom: 15%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            //@keyframes load-title 
        }

        
    }

    

`