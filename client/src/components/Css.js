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
    marginTop: 34,
    borderColor:'#000',
    borderWidth:1,
    borderRadius:4

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
    backgroundColor: '#8CD5F0',
    borderRadius: 4,
    margin: 5,
    borderColor:'#000',
    borderWidth:1,
    borderRadius:4


},

btnLogin: {
    alignItems: 'center',
    width: 199,
    height: 40,
    backgroundColor: '#8CD5F0',
    borderRadius: 15,
    margin: 10,
    borderColor:'#000',
    borderWidth:1,
    borderRadius:4
},

txtBtnLogin: {
    textAlign: 'center',
    position: 'relative',
    top: 11
},

container_principal:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',

},
inputs:{
    backgroundColor:'#87ceeb',
    height:49,
    padding:3,
    margin:7,
    borderRadius:4,
    borderWidth:1,
    textAlign:'left',
},
inputs_all:{
    width:330,
},
input_half:{
    width:161
},
input_cod:{
    width:113,
    marginBottom:-20
},
input_name:{
    width:235
},
input_sex:{
    width:60
},
input_sexNoEdit:{
    width:80
},
input_address:{
    width:256
},
input_number:{
    width:60
},
input_city:{
    width:199
},
input_cep:{
    width:117
},
input_info:{
    width:158
},
input_moreInfo:{
    backgroundColor:'#87ceeb',
    width:330,
    height:100,
    padding:3,
    margin:7,
    borderRadius:4,
    borderWidth:1,
    textAlign:'justify',
    flexDirection:'row'
    
    
},
input_time:{
    width:158,
    position:'absolute',
    left:172,
    top:130
},
btn_v1:{
    width:250,
    height:51,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#87ceeb',
    borderColor:'#000000',
    borderWidth:1,
    borderRadius:14,
    margin:7
    
},
btn_v2:{
    width:170,
    height:45,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#FFBC16',
    borderColor:'#000000',
    borderWidth:1,
    borderRadius:25,
    margin:7,
},
title:{
    color:'#FFBC16',
    fontSize:28
},
view_input:{
    flexDirection:'row'
},
view_drop:{
    zIndex:3,
},
txt:{
    fontSize:18,
    letterSpacing:1,
},
txt_instrucao:{
    fontSize:24,
    margin:5,
    textAlign:'center'
},
copy:{
    fontSize:24,
    margin:5,
    textAlign:'center',
    textDecorationLine:'underline',
    fontWeight:'bold'
},
boxid:{
    width:340,
    height:233,
    alignItems:'center',
    backgroundColor:'#8CD5F0',
    borderColor:'#000000',
    borderWidth:1,
    borderRadius:10,
    
},
img:{
    width:'30%',
    height:'30%',
    padding:100,
    alignSelf:'center'

},
avatar:{
    width:200,
    height:200,
    borderColor:'#000000',
    borderWidth:1,
    borderRadius:100,
},

search: {
    margin: 20
},

txtCria:{
    color: "#000",
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 30    
},

searchArea: {
    flexDirection: 'row',
    alignItems: 'center'
},

mask_cep:{
    backgroundColor:'#87ceeb',
    height:49,
    padding:3,
    margin:7,
    borderRadius:4,
    borderWidth:1,
    textAlign:'left',
    width:117,
},
mask:{
    backgroundColor:'#87ceeb',
    height:49,
    padding:3,
    margin:7,
    borderRadius:4,
    borderWidth:1,
    textAlign:'left',
    width:330,
    position: 'relative',
    left: 183,
},
mask_tel:{
    backgroundColor:'#87ceeb',
    height:49,
    padding:3,
    margin:7,
    borderRadius:4,
    borderWidth:1,
    textAlign:'left',
    width:330,
},
mask_time:{
    backgroundColor:'#87ceeb',
    height:49,
    padding:3,
    margin:7,
    borderRadius:4,
    borderWidth:1,
    textAlign:'left',
    width:158,
    position:'relative',
    left:170,
    bottom:76

},
errors:{
    fontWeight:'bold',
    color:'red',
    width:'90%',
    fontSize:14,
    marginLeft:7,

},
errors_2:{
    fontWeight:'bold',
    color:'red',
    width:'90%',
    fontSize:14,
    marginLeft:7,
    position:'relative',
    left:170,
    bottom:70
},
errors_senha:{
    fontWeight:'bold',
    color:'red',
    width:300,
    fontSize:14,
    marginLeft:7,
    marginTop:-7
},
info: {
    backgroundColor: "#8CD5F099",
    width:340,
    height:67,
    borderRadius: 10
     
},
container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 150

},
txtinfo: {
    position: 'relative',
    left: 10,
    top: 3,
},
listCria: {
    color: '#000'
},

button:{
    padding: 8,
    backgroundColor: 'transparent',
    width: "100%",
    height: 50,
    alignContent: 'center',
    justifyContent: 'flex-end',
    borderColor: '#ccc',
    borderWidth: 1,
},
buttone:{
    padding: 20,
    backgroundColor: 'transparent',
    width: "100%",
    height: 100,
    alignContent: 'center',
    justifyContent: 'flex-end',
    borderColor: '#ccc',
    borderWidth: 1,
},
buttonImageIconStyle: {
    padding: 16,
    margin: 4,
    height: 5,
    width: 10,
    resizeMode: 'stretch',
  },
  buttonImageIconStyle2: {
    padding: 16,
    margin: 4,
    height: 5,
    width: 10,
    resizeMode: 'stretch',
    position: 'relative',
    top: 30,
    left: 15
  },
text: {
        position: "absolute",
        width: "100%",
        height: 150,
        left: 46,
        top: 8,
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 18,
        lineHeight: 29,
        color: "#000000"
  },
  texte: {
    position: "absolute",
    width: "100%",
    height: 100,
    left: 45,
    top: 8,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 15,
    lineHeight: 29,
    color: "#000000"
},
  text1: {
    position: "absolute",
    width: "100%",
    height: 150,
    left: 50,
    top: 25,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 18,
    lineHeight: 25,
    color: "#000000"
},
text2: {
position: "absolute",
width: "100%",
height: 50,
left: 40,
top: 2,
fontStyle: "normal",
fontWeight: "400",
fontSize: 20,
lineHeight: 25,
color: "#000000"
},
paragraph: {
margin: 3,
fontSize: 15,
position: "absolute",
width: "100%",
height: 100,
left: 10,
top: 2,
fontWeight: "400",
lineHeight: 20,
color: "#000000"
},
title: {
    color: "#333",
    size: 16,
    fontWeight: '700',
    textTransform: 'uppercase',
    marginVertical: 10,
    marginLeft: 12,
},
container: {
    flex: 1,
    backgroundColor: '#fff',
},
Check: {
    padding: 1,
    backgroundColor: "transparent",
    width: "100%",
    height: 100,
    justifyContent: 'center',
    borderColor: '#000000',
    borderWidth: 1,
},
Button1:{
    padding: 8,
    backgroundColor: "transparent",
    width: "100%",
    height: 50,
    alignContent: 'center',
    justifyContent: 'flex-end',
},
buttonImage: {
    position: 'relative',
    width: 52,
    height: 52,
    left: 170,
    top: 80,
},
datePicker: {
    width: 350
}



});

export default Css;

