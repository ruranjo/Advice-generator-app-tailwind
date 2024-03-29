import { useState } from 'react';
import { iconArrowOne, iconDices, patternDividerDesktop } from './utils/assets';
import { dataCitas } from './utils/data';

const App = () => {
  const [citaIndex, setCitaIndex] = useState(0);
  const cita = dataCitas[citaIndex];

  const obtenerCitaAleatoria = () => {
    const indiceAleatorio = Math.floor(Math.random() * dataCitas.length);
    return dataCitas[indiceAleatorio];
  };

  const handleChangeIndex = (index:number) => {
    setCitaIndex(index);
  };

  const handleMove = (direction:string) => {
    if (direction === 'next') {
      const nextIndex = (citaIndex + 1) % dataCitas.length;
      handleChangeIndex(nextIndex);
    } else if (direction === 'previous') {
      const previousIndex = (citaIndex - 1 + dataCitas.length) % dataCitas.length;
      handleChangeIndex(previousIndex);
    }
  };

  const handleChangeRandom = () => {
    const randomIndex = obtenerCitaAleatoria().indice - 1;
    handleChangeIndex(randomIndex);
  };

  return (
    <div className="bg-neutral-dark-blue text-white w-full h-screen flex items-center justify-center">
      <div className="relative w-[40%] h-[50%] mobile:h-[60%] min-w-[320px] rounded-xl bg-neutral-dark-grayish-blue flex colum items-center  flex-col ">
        
        <div className=' h-[70%] flex colum items-center justify-evenly flex-col'>
          <h6 className='font-manrope font-semibold  text-primary-neon-green tracking-widest'>CITA #{cita.indice}</h6>
          <div className=' w-16 h-16 flex items-center justify-center rounded-full'>
            <img className=' w-16 h-16 rounded-full  border-[2px] border-primary-light-cyan ' src={cita.avatar} alt="" />
          </div>
          <h6 className='font-manrope font-semibold  text-primary-neon-green tracking-widest'>{cita.nombre}</h6>
          <p className='w-[70%] min-h-[120px]  min-w-[300px] text-lg text-center text-primary-light-cyan  flex items-center justify-center font-manrope font-800 '>
            "{cita.cita}"
          </p>
        </div>

        <div className='absolute bottom-0  flex flex-col  items-center justify-evenly '>
          
          <div className='flex justify-center w-full h-auto  '>
            <img src={iconArrowOne} alt="" className="rotate-180 w-6 h-6 transform transition-transform duration-300 hover:scale-150 cursor-pointer" onClick={() => handleMove('previous')} />
            <img src={patternDividerDesktop} alt="" className='w-[84%] h-auto ' />
            <img src={iconArrowOne} alt="" className="w-6 h-6  transform transition-transform duration-300 hover:scale-150 cursor-pointer" onClick={() => handleMove('next')} />
          </div>

          <button onClick={handleChangeRandom} className='relative bottom-[-30px] w-16 h-16 bg-primary-neon-green flex items-center justify-center rounded-full transform transition-transform duration-300 hover:scale-110'>
            <img className=' transform transition-transform duration-300 hover:rotate-180' src={iconDices} alt="" />
          </button>
         

        </div>

      </div>
    </div>
  )
}

export default App;

/**
    background-color: rgb(31 41 55 / var(--tw-bg-opacity));
    color: rgb(255 255 255 / var(--tw-text-opacity));
    width: 100%;
    height: 100vh;
    border-width: 1px;
    border-color: rgb(239 68 68 / var(--tw-border-opacity));

 */