import styled from 'styled-components';

export const Corpo = styled.div`
display: flex;
background: black;
width: 90%;
padding: 0% 5%;
flex-direction:column;
position: relative;

.corpo{
    display: flex;
    background: white;
    width: 96%;
    padding: 0 2%;
    align-items: center;

    .menu{
        display: flex;
        background: black;
        width: 100%;
        height: 40px;
        padding: 0 2%;
        align-items: center;

        @media(max-width: 900px){
            display: none;
        }
       
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
            width: 80%;
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
    .navBar{
        display: flex;
        background: black;
        width: 100%;
        height: 40px;
        padding: 0 2%;
        align-items: center; 
        
        @media(min-width: 901px){
            display: none;
        }

        label{
            display: flex;
            align-items: center;
            width:70%;

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
        
            input::placeholder{
            
                @media(max-width: 1500px){
                        font-size: .8rem;            
                }
                @media(max-width: 900px){
                    font-size: .7rem;          
                }
            }
        }
        .lupa{
           width: 20px;
           margin-left: 10px;
        }
        .flags{
            width: 30%;
            display: flex;
            margin-left: 10%;

            img{
                width: 30%;
                height: 20px;
                margin-left: 15px; 
            }
        }    
        
        .language{
            border-radius: 50%;
        }
        .confBar{
            display: flex;
            width: 20%;
            flex-direction: column;
            align-items: center;
            margin-top: -5px;
           
            .line{
                width: 25%;
                height: 3px;
                background: white;
                margin-top: 5px;
                margin-left: 95%;

                @media(max-width: 600px){
                    width:50%;
                    margin-left: 60%;
                }
            }
        }
    } 
}

.classBar{
    display: flex;
    flex-direction: column;
    width:90%;
    background: white;
    position: absolute;  
    top: 100%;  

    @media(min-width: 901px){
        display: none;
    }
    
    button{
        width: 15%;
        font-size: 1rem;
        font-family: 'Cinzel', serif;
        background: black;
        color: white;
        border: none;
        height: 40px;
        margin-left: 83%;
        z-index: 1;
        transition: .5s;

        @media(max-width: 800px){
            width: 20%;
            margin-left: 78%;
        }
        @media(max-width: 600px){
            width: 25%;
            margin-left: 73%;
            font-size: .8rem;
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
`
