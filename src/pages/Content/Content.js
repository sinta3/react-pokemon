import React,{useState,useEffect} from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled.div`
    width: 150px;
    word-break: break;
    border:1px solid teal;
    margin:50px;
    & img {
        width: 100%;
    }
`;

const Title = styled.h4`
    text-align: center;
`;
const Tittle = styled.h4`
    text-align: center;
    margin-bottom:50px;
`;

const Div = styled.div`
    
    margin:auto;
    margin-top:30px;
    text-align:center;
    display:flex;
    justify-content:space-evenly;
    flex-wrap:wrap;
`;

function Content() {
    const [data,setData] = useState({});

    const show = (async () => {
        let url = `https://pokeapi.co/api/v2/pokemon
        `;
        let responses = await fetch(url);
        let results = await responses.json();
       
        await setData(results);
        console.log(data)

    })

    useEffect(() => {
        show();
        // eslint-disable-next-line 
    },[]);

    return (
        <div>
          <Tittle>Hello , this is your favorite pokemon list! Click image to see details</Tittle>
        <Div>
       
          {data.results !== undefined &&
                    data.results.map((item) => {
                        const id = item.url.split("/")[6];

                        return (
                           
                            <Card key={id}>
                                <Link to={`/pokemons/${item.name}`}>
                                    <img
                                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`}
                                        alt="pokeimage"
                                    />
                                </Link>
                                <Title>{item.name}</Title>
                            </Card>
                           
                        );
                    })}
        </Div>
        </div>
    )
}

export default Content
