import styled from 'styled-components';

export const ChampionSelect = styled.div`
    display: flex;
    background: black;
    width: 90%;
    padding: 0% 5%;
    position: relative;

    .championSelect{
        display: flex;
        flex-wrap: wrap;
        background: white;
        width: 100%; 
        height: 100%;
        padding: 2% 1.5% 1.5% 2%;
     
        .iconConfig{
            width: 5%;
            padding-bottom: .5%;

            @media(max-width: 1000px){
                width: 10%;
            }
            img{
                width: 90%;
            }
            img:hover{
                transition: .1s;
                animation: tremer .2s;
                animation-iteration-count: 1;
                border-radius: 50%;
            }
            @keyframes tremer {
                0% {transform: rotateZ(0deg);}
                25% {transform: rotateZ(90deg);}
                50% {transform: rotateZ(180deg);}
                75% {transform: rotateZ(270deg);}
                100% {transform: rotateZ(360deg);}
            }
        }   
        .active{
            width: 5%;
            padding-bottom: .5%;
            @media(max-width: 1000px){
                width: 10%;
            }
            img{
                width: 90%;
                border-radius: 50%;
            }
            img:hover{
                transition: .1s;
                animation: tremer .2s;
                animation-iteration-count: 1;
                border-radius: 50%;
            }
            @keyframes tremer {
                0% {transform: rotateZ(0deg);}
                25% {transform: rotateZ(90deg);}
                50% {transform: rotateZ(180deg);}
                75% {transform: rotateZ(270deg);}
                100% {transform: rotateZ(360deg);}
            }
        }   
    }
    .error{
        display: flex;
        width: 100%;
        position: absolute;
        align-items: center;
        top: 20%;

        p{
            width: 90%;
            font-size: 1.5rem;
            text-align: center;

            @media(max-width: 900px){
                font-size: 1rem;
            }
            @media(max-width: 600px){
                font-size: .8rem;
            }
        }
    }
`