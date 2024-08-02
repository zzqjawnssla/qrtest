import {ScanHooks} from './ScanHooks.ts';
import {useRef} from 'react';
import {Dimensions, StyleSheet, Vibration, View} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {Camera, CameraType} from 'react-native-camera-kit';

// Define the type for the navigation prop
type RootStackParamList = {
  Home: undefined;
};

const Barcode = () => {
  const {changeScanText, initScanText} = ScanHooks();

  const ref = useRef(null);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const OnBarCodeRead = (event: any) => {
    const barcodeValue = event.nativeEvent.codeStringValue;
    console.log('Barcode value:', barcodeValue); // Log the barcode value
    changeScanText(barcodeValue);
    Vibration.vibrate(100);

    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate('Home');
    }
  };

  console.log('open barcode scanner');

  return (
    <View style={style.container}>
      <Camera
        style={style.scanner}
        ref={ref}
        cameraType={CameraType.Back}
        scanBarcode
        showFrame={false}
        laserColor="rgba(255,0,0,0)"
        frameColor="rgba(255,0,0,0)"
        surfaceColor="rgba(255,0,0,0)"
        onReadCode={OnBarCodeRead}
        cameraOptions={{
          flashMode: 'auto', // Flash setting
          focusMode: 'on', // Focus setting
          zoomMode: 'on', // Zoom setting
          ratioOverlay: '16:9', // Aspect ratio
          barcodeScannerEnabled: true, // Enable barcode scanner
        }}
      />
    </View>
  );
};

export default Barcode;

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  scanner: {flex: 1},
});
