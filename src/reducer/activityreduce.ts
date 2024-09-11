import { act } from "react-dom/test-utils"
import { Activity } from "../types"

export type ActivityAction = {
 type : 'save-activity' , payload : { newActivity : Activity} 
}

type ActivityState = {
    activities : Activity[]
}

export const initialState : ActivityState = {
    activities : []
}

export const ActivityReducer = ( state : ActivityState = initialState , action : ActivityAction ) =>{

    if(action.type === 'save-activity') {
        // este codigo maneja la logica para actualizar el state. 
       
        return{
            ...state, 
            activities : [...state.activities , action.payload.newActivity]
        }
    }

    return state
}