import {atom, useRecoilState} from 'recoil';

type ScanHooksType = {
  scanText: string;
  changeScanText: (text: string) => void;
  initScanText: () => void;
};

const scanedTextAtom = atom({
  key: 'scanedTextAtom',
  default: '',
});

export const ScanHooks = (): ScanHooksType => {
  const [scanText, setScanText] = useRecoilState(scanedTextAtom);
  const changeScanText = (text: string) => setScanText(text);
  const initScanText = () => setScanText('');
  return {scanText, changeScanText, initScanText};
};
