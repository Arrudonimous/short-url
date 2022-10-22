import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';

export default function Footer() {
  return (
    <div className="flex items-center justify-center mb-8 flex-col">
      <h1 className="">@DiegoArruda - Todos direitos reservados 2022</h1>
      <div className="mt-5 flex flex-row gap-2">
        <a href="https://github.com/Arrudonimous"><AiOutlineGithub size={30} className="hover: cursor-pointer" /></a>
        <a href="https://www.instagram.com/arrudonimous.js/"><AiOutlineInstagram size={30} className="hover: cursor-pointer" /></a>
        <a href="https://www.linkedin.com/in/diego-arruda-9586791bb/"><AiOutlineLinkedin size={30} className="hover: cursor-pointer" /></a>
      </div>
    </div>
  );
}
