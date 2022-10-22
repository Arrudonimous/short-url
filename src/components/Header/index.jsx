import { useState } from 'react';
import axios from 'axios';
import Logo from '../../assets/images/logo.svg';
import HeaderImage from '../../assets/images/header-image.svg';

export default function Header() {
  const [urlBase, setUrlBase] = useState();
  const [urlEnc, setUrlEnc] = useState();

  const headers = {
    'Content-Type': 'application/json',
  };

  async function handleEncUrl() {
    const response = await axios.post('https://api.encurtador.dev/encurtamentos', {
      headers,
      url: urlBase,
    });
    console.log(response);
  }

  return (
    <div className="mx-3 md:mx-20 mt-14">
      <nav className="flex flex-row items-end">
        <img src={Logo} alt="logo" className="w-48 h-10 justify-self-start" />
        <div className="ml-16 text-lg tracking-wider items-center hidden md:flex">
          <a href="#Encurtar" className="mr-11">
            <span>Encurtar</span>
          </a>
          <a href="#Dúvidas">
            <span>Dúvidas</span>
          </a>
        </div>
      </nav>
      <div className="mt-9 pt-16 flex flex-row">
        <div className=" flex flex-col">
          <h1 className="text-3xl md:text-5xl font-bold md:mb-4 ">Deixe seus links mais amigáveis.</h1>
          <span className=" text-base md:text-lg font-normal my-4 md:my-0">
            Um encurtador de URL criado com ferramentas poderosas
            para ajudar você a crescer e proteger sua marca.
          </span>
          <a href="#Encurtar" className="flex text-xl md:text-base py-2 px-16 bg-[#08C9C9] w-[17rem] md:w-[15rem] mb-10 md:mb-6 text-white font-bold md:mt-12 rounded-md" type="submit">Começe agora!</a>
        </div>
        <img src={HeaderImage} alt="" className="lg:w-[35rem] h-[25rem] ml-56 hidden lg:flex" />
      </div>
      <div
        className="w-full mx-auto md:mt-16 bg-[#07C9C9] py-9 px-4 md:py-11 md:pl-11 md:pr-13 rounded-lg items-center md:max-w-[64rem]"
        onChange={(e) => {
          setUrlBase(e.target.value);
        }}
        id="Encurtar"
      >
        <input className="py-3 px-2 rounded-md w-full md:w-3/4 outline-0 text-[#1D2730]" type="text" placeholder="Digite sua url..." />
        <button className="w-full md:w-auto bg-[#1D2730] py-3 px-14 rounded-md mt-3 md:ml-3 text-white font-bold text-base" type="submit" onClick={handleEncUrl}>Encurtar</button>

        {urlEnc && <input className="py-3 px-2 rounded-md w-full mt-8 outline-0 text-[#1D2730]" readOnly type="text" placeholder="Url encurtada..." />}

      </div>
    </div>
  );
}
