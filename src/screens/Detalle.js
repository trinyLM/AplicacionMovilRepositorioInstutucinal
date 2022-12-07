import Pdf from "react-native-pdf";
import {View,StyleSheet,Dimensions} from "react-native";
export default function Detalle() {
    const source={uri: "https://2eb5-187-146-55-44.ngrok.io/media/pdfs/Tesis.pdf"}
  return (
    <>
      <View style={styles.container}>
        <Pdf source={source} style={styles.pdf}></Pdf>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
});
