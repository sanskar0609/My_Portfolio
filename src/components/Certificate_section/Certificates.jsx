import React from "react";
import CircularGallery from "./CircularGallery";

function Certificates() {
  return (
    <div className="min-h-[120vh] flex flex-col items-center justify-start pt-40 pb-40 w-full">
      <h1 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-white mb-10 w-full">
        Certificates
      </h1>
    <div style={{ height: '600px', position: 'relative', width: '100%', zIndex:'10px' }}>
        <CircularGallery
          bend={0}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.02}
        />
      </div>
    </div>
  );
}

export default Certificates;
