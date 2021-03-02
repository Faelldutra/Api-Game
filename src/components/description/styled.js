import styled from 'styled-components';

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
                    @media(max-width: 420px){
                        height: 155px;
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
                        @media(max-width: 420px){
                            font-size: 2rem;
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
                                    font-size: .4rem;
                                    padding-top: 8px;
                                    padding-left: 0%;
                                }
                                @media(max-width: 420px){
                                    font-size: .3rem;
                                    padding-top: 8px;
                                    padding-left: 0;
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
                            @media(max-width: 420px){
                                font-size: .5rem;
                                line-height: 12px;
                            }
                        }
                    }
                }
            }    
        }
    }
`