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
                    height: 30px;
                }
                @media(max-width: 655px){
                    width:200px;
                    height: 20px;
                }
                @media(max-width: 510px){
                    width:150px;
                    height: 20px;
                }
                @media(max-width: 390px){
                    width:100px;
                    height: 20px;
                }
                @media(max-width: 270px){
                    width:70px;
                    height: 20px;
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
export const Corpo = styled.div`
    display: flex;
    background: black;
    width: 90%;
    padding: 0% 5%;

    .corpo{
        display: flex;
        background: white;
        width: 100%;
        padding: 0 2%;
        align-items: center;

        .menu{
            display: flex;
            background: black;
            width: 100%;
            height: 40px;
            padding: 0 2%;
            align-items: center;

            img{
                width: 3%;
                height: 20px;
                margin-left: 5px;                
            }
            .lupa{
               width: 20px;
            }
            .language{
                border-radius: 50%;
            }


            label{
                display: flex;
                align-items: center;
                width:30%;

                p{
                    font-family: 'Cinzel', serif;
                    color: white;
                    font-size: 1rem;

                    @media(max-width: 1500px){
                            font-size: .8rem;
                    }
                    @media(max-width: 1200px){
                            font-size: .6rem;
                    }
                }
                input{
                    margin-left: 10px;
                    text-transform: capitalize;
                    width: 100%;
                }
                .separe{
                    width: 1px;
                    height:30px;
                    background: white;
                    margin-left: 3%;
                }
                input::placeholder{
                

                    @media(max-width: 1500px){
                            font-size: .8rem;
                          
                    }
                    @media(max-width: 900px){
                        font-size: .7rem;          
                    }
                }
            }

            .class{
                display: flex;
                width: 70%;
                justify-content: space-between;
                padding-left: 1%;

                button{
                    width: 13%;
                    font-size: 1rem;
                    font-family: 'Cinzel', serif;
                    background: black;
                    color: white;
                    border: none;
                    height: 40px;
                   
                    @media(max-width: 1500px){
                            font-size: .8rem;
                    }
                    @media(max-width: 1200px){
                            font-size: .6rem;
                    }
                    @media(max-width: 900px){
                            font-size: .4rem;
                    }
    
                } 

                button:hover{
                    background: #F0E68C;
                    color: black;
                    transition: .3s;
                }
                .buttonClass{
                    background: #F0E68C;
                    color: black;
                } 
            }
        }
    }
`
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
export const ChampionDescription = styled.div`
    display: flex;
    background: black;
    width: 90%;
    padding: 0% 5%;

    .description{
        display: flex;
        flex-direction: column;
        background: white;
        width: 100%;
        padding: 0 2%;
        position: relative;
        
        .title{
            display: flex;
            width: 100%;
            background: black;

            img{
                width: 100%;
                -webkit-mask-image: linear-gradient(to top, transparent 10%, black 100%)
            }  
        }

        .introduce{
            position: absolute;
            width: 80%;
            top: 45%;
            left: 10%;

            @media(max-width: 1100px){
                top: 30%;
            }
            @media(max-width: 860px){
                top: 15%;
                width: 90%;
                left:5%;
            }
            @media(max-width: 700px){
                top: 5%;
                width: 90%;
                left:5%;
            }

            p{
                font-family: 'Cinzel', serif;
                font-size: 1rem;
                color: white;
                font-weight: bold;
                text-transform: capitalize;
                text-align: center;
                padding-bottom: 2%;
            }

            .box{
                display: flex;
                flex-direction: column;
                width: 100%;
            
                .box2{
                    display: flex;
                    width: 100%;
                    height: 240px;
                    position: relative;

                    @media(max-width: 660px){
                        height: 185px;
                    }

                    
                    h1{
                        font-family: 'Cinzel', serif;
                        font-size: 4rem;
                        color: white;
                        font-weight: bold;
                        text-align: center;
                        white-space: nowrap;

                        @media(max-width: 1100px){
                                font-size: 3rem;
                            }
                    }
            
                    .line1{
                        display: flex;
                        width: 100%;
                        height: 1px;
                        background:white;
                        margin-top: 4%;

                        .history{
                            display: flex;
                            position: absolute;
                            width:100%;
                            height: 100px;
                            left: 4%;
                            top: 50%;

                            @media(max-width: 1000px){
                                flex-direction: column;
                            }

                            img{
                                width:60px;
                                height:60px;
                                background: none;

                                @media(max-width: 1000px){
                                    width: 30px;
                                    height: 30px;
                                }
                                @media(max-width: 660px){
                                    width: 15px;
                                    height: 15px;
                                }

                            }
                            span{
                                font-family: 'Cinzel', serif;
                                font-size: 1rem;
                                color: white;
                                font-weight: bold;
                                padding-top: 23px;
                                padding-left: 5%;

                                @media(max-width: 1000px){
                                    font-size: .7rem;
                                    padding-top: 15px;
                                    padding-left: 2%;
                                }
                                @media(max-width: 1000px){
                                    font-size: .5rem;
                                    padding-top: 8px;
                                    padding-left: 1%;
                                }
                            }
                        }
                    }

                    .line2{
                        width: 1px;
                        height: 100%;
                        background:white;
                        margin-top: 4%;
                    }
                }

                .line1{
                    width: 100%;
                    height: 1px;
                    background:white;
                    margin-top: 4%;

                    .history2{
                        display: flex;
                        flex-direction: column;
                        width:65%;
                        position: absolute;
                        left: 30%;
                        top: 30%;

                        @media(max-width: 1100px){
                             top:20%;  
                        } 
                        @media(min-width: 1400px){
                             top:40%;  
                        } 
                        @media(min-width: 1600px){
                             top:50%;  
                        } 
                        @media(max-width: 1000px){
                           left: 20%;
                           width: 75%;
                        }  
                        @media(max-width: 660px){
                           left: 15%;
                           width: 80%;
                           top: 25%;
                        }     
                        span{
                            line-height:22px;
                            font-size: 1rem;
                            color: white;
                            text-align: justify;

                            @media(max-width: 1100px){
                                font-size: .9rem;
                                line-height: 20px;
                            }
                            @media(max-width: 660px){
                                font-size: .7rem;
                                line-height: 15px;
                            }
                        }
                    }
                }
            }    
        }
    }
`
export const Habilities = styled.div`
    display: flex;
    background: black;
    width: 90%;
    padding: 0% 5%;
    
    
    
    .SpellSkin{
        display: flex;
        width: 100%;
        background: white;
        justify-content: space-between;

        @media(max-width: 800px){
            flex-direction: column;
        }
        
        .habilities{
        display: flex;
        flex-direction: column;
        width: 45%;
        background: white;
        align-items: center;
        padding: 2%;

        @media(max-width: 800px){
            width: 96%;
        }

        .titleHabilities{
            display: flex;
            width: 100%;
            background: white;
            padding: 2%;
            align-items: center;

            .titleLine1{
                width: .5px;
                height: 20px;
                background: black;
                margin-top: 20px;
            }
            .titleLine2{
                width: 100%;
                height: 1px;
                background: black;
            }
            h1{
                font-family: 'Cinzel', serif;
                font-size: 3rem;
                color: black;
                font-weight: bold;
            }
        }    
        
        .habilitiesIcon{
            display: flex;
            width: 100%;
            background: white;
            padding: 4%;
            justify-content: space-between;

            @media(max-width: 800px){
                width: 96%;
            }

            img{
                width: 12%;
            }
            
            img:hover{
                transform: translate(0px,-10px);
                transition: .5s;
            }
            .imgUp{
                margin-top: -20px;
                margin-bottom: 20px;
                transition: .5s;
            }
        }

        .descriptionHabilities{
            display: flex;
            flex-direction: column;
            width: 100%;
            background: white;
            padding: 4%;

            @media(max-width: 800px){
                width: 96%;
            }

            h1{
                font-family: 'Cinzel', serif;
                font-size: 1.5rem;
                color: black;
                font-weight: bold; 
            }
            p{
                color: black;
                font-size: 1rem;
                text-align: justify;
                padding-top: 15px;
            }
        }

        .progress{
            display: flex;
            width: 100%;
            background: white;
            padding: 4%;

            @media(max-width: 800px){
                width: 96%;
            }

            .baseLine{
                width: 100%;
                height: 4px;
                background: grey;
                position: relative;
            }
            .progressLine{
                width: 5%;
                height: 4px;
                background: black; 
                position: absolute;
                left: 6.9%;
                transition: .6s;

                @media(max-width: 800px){
                    width:10%;
                }
            }
            .progressLine1{
                width: 5%;
                height: 4px;
                background: black; 
                position: absolute;
                left: 15.5%;
                transition: .6s;

                @media(max-width: 800px){
                    width:10%;
                    left:26.5%;
                }
               
            }
            .progressLine2{
                width: 5%;
                height: 4px;
                background: black; 
                position: absolute;
                left: 24.5%;
                transition: .6s;

                @media(max-width: 800px){
                    width:10%;
                    left: 44.5%;
                }
            }
            .progressLine3{
                width: 5%;
                height: 4px;
                background: black; 
                position: absolute;
                left: 33.5%;
                transition: .6s;

                @media(max-width: 800px){
                    width:10%;
                    left: 63.5%;
                }
            }
            .progressLine4{
                width: 5%;
                height: 4px;
                background: black; 
                position: absolute;
                left: 42.5%;
                transition: .6s;

                @media(max-width: 800px){
                    width:10%;
                    left: 81.5%;
                }
            }
        }    
    }

        .skins{
            display: flex;
            flex-direction: column;
            width: 40%;
            background: white;
            padding: 2%;

            @media(max-width: 800px){
                width: 98%;
                padding: 0;
            }

                .titleHabilities{
                    display: flex;
                    width: 98%;
                    background: white;
                    align-items: center;
                    padding: 2%;

                    .titleLine1{
                        width: .5px;
                        height: 20px;
                        background: black;
                        margin-top: 20px;
                    }
                    .titleLine2{
                        width: 100%;
                        height: 1px;
                        background: black;
                    }
                    h1{
                        font-family: 'Cinzel', serif;
                        font-size: 3rem;
                        color: black;
                        font-weight: bold;
                    }
                }
                .setSkins{
                    width: 100%;
                    padding: 2%;
                    display: flex;

                    .slickConfig{
                        width: 100%;
                        position: relative;
                        margin-left: 4.5%;

                    .imgSlicker{
                        width: 100%;
                        -webkit-mask-image: linear-gradient(to top, transparent 1%, black 100%)
                    }
                    .carousel{
                        width:90%;

                        .slick-prev:before {
                            color: black;
                        }
                        .slick-next:before {
                            color: black;
                        } 
                    }
                    .carousel2{
                        width: 91%;
                        margin-top: 5px;
                        padding-bottom: 15px;
                
                        img{
                            width: 96%;
                        }
                        .slick-prev:before {
                            margin-left: -7px;
                        }
                    }

                    .slicker{
                        width: 100%;
                        position: relative;
                        display:flex;
                        background: black;
                        
                        

                        .slickTitle{
                        width: 100%;
                        position: absolute;
                        align-items: center;
                        top: 80%;
                        
                            p{
                            color: white;
                            font-size: 1.5rem;
                            text-align: center;
                            }
                        }       
                    }        
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







