import React from 'react'
import useAuth from '../../hooks/useAuth';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

export const TarjetaEmpresa = ({data}) => {

    const { userAuth } = useAuth();

    const empresasFiltradas = data.filter(item => item.razonsocial && item.usuario.idusuario === userAuth.idusuario);
    
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1,
      },
    };

  return (
    <>
    <div className="col-sm-12 p-4">
      <div className="card">
        <div className="card-body text-center">
        <h1 className='text-3xl text-[#BE0F34] font-extrabold pb-4'>Empresas dadas de alta</h1>
          <div className='container'>
            <div className='row justify-center'>
                <Carousel 
                    renderDotsOutside={true} 
                    infinite={true} 
                    swipeable={true}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    autoPlay={false}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={['tablet', 'mobile']}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                  {
                   empresasFiltradas.map((item) => (
                    <div key={item.idempresa} className='flex justify-center items-center'>
                      <div className='m-3 justify-items-center cursor-pointer' onClick={() => handleToggle((vehiculos.filter(item => item.tipovehiculo === 'Motocicleta' && item.usuario.idusuario === userAuth.idusuario)))}>
                      <div className="bg-white rounded-full h-40 w-40 hover:bg-red-600 hover:border-white border-2 border-red-700 flex items-center justify-center shadow-lg relative drop-shadow-md transition duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-2xl">                        
                        <img src="" alt={item.razonsocial} className='' viewBox="0 0 20 20" fill="currentColor"/>
                      </div>
                      <span className='text-xl font-semibold'>
                      {item.razonsocial}
                      </span>
                      </div>
                    </div>
                    
                   )) 
                }
                </Carousel>
                
              
              {
                // isOpen && (
                //   <>
                //     <VehiculoSeleccionado selectedItem={selectedItem} handleToggle={handleToggle}/>
                //   </>
                // )
              }
              
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
