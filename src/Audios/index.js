import React, { useState, useCallback } from "react";
import { FlatList, Image, View, Text, StyleSheet, StatusBar, TouchableOpacity, Button} from "react-native"

import Sound from 'react-native-sound';
import imgPlay from '../../assets/Imgs/play.png'
import imgShare from '../../assets/Imgs/share.png'

import Share from "react-native-share";


export default function Item(){
    const [boxs, setBox] = useState([
        {   
            titulo: 'Boa goleiro',
            endereco: 'assets/Audios/smzinho-boa-goleiro.mp3',
            id: '0',
            nome: 'smzinho_boa_goleiro.mp3',
        },
        {   

            titulo: 'Cala a boca ai',
            endereco: 'assets/Audios/smzinho-cala-a-boca-ai.mp3',
            id: '1',
            nome: 'smzinho_cala_a_boca_ai.mp3'
        },
        {   

            titulo: 'Chora mãe',
            id: '2',
            endereco: 'assets/Audios/smzinho-chora-mae.mp3',
            nome: 'smzinho_chora_mae.mp3',
        },
        {   

            titulo: 'Começou errado aqui',
            id: '3',
            endereco: 'assets/Audios/smzinhocomecou-errado-aqui.mp3',
            nome: 'smzinhocomecou_errado_aqui.mp3',
        },     
        {   
            titulo: 'Começou tudo errado',
            id: '4',
            endereco: 'assets/Audios/smzinho-comecou-tudo-errado.mp3',
            nome: 'smzinho_comecou_tudo_errado.mp3',
        },     
        {   

            titulo: 'Deu nem tempo',
            id: '5',
            endereco: 'assets/Audios/smzinho-deu-nem-tempo.mp3',
            nome: 'smzinho_deu_nem_tempo.mp3'

        },     
        {   

            titulo: 'Esse caba tá com problema',
            id: '6',
            endereco: 'assets/Audios/smzinho-esse-caba-ta-com-problema.mp3',
            nome: 'smzinho_esse_caba_ta_com_problema.mp3'
        },     
        {   
            titulo: 'Esse cara é bom',
            id: '7',
            endereco: 'assets/Audios/smzinho-esse-cara-e-bom.mp3',
            nome: 'smzinho_esse_cara_e_bom.mp3'
        },     
        {   
            titulo: 'Fica tranquilo',
            id: '8',
            endereco: 'assets/Audios/smzinho-fica-tranquilo.mp3',
            nome: 'smzinho_fica_tranquilo.mp3'
        },     
        {   
            titulo: 'Goleiro burro',
            id: '9',
            endereco: 'assets/Audios/smzinho-goleiro-burro.mp3',
            nome: 'smzinho_goleiro_burro.mp3'
        },     
        {   
            titulo: 'Jogo de corno também',
            id: '10',
            endereco: 'assets/Audios/smzinho-jogo-de-corno-tambem.mp3',
            nome: 'smzinho_jogo_de_corno_tambem.mp3'
        },     
        {   
            titulo: 'Não sabe se vai bater em cima',
            id: '11',
            endereco: 'assets/Audios/smzinho-nao-sabe-se-vai-bater-em-cima.mp3',
            nome: 'smzinho_nao_sabe_se_vai_bater_em_cima.mp3'
        },     
        {   
            titulo: 'Não sou nem um otário',
            id: '12',
            endereco: 'assets/Audios/smzinho-nao-sou-nem-um-otario.mp3',
            nome: 'smzinho_nao_sou_nem_um_otario.mp3'
        },     
        {   
            titulo: 'O bicho é bom mesmo',
            id: '13',
            endereco: 'assets/Audios/smzinhoobichoebommesmo.mp3',
            nome: 'smzinhoobichoebommesmo.mp3'
        },     
        {   
            titulo: 'O cara deita',
            id: '14',
            endereco: 'assets/Audios/smzinho-o-cara-deita.mp3',
            nome: 'smzinho_o_cara_deita.mp3'
        },     
        {   
            titulo: 'Pegue ai na boca',
            id: '15',
            endereco: 'assets/Audios/smzinho-pegue-ai-na-boca.mp3',
            nome: 'smzinho_pegue_ai_na_boca.mp3'
        },     
        {   
            titulo: 'Peguei o esquema',
            id: '16',
            endereco: 'assets/Audios/smzinho-peguei-o-esquema.mp3',
            nome: 'smzinho_peguei_o_esquema.mp3'
        },     
        {   
            titulo: 'Personagem',
            id: '17',
            endereco: 'assets/Audios/smzinho-personagem.mp3',
            nome: 'smzinho_personagem.mp3'
        },     
        {   
            titulo: 'Que caba escroto',
            id: '18',
            endereco: 'assets/Audios/smzinho-que-caba-escroto.mp3',
            nome: 'smzinho_que_caba_escroto.mp3'
        },     
        {   
            titulo: 'Sai dai',
            id: '19',
            endereco: 'assets/Audios/smzinho-boa-goleiro.mp3',
            nome: 'smzinho_sai_dai.mp3'
        },     
        {   
            titulo: 'Se levanta baiano',
            id: '20',
            endereco: 'assets/Audios/smzinho-se-levanta-baiano.mp3',
            nome: 'smzinho_se_levanta_baiano.mp3'
        },     
        {   
            titulo: 'Tá bobonicado',
            id: '21',
            endereco: 'assets/Audios/smzinho-ta-bobonicado.mp3',
            nome: 'smzinho_ta_bobonicado.mp3'
        },     
        {   
            titulo: 'Tá de brincadeira',
            id: '22',
            endereco: 'assets/Audios/smzinho-ta-de-brincadeira.mp3',
            nome: 'smzinho_ta_de_brincadeira.mp3'
        },     
        {   
            titulo: 'Tomei no c#',
            id: '23',
            endereco: 'assets/Audios/smzinho-tomei-no-cu.mp3',
            nome: 'smzinho_tomei_no_cu.mp3'
        },     
        {   
            titulo: 'Você esqueceu que sou eu aqui',
            id: '24',
            endereco: 'assets/Audios/smzinho-vc-esqueceu-que-sou-eu-aqui.mp3',
            nome: 'smzinho_vc_esqueceu_que_sou_eu_aqui.mp3'
        },     
        {   
            titulo: 'Você que comprou o meu e o seu',
            id: '25',
            nome: 'smzinhovocequecomprouomeueoseu.mp3'
        },     
    ]);

    
    function play(nome){
        let whoosh = new Sound(`${nome}`, Sound.MAIN_BUNDLE, (error) => {
          if (error) {
            console.log('nao deu', error);
            return;
          }
              
          // Play the sound with an onEnd callback
          whoosh.play((success) => {
            if (success) {
              console.log('Sucesso');
            }
          });
        })
    }
    

    //compartilhar
    const [image, setImage] = React.useState(
        "file:///data/user/0/com.rnshare/cache/rn_image_picker_lib_temp_0f9dbf03-c89c-4728-a763-6b15e3752f8e.jpg"
    );
    const share = async (customOptions = options) => {
        try {
          await Share.open(customOptions);
        } catch (err) {
          console.log(err);
        }
    };

    
    return <View style={estilos.item}>

        <StatusBar
            backgroundColor="#0A0E26" barStyle="ligth"
        />

        <FlatList
            data={boxs}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
                <View style={estilos.box}>
                      
                    <Text style={estilos.title}>{item.titulo}</Text>

                    <View style={estilos.botoes}>
                        <TouchableOpacity
                            onPress={() => {
                                play(item.nome);
                            }}
                            style={estilos.play}
                        >
                                
                            <Image source={imgPlay} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={async () => {
                                const novo = require('./base');
                                const n = parseInt(item.id)
                                await share({
                                  title: "Sharing pdf file from awesome share app",
                                  message: "Audio Smzinho",
                                  url: `${novo[n].desc}`,
                                });
                              }} 
                        >
                            <Image source={imgShare} />
                        </TouchableOpacity>
                        
                    </View>
    
                </View>
            )}
        >
        </FlatList>
    
    </View>
}

const estilos = StyleSheet.create({
    item:{
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingBottom: 20
    },
    box: {
        flex: 1,
        width: '100%',
        backgroundColor: '#1976D21A',
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 12,
        marginTop: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    title: {
        flex: 1,
        flexWrap: 'wrap',
        fontSize: 18,
        fontWeight: '700',
        color: '#0A0E26',
    },
    botoes: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    play: {
        marginRight: 20,
    }

})




