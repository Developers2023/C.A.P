import { SafeAreaView,TouchableOpacity,Text,View,Image } from "react-native";
import Css from "./Css"


export default function Upload({navigation}){
    return(
        <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center',}}>

            <View>
                <Image style={Css.avatar} source={{uri:"https://cdn-icons-png.flaticon.com/512/992/992490.png"}}/>
            </View>
            <TouchableOpacity  style={Css.btn_v1}>
            <Text style={Css.txt}>Escolher Imagem</Text>
          </TouchableOpacity>
         
        <TouchableOpacity  style={Css.btn_v1}>
             <Text style={Css.txt}>Salvar Imagem</Text>
        </TouchableOpacity>
        </SafeAreaView>
    )
}