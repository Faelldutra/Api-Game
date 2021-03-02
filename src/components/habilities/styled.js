import styled from 'styled-components';

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

            @media(max-width: 420px){
                font-size: 2rem;
            }
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

            @media(max-width: 420px){
                font-size: 1rem;
            }
        }
        p{
            color: black;
            font-size: 1rem;
            text-align: justify;
            padding-top: 15px;

            @media(max-width: 420px){
                font-size: .8rem;
            }
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
            padding-bottom: 5%;
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

                    @media(max-width: 420px){
                        font-size: 2rem;
                    }
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

                            @media(max-width: 420px){
                                font-size: 1rem;
                            }
                        }
                    }       
                }        
            }
        }  
    }   
} 
`