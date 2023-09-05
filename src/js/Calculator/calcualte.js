import {isFunctionExcel, isSetBracket, valueBetweenBracket} from "@/js/Calculator/primaryFunction";
import {sum} from "@/js/Calculator/sum";
import {
 calculateBasicOperation,
 firstArithmeticsOperations,
 isStandardArithmeticOperations
} from "@/js/Calculator/algorithmicActions";

export function calculate(value) {

 calculateBasicOperation("/", "12/2");

 return true;
/*
let result = 0;
 let isCalculate = true;
 do {
  if (isSetBracket(value)) {
   if(isFunctionExcel(value)) {
  //to do zrobieian
   } else {

   }
  } else if (isStandardArithmeticOperations(value)) {
    if(firstArithmeticsOperations(value)) {

    } else {

    }
  }
 } while (isCalculate)

 return result;*/
}

function useFunction(nameFunction, value) {
 let valueResponse;
 switch (nameFunction) {
  case "sum":
   valueResponse = sum(value);
   break;
 }

 return valueResponse;
}
