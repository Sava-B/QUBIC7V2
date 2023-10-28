import { Avatar, Card, CardHeader, CardMedia, Grid } from '@mui/material'
import { StaticImageData } from 'next/image';
import React from 'react'

interface Props {
    image: string;
    startingPrice: string;
    name: string;
}

const NFTCard: React.FC<Props> = ({ image, startingPrice, name }) => {
  return (
    <Grid item container xs={4} sx={{width: '100%'}}>
        <Card sx={{borderRadius: '1.5rem', bgcolor: 'primary.main'}}>
            <CardMedia>
                <Avatar
                    src={`${image}`}
                    sx={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: '1.5rem'
                    }}
                    variant="square"
                />
            </CardMedia>
            <CardHeader
                    sx={{display: {xs: 'none', md: 'flex'}}}
                    title={`${name}`}
                    titleTypographyProps={{variant: 'body1'}}
                    
                    subheader={`Starting Price: ${startingPrice}`}
            />
        </Card>
    </Grid>
  )
}

export default NFTCard