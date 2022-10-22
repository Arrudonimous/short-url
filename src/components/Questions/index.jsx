import { IoTriangle } from 'react-icons/io5';
import { useState } from 'react';

export default function Questions() {
  const [firstActive, setFirstActive] = useState(false);
  const [secondActive, setSecondActive] = useState(false);
  const [thirthyActive, setThirthyActive] = useState(false);
  const [forthyActive, setForthyActive] = useState(false);

  function handleSetFirst() {
    if (firstActive) {
      setFirstActive(false);
    } else {
      setFirstActive(true);
    }
  }

  function handleSetSecond() {
    if (secondActive) {
      setSecondActive(false);
    } else {
      setSecondActive(true);
    }
  }

  function handleSetThirthy() {
    if (thirthyActive) {
      setThirthyActive(false);
    } else {
      setThirthyActive(true);
    }
  }

  function handleSetForthy() {
    if (forthyActive) {
      setForthyActive(false);
    } else {
      setForthyActive(true);
    }
  }

  let firstItem;
  let secondItem;
  let thirthyItem;
  let forthyItem;

  if (firstActive) {
    firstItem = (
      <div className="mb-7">
        <button type="submit" onClick={handleSetFirst} className="bg-[#e5e5e5] flex flex-row items-center py-2 px-3 w-full rounded-md">
          <IoTriangle size={20} className="rotate-180" />
          <h1 className="ml-4 text-black font-bold text-lg">O que é um encurtador de URL?</h1>
        </button>
        <div className="ml-2 mt-4">
          <span className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices et tortor non
            quam duis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
            et tortor non quam duis.
          </span>
        </div>
      </div>
    );
  } else if (!firstActive) {
    firstItem = (
      <div className="mb-4">
        <button type="submit" onClick={handleSetFirst} className="bg-[#e5e5e5] flex flex-row items-center py-2 px-3 w-full rounded-md">
          <IoTriangle size={20} className="rotate-90" />
          <h1 className="ml-4 text-black font-bold text-lg">O que é um encurtador de URL?</h1>
        </button>
      </div>
    );
  }

  if (secondActive) {
    secondItem = (
      <div className="mb-7">
        <button type="submit" onClick={handleSetSecond} className="bg-[#e5e5e5] flex flex-row items-center py-2 px-3 w-full rounded-md">
          <IoTriangle size={20} className="rotate-180" />
          <h1 className="ml-4 text-black font-bold text-lg">Benefícios de um URL curto</h1>
        </button>
        <div className="ml-2 mt-4">
          <span className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices et tortor non
            quam duis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
            et tortor non quam duis.
          </span>
        </div>
      </div>
    );
  } else if (!secondActive) {
    secondItem = (
      <div className="mb-4">
        <button type="submit" onClick={handleSetSecond} className="bg-[#e5e5e5] flex flex-row items-center py-2 px-3 w-full rounded-md">
          <IoTriangle size={20} className="rotate-90" />
          <h1 className="ml-4 text-black font-bold text-lg">Benefícios de um URL curto</h1>
        </button>
      </div>
    );
  }

  if (thirthyActive) {
    thirthyItem = (
      <div className="mb-7">
        <button type="submit" onClick={handleSetThirthy} className="bg-[#e5e5e5] flex flex-row items-center py-2 px-3 w-full rounded-md">
          <IoTriangle size={20} className="rotate-180" />
          <h1 className="ml-4 text-black font-bold text-lg">Recursos da plataforma </h1>
        </button>
        <div className="ml-2 mt-4">
          <span className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices et tortor non
            quam duis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
            et tortor non quam duis.
          </span>
        </div>
      </div>
    );
  } else if (!thirthyActive) {
    thirthyItem = (
      <div className="mb-4">
        <button type="submit" onClick={handleSetThirthy} className="bg-[#e5e5e5] flex flex-row items-center py-2 px-3 w-full rounded-md">
          <IoTriangle size={20} className="rotate-90" />
          <h1 className="ml-4 text-black font-bold text-lg">Recursos da plataforma </h1>
        </button>
      </div>
    );
  }

  if (forthyActive) {
    forthyItem = (
      <div className="mb-7">
        <button type="submit" onClick={handleSetForthy} className="bg-[#e5e5e5] flex flex-row items-center py-2 px-3 w-full rounded-md">
          <IoTriangle size={20} className="rotate-180" />
          <h1 className="ml-4 text-black font-bold text-lg">O que é um encurtador de URL personalizado?</h1>
        </button>
        <div className="ml-2 mt-4">
          <span className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices et tortor non
            quam duis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
            et tortor non quam duis.
          </span>
        </div>
      </div>
    );
  } else if (!forthyActive) {
    forthyItem = (
      <div className="mb-4">
        <button type="submit" onClick={handleSetForthy} className="bg-[#e5e5e5] flex flex-row items-center py-2 px-3 w-full rounded-md">
          <IoTriangle size={20} className="rotate-90" />
          <h1 className="ml-4 text-black font-bold text-lg">O que é um encurtador de URL personalizado?</h1>
        </button>
      </div>
    );
  }

  return (
    <div className="flex w-full md:max-w-[39rem] mx-auto mb-32 md:my-40 flex-col" id="Dúvidas">
      <div className="flex items-center justify-center">
        <h1 className="font-bold text-4xl ">Perguntas Frequentes</h1>
      </div>
      <div className="mt-4 text-sm">
        {firstItem}
        {secondItem}
        {thirthyItem}
        {forthyItem}
      </div>
    </div>
  );
}
