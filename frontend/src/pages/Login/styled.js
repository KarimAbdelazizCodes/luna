import styled from "styled-components";

export const PageWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;


    main {
        width: 42%;
        display: flex;
        flex-direction: column;
        align-items: center;

        form {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;        
        }

        .title_decorator {
            width: 120px;
            border-bottom: ${(props) => props.theme.orangeLine};
            margin-top: 10%;
            margin-bottom: 15%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        h1 { 
            padding: 15px;
            text-align: center;
        }
        p {
            text-align: center;
        }
        div {
            width: 100%;
            margin-bottom: 3%;
        }
        button {
            width: 200px;
            margin-top: 10%;
            margin-bottom: 18%;
            text-transform: capitalize;
        }

        
    }

    

`