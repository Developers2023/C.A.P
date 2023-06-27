import React from 'react';
import { Text, View, Pressable, FlatList, TouchableOpacity, Image, Linking, Alert } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Css from "./Css";

const data = [
    { id: 1, txt: 'Levarei o aluno hoje, porém preciso que busque.', isChecked: false },
    { id: 2, txt: 'O aluno não vai comparecer na aula hoje.', isChecked: false },
    { id: 3, txt: 'O aluno está doente não precisa buscar', isChecked: false },
];

export default function EnviarAlertasRes({ navigation }) {
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
                            <TouchableOpacity style={Css.button} onPress={() => {
                                  if (item.id == 1){Linking.openURL('https://wa.me/5511992402307?text=Levarei+o+aluno+hoje,+porém+preciso+que+busque.')
                            }else if (item.id == 2){Linking.openURL('https://wa.me/5511992402307?text=O+aluno+não+vai+comparecer+na+aula+hoje..')
                            }else if (item.id == 3){Linking.openURL('https://wa.me/5511992402307?text=O+aluno+está+doente+não+precisa+buscar..')
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

        </View>
    );
};
