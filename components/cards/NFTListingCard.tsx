import { Avatar, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'

interface Props {
    image: string;
    startingPrice: string;
    name: string;
    auctionLink: string;
}

const NFTListingCard: React.FC<Props> = ({ image, startingPrice, name, auctionLink }) => {
    return (
        <Container sx={{width: '90%', height: '100vh', p: '1rem'}}>
            <Grid container sx={{ bgcolor: 'secondary.light', height: '100%', borderRadius: '1.5rem'}}>
                <Grid item container xs={8} sx={{height: '100%', width: 'auto'}}>
                    <Avatar                     
                        src={`${image}`}
                        sx={{
                            height: 'auto',
                            width: '100%',
                            borderRadius: '1.5rem'
                        }}
                        variant="square"
                    />
                </Grid>

                <Grid item container xs={4} justifyContent='center' alignContent='center'>
                    <Typography variant='h1' sx={{pt: '2rem'}} alignSelf='start'>
                        NFT {name}
                    </Typography>
                    <Typography variant='body1' sx={{p: '2rem'}}>
                        This is the {name} NFT in the project. It was made by a group of skilled abstract artists...
                        We are auctioning this unique piece starting from 1ETH!
                    </Typography>
                    <Typography>Starting Price: {startingPrice}</Typography>
                    <Button > BUY IT!!!!!</Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default NFTListingCard