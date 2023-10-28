import { Sheet } from '@mui/joy'
import React from 'react'
import { ColorPaletteProp } from "@mui/joy/styles";

export default function AppFooter() {
    const [color, setColor] = React.useState<ColorPaletteProp>("neutral");
    return (
      <Sheet
        variant="solid"
        color={color}
        invertedColors
        sx={{
          color: 'black',
          flexGrow: 1,
          p: 2,
          borderRadius: { xs: 0, sm: "sm" }
        }}
      ></Sheet>
      )
}
