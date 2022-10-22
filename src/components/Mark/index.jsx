import Item1 from '../../assets/images/item1.png';
import Item2 from '../../assets/images/item2.png';
import Item3 from '../../assets/images/item3.png';

export default function Mark() {
  return (
    <div className="bg-[#F5F5F5] mt-16 md:mt-[7.5rem] px-4 md:py-36 md:px-24">
      <div className="flex justify-center items-center text-2xl md:text-4xl font-bold md:mx-[27rem] md:flex-col">
        <h1>O encurtador de links feito para você aumentar os cliques</h1>
      </div>
      <div className="grid pt-17 grid-cols-1 md:grid-cols-3 mt-16 w-full gap-10 md:gap-36 px-10">
        <div>
          <img src={Item1} alt="" />
          <h1 className="text-2xl font-bold md:mt-5 mb-2">Link fácil</h1>
          <span className="">
            Com mais cliques, aumenta o reconhecimento da marca
            e a confiança do consumidor
          </span>
        </div>
        <div>
          <img src={Item2} alt="" />
          <h1 className="text-2xl font-bold md:mt-5 mb-2">Aumente os resultados</h1>
          <span>
            Temos uma ferramenta poderosa para você conseguir extrair
            o máximo dos seus links, fazer análises e tomar decisões mais inteligentes.
          </span>
        </div>
        <div>
          <img src={Item3} alt="" />
          <h1 className="text-2xl font-bold md:mt-5 mb-2">Link personalizado</h1>
          <span>
            Você pode criar links e ainda personalizar de forma simples e fácil
            para aumentar ainda os acessos.
          </span>
        </div>
      </div>
    </div>
  );
}
