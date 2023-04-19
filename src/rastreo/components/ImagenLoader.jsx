import { useState } from 'react'

export const ImagenLoader = ({src}) => {

    const [loading, setLoading] = useState(true);

    const handleImageLoaded = ()=> {
        setLoading(false);
      };

  return (
    <div style={{ position: 'relative' }}>
        {loading && (
         <i className="pi pi-spin pi-spinner" style={{ fontSize: '4rem' }}></i>
        )}

        <img
        className='list-group-item  h-7 w-7 rounded-full mx-auto'
          src={src}
          onLoad={handleImageLoaded}
        />
      </div>
  )
}
