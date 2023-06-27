import React from 'react';
import { Text, View, Pressable, FlatList, TouchableOpacity, Image, Linking, Alert } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Css from "./Css";

const data = [
    { id: 1, txt: 'As crianças vão chegar na escola com atraso.', isChecked: false },
    { id: 2, txt: 'Tive problemas com o veiculo.', isChecked: false },
    { id: 3, txt: 'Transito na estrada, pode ocorrer atraso nas rotas.', isChecked: false },
    { id: 4, txt: 'Haverá atraso a buscar as crianças hoje.', isChecked: false },
    { id: 5, txt: 'O transporte não vai circular hoje.', isChecked: false },
];

export default function EnviarAlertas({ navigation }) {
    const [listas, setListas] = React.useState(data);


    const handleChange = (id) => {
        let temp = listas.map((listas) => {
            if (id === listas.id) {
                return { ...listas, isChecked: !listas.isChecked };
            }
            return listas;
        });
        setListas(temp);
    };

    let selected = listas.filter((listas) =>
     listas.isChecked);



    const renderFlatList = (renderData) => {
        return (
            <FlatList
                data={renderData}
                renderItem={({ item }) => (
                    <View>
                        <View >
                            {/* <Pressable style={Css.button} onPress={() => handleChange(item.id)} >
                                <MaterialCommunityIcons
                                    name={item.isChecked ? 'checkbox-marked'  : 'checkbox-blank-outline'} size={25} color="#FFBC16" />
                            </Pressable> */}
                            <TouchableOpacity style={Css.button} onPress={() => {
                                  if (item.id == 1){Linking.openURL('https://wa.me/5511992402307?text=As+crianças+vão+chegar+na+escola+com+atraso.')
                            }else if (item.id == 2){Linking.openURL('https://wa.me/5511992402307?text=Tive+problemas+com+o+veiculo..')
                            }else if (item.id == 3){Linking.openURL('https://wa.me/5511992402307?text=Transito+na+estrada,+pode+ocorrer+atraso+nas+rotas...')
                            }else if (item.id == 4){Linking.openURL('https://wa.me/5511992402307?text=Haverá+atraso+ao+buscar+as+crianças+hoje.')
                            }else {Linking.openURL('https://wa.me/5511992402307?text=O+transporte+não+vai+circular+hoje.')}
                             }}>
                            <Image source={require('../components/images/zap.png')} style={Css.buttonImageIconStyle} />
                            </TouchableOpacity>
                            
                            <Text style={Css.texte}>{item.txt}</Text>
                        </View>
                        < View style={{height:0.1,backgroundColor: '#d3d3d3',}}></View>
                    </View>

                    
 
                )}
            />
        );
    }


    

    return (
        <View>
            <View >           
                {renderFlatList(listas)}
            </View>
            
            <TouchableOpacity style={Css.button} onPress={() => Linking.openURL('https://wa.me/5511992402307?text=Digite+sua+mensagem+pro+tio%28a%29%3A+')}>
                <Text style={Css.texte}>Mensagem Personalizada</Text>
                <Image source={require('../components/images/zap.png')} style={Css.buttonImageIconStyle} />
            </TouchableOpacity>
            < View style={{height:1,backgroundColor: '#d3d3d3',}}></View>

            {/* <TouchableOpacity style={Css.Button1}>
                <Image source={require('../components/images/enviar.png')} style={Css.buttonImage} />
            </TouchableOpacity> */}
        </View>
    );
};
