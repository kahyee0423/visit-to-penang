import React from "react";
import styled from "styled-components";

// Card Wrapper
const CardWrapper = styled.div`
    width: 300px;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    background-color: white;
    transition: transform 0.2s ease-in-out;
    margin: 10px;
    flex: 0 0 auto;

    &:hover {
        transform: scale(1.05);
    }
`;

// Card Image
const CardImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

// Card Content
const CardContent = styled.div`
    padding: 15px;
    text-align: center;
`;

// Card Title
const CardTitle = styled.h3`
    margin: 10px 0;
    font-size: 1.2rem;
    color: #333;
    font-weight: bold;
`;

// Card Description
const CardDescription = styled.p`
    font-size: 1rem;
    color: #666;
    line-height: 1.4;
    margin-bottom: 15px;
`;

const LocationsContainer = styled.div`
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid #eee;
`;

const LocationTitle = styled.h4`
    font-size: 0.9rem;
    color: #333;
    margin-bottom: 10px;
    text-align: center;
`;

const LocationsList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const LocationItem = styled.li`
    font-size: 0.85rem;
    color: #666;
    margin-bottom: 5px;
    padding: 5px;
    display: flex;
    align-items: center;
    gap: 8px;
    
    &:hover {
        background-color: #f5f5f5;
        border-radius: 4px;
    }
`;

const LocationIcon = () => (
    <svg 
        width="12" 
        height="12" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2"
    >
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM12 11.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
);

// The FoodCard Component
const Card = ({ title, description, image, locations }) => {
    return (
        <CardWrapper>
            <CardImage src={image} alt={title} />
            <CardContent>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
                <LocationsContainer>
                    <LocationTitle>Places to try:</LocationTitle>
                    <LocationsList>
                        {locations.map((location, index) => (
                            <LocationItem key={index}>
                                <LocationIcon />
                                {location}
                            </LocationItem>
                        ))}
                    </LocationsList>
                </LocationsContainer>
            </CardContent>
        </CardWrapper>
    );
};

export default Card;