import React from 'react'
import MagicBento from "./MagicBento";
function DashBoard() {
  return (
    <div>
      
<MagicBento 
  textAutoHide={true}
  enableStars={true}
  enableSpotlight={true}
  enableBorderGlow={true}
  enableTilt={true}
  enableMagnetism={true}
  clickEffect={true}
  spotlightRadius={300}
  particleCount={12}
  glowColor="132, 0, 255"
/>
    </div>
  )
}

export default DashBoard
