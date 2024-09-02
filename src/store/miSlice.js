import { createSlice } from "@reduxjs/toolkit";


export const ListaDeGatitosSlice=createSlice({
    name:"listaGatitos",
    initialState:{
        gatitos:[]
    },
    reducers:{
        agregarUnGatito:(state, action)=>{
            state.gatitos = [...state.gatitos, action.payload]
        },
        modificarNumero: (state, action) => {
            const { indice, number} = action.payload;
            console.log("Modificando gatito en índice:", indice, "con nivel de ternura:", number);
            console.log("Gatito actual:", state.gatitos[indice]);
            if (state.gatitos[indice]) {
                state.gatitos[indice].nivelDeTernura = number;
            } else {
                console.error("Índice fuera de los límites o gatito no encontrado");
            }
        },
        
        eliminarGato: (state, action) => {
            state.gatitos = state.gatitos.filter((_, i) => i !== action.payload);
          },
            
    }

})


export const misGatitosSlice=createSlice({
    name:"misGatitosEscogidos",
    initialState:{
        Escogidos:[]
    },
    reducers:{
       agregarGatitoEscogido:(state,action)=>{
        state.Escogidos.push(action.payload)

       },
       eliminarGatitoEscogido:(state, action)=>{
        state.Escogidos = state.Escogidos.filter((_, i) => i !== action.payload);
       }

    }

})
export const { agregarUnGatito } = ListaDeGatitosSlice.actions
export const { modificarNumero } = ListaDeGatitosSlice.actions
export const { eliminarGato} = ListaDeGatitosSlice.actions
export const { agregarGatitoEscogido, eliminarGatitoEscogido } = misGatitosSlice.actions;