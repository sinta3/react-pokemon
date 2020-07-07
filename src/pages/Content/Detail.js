import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styled from 'styled-components';

const Card = styled.div`
    width: 150px;
    word-break: break;
    border:1px solid teal;
    & img {
        width: 100%;
    }
`;

const Title = styled.h4`
    text-align: center;
`;

const Div = styled.div`
    margin:auto;
    margin-top:30px;
    text-align:center;
    display:flex;
    justify-content:space-evenly;
    flex-wrap:wrap;
`;

function Detail() {
    let { name } = useParams();
    const [data, setData] = useState({});

    async function fetchSingleData() {
        let url = `https://pokeapi.co/api/v2/pokemon/${name}`;
        let responses = await fetch(url);
        let results = await responses.json();

        await setData(results);
    }

    useEffect(() => {
        fetchSingleData();

        // eslint-disable-next-line
    }, []);

    return (
        <div>
            <Title>Description</Title>
         <Div>
                 <div>
                   <p>Weight : {data.weight}</p>
                    <p>Base Experience : {data.base_experience}</p>
                    <p>Height : {data.height}</p>
                    
                </div>
            {data.sprites !== undefined && (
               
                <Card>

                    <img src={data.sprites.front_shiny} alt="pokemon" />
                    <h4>{name}</h4>
                </Card>

               
                   
            )}
            </Div>
        </div>
    );
}

export default Detail;