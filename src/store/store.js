import { configureStore } from "@reduxjs/toolkit";
import {ListaDeGatitosSlice, misGatitosSlice } from "./miSlice";


export default configureStore({
   reducer: {
    listaGatitos: ListaDeGatitosSlice.reducer,
    misGatitosEscogidos: misGatitosSlice.reducer,


    }
})