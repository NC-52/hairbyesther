import React from "react";
import styled from "styled-components";
import {fakeData} from "../fakeData";
import StatCard from "./StatCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  //width: 90vw;
  margin: 16px;
`
const OverviewStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

const Dashboard = () => {
    return <>
        <Container>
            <h1 style={{color: '#868686', fontSize: 32}}>Dashboard</h1>
            <OverviewStats>
                {
                    fakeData.map((item, index) => (
                        <StatCard itemDetails={item} key={index}/>
                    ))
                }
            </OverviewStats>

        </Container>
    </>
}

export default Dashboard
