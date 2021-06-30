import { createGlobalStyle } from "styled-components";

export const defaultTheme = {
  // Colors:
  orange: '#E47D31',
  red: '#FD0000',
  white: '#FFFFFF',
  transparent: 'rgba(145, 145, 145, 0.6)',
  black: '#000000',
  yellow: '#F8E71C',

  
  // Box Shadows:

  // Sizes
  defaultHeight: '40px',
  

  // Text Size
  fontExtraLarge: '24px',
  fontLarge: '20px',
  fontNormal: '16px',
  fontSmall: '12px',

  // Border
  border: '1px solid #EBEBEB',
  orangeLine: '3px solid #E47D31'
};

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0px;
        box-sizing: border-box;
        font-family: Helvetica, Arial, sans-serif;
        list-style: none;
        border-radius: 3px;

        body {
            background-color: #F5F5F5;
        }


        button {
            background-color: ${(props) => props.theme.orange};
            color: ${(props) => props.theme.white};
            font-size: ${(props) => props.theme.fontNormal};
            font-weight: normal;
            text-transform: uppercase;
            border: none;
            height: ${(props) => props.theme.defaultHeight};
            border-radius: calc( ${(props) => props.theme.defaultHeight} / 2 );
            padding: 0px 20px;
            max-width: 200px;

            transition: background-color 0.4s;
        }

        button:hover {
            background-color: ${(props) => props.theme.red};
            cursor: pointer;
        }
        button:active {
            transform: translateY(2px);
        }
 
        p {
            font-size: ${(props) => props.theme.fontNormal};
            margin: 1.2em 0;
        }

        .template {
            color: ${(props) => props.theme.transparent};
        }

        h1 {
            font-size: ${(props) => props.theme.fontExtraLarge};
            text-transform: uppercase;
            -webkit-user-select: none;  /* Chrome all / Safari all */
            -moz-user-select: none;     /* Firefox all */
            -ms-user-select: none;      /* IE 10+ */
            user-select: none;          /* Likely future */      
        }

        h2 {
            font-size: ${(props) => props.theme.fontLarge};  
        }

        h3 {
            font-size: ${(props) => props.theme.fontLarge}; 
            color: ${(props) => props.theme.orange};
        }
        h4 {
            font-size: ${(props) => props.theme.fontNormal}; 
            color: ${(props) => props.theme.orange};
        }
        input {
            border: none;
            outline: rgba(0,0,0,0);
            background: none;
            padding-left: 5px;
        }
        label {
            transition: transform 0.4s, font-size 0.4s;
            padding-left: 10px;
        }

        article {
            background-color: ${(props) => props.theme.white};
            padding: 3px 3px;
            margin: 3px 0px;

            .time {
                font-size: ${(props) => props.theme.fontSmall};
            }
            .option {
                color: ${(props) => props.theme.orange};
                font-size: ${(props) => props.theme.fontNormal};
                font-weight: normal;
            }
            .reviews {
                font-size: ${(props) => props.theme.fontNormal};
                font-weight: bold;
            }
        }

        nav {
            ul {
                display: flex;
                li {
                    padding: 0px 20px;
                    font-size: ${(props) => props.theme.fontLarge};
                }
            }
        }


    }
`;
