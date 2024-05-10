import Image from 'next/image'
import Button from './Button'

const Inicio = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
    <div className="hero-map" />  

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-88">TuLoteria</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
        ¡Bienvenido a TuLoteria! ¡Gana grandes premios en cada sorteo! Desde viajes de ensueño hasta lujosos autos, ¡tus sueños pueden hacerse realidad! No esperes más, ¡únete a la emoción y juega! ¡Tu destino millonario está a solo un boleto de distancia!
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/estrella.png"
                key={index}
                alt="estrella"
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">Excelentes reseñas</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button 
            type="button" 
            title="Descarga la App" 
            variant="btn_green" 
          />
          <Button 
            type="button" 
            title="Quiénes somos?" 
            icon="/pensando.png"
            variant="btn_white_text" 
          />
        </div>
      </div>
      <div className='justify-items-start'>
      <Image 
                src="/fondo-3.jpg"
                alt="fondo"
                width={550}
                height={550}
              />
      </div>
    </section>
  )
}

export default Inicio