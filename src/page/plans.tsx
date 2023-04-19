import Card from "../components/Card";

import { Check, Info } from "phosphor-react";

const Plans = () => {
  return (
    <div className="max-w-[1216px] w-full h-screen flex justify-between items-center gap-10 p-6 m-auto lg:flex-col">
      <Card
        title="Para você começar"
        plan="Essentials "
        price="19,97"
        sign="Assinar agora">
        <li className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-gray-600">
            <Check
              size={20}
              className="text-green-700"
            />
            Até 3 usuários
          </span>
          <Info
            size={20}
            className="text-gray-600 hover:text-purple-100 transition-colors"
          />
        </li>
        <li className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-gray-600">
            <Check
              size={20}
              className="text-green-700"
            />
            Autoatendimento
          </span>
          <Info
            size={20}
            className="text-gray-600 hover:text-purple-100 transition-colors"
          />
        </li>
      </Card>

      <Card
        title="Para você decolar"
        plan="Ultimate "
        price="29,97"
        sign="Assinar agora"
        isPremium={true}>
        <li className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-gray-300">
            <Check
              size={20}
              className="text-green-500"
            />
            Usuários ilimitados
          </span>
          <Info
            size={20}
            className="text-gray-600 hover:text-purple-200 transition-colors"
          />
        </li>
        <li className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-gray-300">
            <Check
              size={20}
              className="text-green-500"
            />
            Suporte 24/7
          </span>
          <Info
            size={20}
            className="text-gray-600 hover:text-purple-200 transition-colors"
          />
        </li>
        <li className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-gray-300">
            <Check
              size={20}
              className="text-green-500"
            />
            CSM Dedicado
          </span>
          <Info
            size={20}
            className="text-gray-600 hover:text-purple-200 transition-colors"
          />
        </li>
        <li className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-gray-300">
            <Check
              size={20}
              className="text-green-500"
            />
            Treinamentos
          </span>
          <Info
            size={20}
            className="text-gray-600 hover:text-purple-200 transition-colors"
          />
        </li>
      </Card>

      <Card
        title="Para sua empresa"
        plan="Enterprise"
        sign="Fale com a gente">
        <li className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-gray-600">
            <Check
              size={30}
              className="text-green-700"
            />
            Plano customizado especialmente para a necessidade de seu negocio
          </span>
        </li>
      </Card>
    </div>
  );
};

export default Plans;
