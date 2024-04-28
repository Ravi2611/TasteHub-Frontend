import { isPresentInFavorites } from "../../config/logic";
import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FALIURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FALIURE,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FALIURE,
    ADD_TO_FAVORITE_REQUEST,
    ADD_TO_FAVORITE_SUCCESS,
    ADD_TO_FAVORITE_FALIURE,
    LOGOUT
  } from "./ActionType"; 


const initialState = {
    user: null,
    isLoading: false,
    error: null,
    jwt: null,
    favorites: [],
    success: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
        case GET_USER_REQUEST:
        case ADD_TO_FAVORITE_REQUEST:
            return {...state, isLoading:true, error:null, success:null};
        
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                jwt: action.payload,
                success: "Register Success"
            };
        
        case LOGOUT:
            return initialState;
        
        case GET_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: action.payload,
                favorites:action.payload.favourites
            };
        
        case ADD_TO_FAVORITE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                favorites: isPresentInFavorites(state.favorites, action.payload) 
                ? state.favorites.filter((item) => item.id !== action.payload.id)
                : [action.payload, ...state.favorites]
            }

        case REGISTER_FALIURE:
        case LOGIN_FALIURE:
        case GET_USER_FALIURE:
        case ADD_TO_FAVORITE_FALIURE:
            return {...state, isLoading:true, error:action.payload, success:null};

        default:
            return state;
    }
}