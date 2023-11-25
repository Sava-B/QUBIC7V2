import { Avatar, Card, CardHeader, CardMedia, Grid, styled } from '@mui/material'
import { StaticImageData } from 'next/image';
import React from 'react'
import { useRouter } from "next/navigation";

interface Props {
    image: string;
    startingPrice: string;
    name: string;
    NFTLink: string;
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

const NFTCard: React.FC<Props> = ({ image, startingPrice, name, NFTLink }) => {
  
  const router = useRouter()
  const handleOnClick = (id: string) => {
      router.push(`/nfts/${id}`)
  }

  return (
    <Grid item container xs={12} lg={4} sx={{width: '100%', height: {xs: 'auto', lg: 'auto'}}} onClick={() => {handleOnClick(NFTLink)}}>
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