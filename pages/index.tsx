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
import { AppFooter } from "@/components";

const fakeNFTObj = [
  {
    id: '1',
    name: 'QUBIC1',
    image: "/_next/static/media/nft1.01447bcf.png",
    fakeimage: {NFT1},
    fakeimage2: {NFT2},
    fakeimage3: {NFT3},
    fakeimage4: {NFT4},
    fakeimage5: {NFT5},
    fakeimage6: {NFT6},
    fakeimage7: {NFT7},

  },
  {
    id: '2',
    name: 'QUBIC2',
    image: "/_next/static/media/nft2.f2af3db7.png"
  },
  {
    id: '3',
    name: 'QUBIC3',
    image: "/_next/static/media/nft3.569d6a71.png"
  },
  {
    id: '4',
    name: 'QUBIC4',
    image: "/_next/static/media/nft4.8e25a8cf.png"
  },
  {
    id: '5',
    name: 'QUBIC5',
    image: "/_next/static/media/nft5.1d838b3f.png"
  },
  {
    id: '6',
    name: 'QUBIC6',
    image: "/_next/static/media/nft6.55a0222c.png"
  },
  {
    id: '7',
    name: 'QUBIC7',
    image: "/_next/static/media/nft7.483f1d2d.png"
  },
]

export default function Page() {
  console.log(fakeNFTObj)
  return (
    <>
      <Grid container justifyContent="center">
        <HeaderContainer />
        <Grid item container xs={12} lg={8} spacing={3} sx={{justifyItems: "center", py: {xs: '2rem', lg:'4rem'} }}>
          {fakeNFTObj.map((obj) => (
              <NFTCard name={obj.name} startingPrice="1 ETH" image={obj.image}/>
              )
              )}
        </Grid>
      </Grid>
      {/* <AppFooter /> */}
    </>
  )
}