import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    background: black;
    width: 90%;
    padding: 0% 5%;

    .header{
        display: flex;
        background: white;
        width: 90%;
        padding: 2% 5%;
        align-items: center;

        div{
            margin: auto;

            img{
            width:370px;
            height: 70px;

                @media(max-width: 1000px){
                    width:300px;
                    height: 50px;
                }
                @media(max-width: 755px){
                    width:250px;
                    height: 40px;
                }
                @media(max-width: 655px){
                    width:200px;
                    height: 40px;
                }
                @media(max-width: 510px){
                    width:150px;
                    height: 40px;
                }
                @media(max-width: 390px){
                    width:100px;
                    height: 40px;
                }
                @media(max-width: 270px){
                    width:70px;
                    height: 40px;
                }
                @media(min-width: 1400px){
                    width:550px;
                    height: 90px;
                }
                @media(min-width: 1600px){
                    width:620px;
                    height: 90px;
                }
                @media(min-width: 1800px){
                    width:700px;
                    height: 90px;
                }
            }
        }      
    }  
`
export const Footer = styled.div`
    display: flex;
    background: black;
    width: 90%;
    padding: 0% 5%;

    .footer{
        display: flex;
        width: 100%;
        height: 50px;
        background: grey;
        align-items: center;
    }
    p{
        font-size: 1rem;
        color: white;
        text-align: center;
        width: 100%;
    }
`







