import { useState } from "react";
import Button from "../button";

const Card = () => {

   const [valor, setValor] = useState(0)

   function Adicionar () {
      setValor(Number(valor) + 1)
   }
   function Remover () {
      setValor(Number(valor) - 1)
   }
   function Resetar () {
      setValor(valor - valor)
   }

   return (
      <div className="card text-center">
         <div className="card-header">
            Card
         </div>
         <div className="card-body">
            <Button 
               className="btn btn-success"
               onClick={Adicionar}
            >
               Adicionar
            </Button>
            <p>{valor}</p>
            <Button 
               className="btn btn-danger"
               onClick={Remover}
            >
               Remover
            </Button>
            <Button 
               className="btn btn-success"
               onClick={Resetar}
            >
               Resetar
            </Button>

         </div>
      </div>
   )
};

export default Card;