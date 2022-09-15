import { useState } from "react";


export const useForm = ( initialForm = {} ) => { //Se indica con el {}  que por defecto es un objeto
  
    const [formState, setFormState] = useState( initialForm );

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        
        setFormState({
            ...formState,
            [ name ]: value, //Propiedades computadas de los objetos
        })
    };
    

    const onResetForm = () => {
        setFormState( initialForm )
    }



    return {
        ...formState,//Se envia en spread para poder desestructurarlo de forma sencilla en la declaracion del useForm en el componente en el que se utilice
        formState,
        onInputChange,
        onResetForm
    }
}
