import React from "react";
import { StyleSheet } from "react-native";

const useStyle = () => {

    return StyleSheet.create({

        h1:{
            fontFamily:'Poppins',
            fontSize:18,
            fontWeight:'700',
            lineHeight: 18 * 1.2,
            letterSpacing: 1.1,
            textTransform: 'capitalize',
            color: '#000',
        },
        
        h2:{
            fontFamily:'Poppins',
            fontSize:16,
            fontWeight:'500',
            lineHeight: 16 * 1.2,
            letterSpacing: 1,
            color: '#000',
        },
        
        body1:{
            fontFamily:'Poppins',
            fontSize:14,
            fontWeight:'400',
            lineHeight: 14 * 1.2,
            letterSpacing: 1,
            color: '#000',
        },
        
        body2:{
            fontFamily:'Poppins',
            fontSize:12,
            fontWeight:'400',
            letterSpacing: 1,
            lineHeight:12 * 1.2,
            color: '#000',
        },
        caption:{
            fontFamily:'Poppins',
            fontSize:10,
            fontWeight:'400',
            lineHeight: 10 * 1.2,
            letterSpacing: 1,
            color: '#000',
        },
        error:{
            fontFamily:'Poppins',
            fontSize:12,
            fontWeight:'500',
            lineHeight: 12 * 1.2,
            letterSpacing: 1,
            color: '#000',
            textTransform: 'capitalize',
        },
        btn:{
            fontFamily:'Poppins',
            fontSize:16,
            fontWeight:'500',
            lineHeight: 16 * 1.2,
            letterSpacing: 1,
            color: '#000',
        }
        
        });
}


export default useStyle;