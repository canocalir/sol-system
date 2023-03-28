import styled from "styled-components"

const PlanetsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

const SolCircle = styled.div`
    width: 10rem;
    height: 10rem;
    background-color: #e7a427;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 100%;
    border: 5px solid #ec730f;
    transform: translate(-50%, -50%)
`

export {SolCircle, PlanetsContainer}