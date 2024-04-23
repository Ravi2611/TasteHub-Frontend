import axios from "axios";
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
    LOGOUT,
  } from "./ActionType"; 
  
import { API_URL, api } from "../../config/api";

export const registerUser = (reqData) => async(dispatch) => {
    dispatch({type:REGISTER_REQUEST})
    try{
        const {data} = await api.post(`/auth/signup`, reqData.userData);
        if (data.jwt) localStorage.setItem("jwt", data.jwt);
        if (data.role === "ROLE_RESTAURANT_OWNER") {
            reqData.navigate("/admin/restaurant");
        }
        else {
            reqData.navigate("/");
        }
        dispatch({type:REGISTER_SUCCESS, payload:data.jwt});
        console.log("Register user: ", data);
    } catch (error) {
        dispatch({type: REGISTER_FALIURE, payload:error});
        console.log(error);
    }
}

export const loginUser = (reqData) => async(dispatch) => {
    dispatch({type:LOGIN_REQUEST})
    try{
        const {data} = await api.post(`/auth/signin`, reqData.userData);
        if (data.jwt) localStorage.setItem("jwt", data.jwt);
        if (data.role === "ROLE_RESTAURANT_OWNER") {
            reqData.navigate("/admin/restaurant");
        }
        else {
            reqData.navigate("/");
        }
        dispatch({type:LOGIN_SUCCESS, payload:data.jwt});
        console.log("Login user: ", data);
    } catch (error) {
        dispatch({type: LOGIN_FALIURE, payload:error});
        console.log(error);
    }
}

export const getUser = (jwt) => async(dispatch) => {
    dispatch({type:GET_USER_REQUEST})
    try{
        const {data} = await api.get(`/api/users/profile`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        dispatch({type:GET_USER_SUCCESS, payload:data});
        console.log("User profile: ", data);
    } catch (error) {
        dispatch({type: GET_USER_FALIURE, payload:error});
        console.log(error);
    }
}

export const addToFavorite = ({jwt, restaurantId}) => async(dispatch) => {
    dispatch({type:ADD_TO_FAVORITE_REQUEST})
    try{
        const {data} = await api.put(`/api/restaurants/${restaurantId}/add-favourites`, {}, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        dispatch({type:ADD_TO_FAVORITE_SUCCESS, payload:data});
        console.log("Added to favorite: ", data);
    } catch (error) {
        dispatch({type: ADD_TO_FAVORITE_FALIURE, payload:error});
        console.log(error);
    }
}

export const logout = () => async(dispatch) => {
    try{
        localStorage.clear();
        dispatch({type:LOGOUT});
        console.log("Logout success");
    } catch (error) {
        console.log(error);
    }
}