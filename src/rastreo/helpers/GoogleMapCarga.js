// import React, { useEffect, useState } from 'react';

// function GoogleMapCarga({ apiKey }) {
//   const [mapLoaded, setMapLoaded] = useState(false);

//   useEffect(() => {
//     let script;

//     const loadMapScript = () => {
//       script = document.createElement('script');
//       script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
//       script.async = true;
//       script.defer = true;
//       script.addEventListener('load', handleScriptLoad);
//       document.head.appendChild(script);
//     };

//     const handleScriptLoad = () => {
//       setMapLoaded(true);
//     };

//     loadMapScript();

//     return () => {
//       if (script) {
//         script.removeEventListener('load', handleScriptLoad);
//       }
//     };
//   }, [apiKey]);

//   return (
//     <div>
//       {mapLoaded ? (
//         <div>
//           Aquí puedes renderizar el contenido relacionado con el mapa
//         </div>
//       ) : (
//         <div>
//           Cargando mapa...
//         </div>
//       )}
//     </div>
//   );
// }

// export default GoogleMapCarga;
