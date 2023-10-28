import { Avatar, Card, CardHeader, CardMedia, Grid, styled } from '@mui/material'
import { StaticImageData } from 'next/image';
import React from 'react'

interface Props {
    image: string;
    startingPrice: string;
    name: string;
}

const StyledCard = styled(Card)`
${({ theme }) => `
cursor: pointer;
background-color: ${theme.palette.secondary.main};
transition: ${theme.transitions.create(['background-color', 'transform'], {
  duration: theme.transitions.duration.standard,
})};
&:hover {
  background-color: ${theme.palette.primary.light};
  transform: scale(1.1);
}
`}
`;

const NFTCard: React.FC<Props> = ({ image, startingPrice, name }) => {
  return (
    <Grid item container xs={12} lg={4}  sx={{width: '100%', height: {xs: 'auto', lg: 'auto'}}}>
        <StyledCard sx={{borderRadius: '1.5rem', bgcolor: 'primary.main'}}>
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
                    title={`${name}`}
                    titleTypographyProps={{variant: 'body1'}}
                    
                    subheader={`Starting Price: ${startingPrice}`}
            />
        </StyledCard>
    </Grid>
  )
}

export default NFTCard