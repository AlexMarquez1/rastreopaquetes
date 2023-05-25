import React, { useEffect } from 'react';

function GoogleMapLoader({ apiKey }) {
  useEffect(() => {
    const loadMapScript = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    };

    loadMapScript();
  }, [apiKey]);

  return null;
}

export default GoogleMapLoader;
