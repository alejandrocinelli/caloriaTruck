import { act } from "react-dom/test-utils"
import { Activity } from "../types"
import { parse } from "uuid"

export type ActivityAction = 
{ type : 'save-activity' , payload : { newActivity : Activity}} |
{ type : 'set-activeId' , payload : { id : Activity['id']}} |
{ type : 'delete-activity' , payload : { id : Activity['id']}} |
{ type : 'resetapp'} 

export type ActivityState = {
    activities : Activity[],
    activeId : Activity["id"]
}

const localStoreActivitis  = () : Activity [] =>{
    const activitis = localStorage.getItem("activities")
    return activitis ? JSON.parse(activitis) : []
}

export const initialState : ActivityState = {
    activities : localStoreActivitis(),
    activeId : ''
}

export const ActivityReducer = ( state : ActivityState = initialState , action : ActivityAction ) =>{

    if(action.type === 'save-activity') {
        // este codigo maneja la logica para actualizar el state. 
       
        let updateActivity : Activity[] = []

        if(state.activeId) {
            
            updateActivity = state.activities.map( activity => activity.id === state.activeId ? action.payload.newActivity : activity)
        }
        else {
            updateActivity = [...state.activities , action.payload.newActivity]
        }

        return{
            ...state, 
            activities : updateActivity,
            activeId : ''
        }
    }

    if(action.type === 'set-activeId') {

        return {
            ...state,
            activeId : action.payload.id
        }
    }

    if(action.type === 'delete-activity'){
        return{
            ...state,
            activities : state.activities.filter(activity =>  activity.id !== action.payload.id)
        }
    }

    if(action.type === 'resetapp') {
        return {
            activities : [] ,
            activeId : ''
        }

    }

    return state
}