import { NFTListingCard } from '@/components';
import { Avatar, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'

interface Props {
    image: string;
    startingPrice: string;
    name: string;
    auctionLink: string;
}

const index: React.FC<Props> = ({ image, startingPrice, name, auctionLink }) => {

    return (
        <NFTListingCard image={image} startingPrice={startingPrice} name={name} auctionLink={auctionLink} />
    )
}

export default index