

export const todoReducer = ( initialState = [], action) => {

    switch ( action.type) {

        /* case 'ABC':
        throw new Error('Action.type = ABC no esta implementada'); */ 
        //Este utiliza cuando aun no se ha completado o establecido la action

        case '[TODO] Add Todo':
            return [ ...initialState, action.payload ] //Siempre se regresa un nuevo state. En este caso un nuevo arreglo
            
        case '[TODO] Remove Todo':
            return initialState.filter( todo => todo.id !== action.payload );
        
        case '[TODO] Toggle Todo':
            return initialState.map( todo => {
                if ( todo.id === action.payload ) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo
            });

        default:
            return initialState;
    }




}