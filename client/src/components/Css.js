import { StyleSheet } from "react-native";

const Css = StyleSheet.create({
Container:{
    alignItems: 'center',
    marginTop: 140
},

Logo: {
    alignSelf: 'center'
},

cap: {
    fontSize: 28,
    color: '#FFBC16',
    fontWeight: '400',
    marginTop: 20
},

btnEntrada: {
    width: 250,
    height: 51,
    backgroundColor: "#8CD5F0",
    textAlign: 'center',
    borderRadius: 15,
    marginTop: 34
},

txtBtnEntrada: {
    textAlign: 'center',
    position: 'relative',
    top: 12,
    fontSize: 24,
    fontWeight: '400',
    lineHeight: 29,
    fontFamily: 'Lato'
},

InputLogin: {
    width: 340,
    height: 40,
    backgroundColor: '#8CD5F099',
    borderRadius: 5,
    margin: 5
},

btnLogin: {
    alignItems: 'center',
    width: 199,
    height: 40,
    backgroundColor: '#8CD5F0',
    borderRadius: 15,
    margin: 10
},

txtBtnLogin: {
    textAlign: 'center',
    position: 'relative',
    top: 11
}

});

export default Css;

