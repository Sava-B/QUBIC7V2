import NFTCard from "@/components/cards/NFTCard";
import HeaderContainer from "@/components/containers/HeaderContainer";
import { Grid } from "@mui/material";
import NFT from "./../assets/NFTs/DALL·E 2022-12-17 12.13.00 - number 7 futuristic cube 3d render.png" 

const fakeNFTObj = [
  {
    name: 'QUBIC1',
    image: {NFT}
  },
  {
    name: 'QUBIC2',
    image: {NFT}
  },
  {
    name: 'QUBIC3',
    image: {NFT}
  },
  {
    name: 'QUBIC4',
    image: {NFT}
  },
  {
    name: 'QUBIC5',
    image: {NFT}
  },
  {
    name: 'QUBIC6',
    image: {NFT}
  },
  {
    name: 'QUBIC7',
    image: {NFT}
  },
]

export default function Page() {
  console.log(fakeNFTObj[0].image.NFT)
  return (
    <Grid container justifyContent="center">
      <HeaderContainer />
      <Grid item container xs={8} spacing={6} sx={{justifyItems: "center", py: '4rem'}}>
        {fakeNFTObj.map((obj) => (
            <NFTCard name={obj.name} startingPrice="1 ETH" image={obj.image.NFT.src}/>
            )
            )}
      </Grid>
    </Grid>
  )
}