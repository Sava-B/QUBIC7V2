import NFTCard from "@/components/cards/NFTCard";
import HeaderContainer from "@/components/containers/HeaderContainer";
import { Grid } from "@mui/material";
import NFT1 from "./../assets/NFTs/nft1.png" 
import NFT2 from "./../assets/NFTs/nft2.png"
import NFT3 from "./../assets/NFTs/nft3.png"
import NFT4 from "./../assets/NFTs/nft4.png"
import NFT5 from "./../assets/NFTs/nft5.png"
import NFT6 from "./../assets/NFTs/nft6.png"
import NFT7 from "./../assets/NFTs/nft7.png"

const fakeNFTObj = [
  {
    id: '1',
    name: 'QUBIC1',
    image: {NFT1}
  },
  {
    id: '2',
    name: 'QUBIC2',
    image: {NFT2}
  },
  {
    id: '3',
    name: 'QUBIC3',
    image: {NFT3}
  },
  {
    id: '4',
    name: 'QUBIC4',
    image: {NFT4}
  },
  {
    id: '5',
    name: 'QUBIC5',
    image: {NFT5}
  },
  {
    id: '6',
    name: 'QUBIC6',
    image: {NFT6}
  },
  {
    id: '7',
    name: 'QUBIC7',
    image: {NFT7}
  },
]

export default function Page() {
  console.log(fakeNFTObj)
  return (
    <Grid container justifyContent="center">
      <HeaderContainer />
      <Grid item container xs={8} spacing={6} sx={{justifyItems: "center", py: '4rem'}}>
        {fakeNFTObj.map((obj) => (
            <NFTCard name={obj.name} startingPrice="1 ETH" image={obj.image.NFT1}/>
            )
            )}
      </Grid>
    </Grid>
  )
}