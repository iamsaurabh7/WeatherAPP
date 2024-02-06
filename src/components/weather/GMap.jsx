import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";

const GMAP_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

function GMap({ latitude, longitude, city }) {
  useEffect(() => {
    if (city) {
      const gMapApiURL = `https://www.google.com/maps/embed/v1/place?q=${city}&key=${GMAP_API_KEY}&zoom=12`;
      const gMapiFrame = document.getElementById("gMapiFrame");
      gMapiFrame.src = gMapApiURL;
    } else if (latitude && longitude) {
      const gMapApiURL = `https://www.google.com/maps/embed/v1/view?key=${GMAP_API_KEY}&center=${latitude},${longitude}&zoom=12`;
      const gMapiFrame = document.getElementById("gMapiFrame");
      gMapiFrame.src = gMapApiURL;
    }
  }, [latitude, longitude, city]);

  return (
    <Box p={[4, 6, 8, 12]} borderRadius="lg" overflow="hidden">
      <div className="address-map col-4">
        <Box width="100%" height={["300px", "300px", "400px", "400px"]}>
          <div
            id="canvas-for-googlemap"
            style={{ height: "100%", width: "100%", maxWidth: "100%" }}
          >
            <iframe
              id="gMapiFrame"
              title="Gmap"
              style={{ height: "100%", width: "100%", border: "0" }}
              src=""
            ></iframe>
          </div>
        </Box>
      </div>
    </Box>
  );
}

export default GMap;
