import { ProgramMetadata } from "@gear-js/api";
import { Button } from "@gear-js/ui";
import { useState } from "react";
import { useApi, useAlert } from "@gear-js/react-hooks";
import { AnyJson } from "@polkadot/types/types";

function YourStateComponent() {

  const { api } = useApi();
  const alert = useAlert();
  const [fullState, setFullState] = useState<AnyJson | null>(null);

  const PROGRAM_ID = "0xe6569ba8b5fa70ad1d95356d66b78815b478b315cb2497c26e5009674be5cb0b";  
  const METADATA_TEXT = "0002000100000000010c000000010e000000011000000000000000011200000001130000003d265400084466756e6769626c655f746f6b656e5f696f28496e6974436f6e66696700002801106e616d65040118537472696e6700011873796d626f6c040118537472696e67000120646563696d616c73080108753800012c6465736372697074696f6e040118537472696e6700013865787465726e616c5f6c696e6b730c013445787465726e616c4c696e6b73000138696e697469616c5f737570706c7914011075313238000130746f74616c5f737570706c791401107531323800011461646d696e18011c4163746f724964000140696e697469616c5f636170616369747920012c4f7074696f6e3c7533323e000118636f6e666967280118436f6e66696700000400000502000800000503000c084466756e6769626c655f746f6b656e5f696f3445787465726e616c4c696e6b730000180114696d616765040118537472696e6700011c776562736974651001384f7074696f6e3c537472696e673e00012074656c656772616d1001384f7074696f6e3c537472696e673e00011c747769747465721001384f7074696f6e3c537472696e673e00011c646973636f72641001384f7074696f6e3c537472696e673e000128746f6b656e6f6d6963731001384f7074696f6e3c537472696e673e00001004184f7074696f6e04045401040108104e6f6e6500000010536f6d6504000400000100001400000507001810106773746418636f6d6d6f6e287072696d6974697665731c4163746f724964000004001c01205b75383b2033325d00001c0000032000000008002004184f7074696f6e04045401240108104e6f6e6500000010536f6d65040024000001000024000005050028084466756e6769626c655f746f6b656e5f696f18436f6e666967000008014474785f73746f726167655f706572696f642c010c75363400012874785f7061796d656e741401107531323800002c000005060030084466756e6769626c655f746f6b656e5f696f1c46545265706c7900011c2c496e697469616c697a6564000000485472616e73666572726564546f55736572730c011066726f6d18011c4163746f724964000120746f5f75736572733401305665633c4163746f7249643e000118616d6f756e74140110753132380001002c5472616e736665727265640c011066726f6d18011c4163746f724964000108746f18011c4163746f724964000118616d6f756e741401107531323800020020417070726f7665640c011066726f6d18011c4163746f724964000108746f18011c4163746f724964000118616d6f756e74140110753132380003002841646d696e416464656404012061646d696e5f696418011c4163746f7249640004003041646d696e52656d6f76656404012061646d696e5f696418011c4163746f7249640005001c42616c616e63650400140110753132380006000034000002180038084466756e6769626c655f746f6b656e5f696f204654416374696f6e0001203c5472616e73666572546f5573657273080118616d6f756e7414011075313238000120746f5f75736572733401305665633c4163746f7249643e000000104d696e74080118616d6f756e7414011075313238000108746f18011c4163746f724964000100104275726e040118616d6f756e7414011075313238000200205472616e7366657210011474785f69643c01304f7074696f6e3c547849643e00011066726f6d18011c4163746f724964000108746f18011c4163746f724964000118616d6f756e74140110753132380003001c417070726f76650c011474785f69643c01304f7074696f6e3c547849643e000108746f18011c4163746f724964000118616d6f756e74140110753132380004002442616c616e63654f66040018011c4163746f7249640005002041646441646d696e04012061646d696e5f696418011c4163746f7249640006002c44656c65746541646d696e04012061646d696e5f696418011c4163746f724964000700003c04184f7074696f6e040454012c0108104e6f6e6500000010536f6d6504002c0000010000400418526573756c740804540130044501440108084f6b040030000000000c457272040044000001000044084466756e6769626c655f746f6b656e5f696f1c46544572726f7200012c34446563696d616c734572726f72000000404465736372697074696f6e4572726f72000100404d6178537570706c79526561636865640002002c537570706c794572726f72000300204e6f7441646d696e000400404e6f74456e6f75676842616c616e63650005002c5a65726f41646472657373000600504e6f74416c6c6f776564546f5472616e736665720007004841646d696e416c72656164794578697374730008004843616e7444656c657465596f757273656c660009003c5478416c7265616479457869737473000a000048084466756e6769626c655f746f6b656e5f696f145175657279000130104e616d650000001853796d626f6c00010020446563696d616c730002003443757272656e74537570706c790003002c546f74616c537570706c790004002c4465736372697074696f6e0005003445787465726e616c4c696e6b730006002442616c616e63654f66040018011c4163746f72496400070048416c6c6f77616e63654f664163636f756e7408011c6163636f756e7418011c4163746f724964000140617070726f7665645f6163636f756e7418011c4163746f7249640008001841646d696e7300090044476574547856616c696469747954696d6508011c6163636f756e7418011c4163746f72496400011474785f69642c011054784964000a00484765745478496473466f724163636f756e7404011c6163636f756e7418011c4163746f724964000b00004c084466756e6769626c655f746f6b656e5f696f2851756572795265706c79000130104e616d650400040118537472696e670000001853796d626f6c0400040118537472696e6700010020446563696d616c73040008010875380002002c4465736372697074696f6e0400040118537472696e670003003445787465726e616c4c696e6b7304000c013445787465726e616c4c696e6b730004003443757272656e74537570706c790400140110753132380005002c546f74616c537570706c790400140110753132380006001c42616c616e636504001401107531323800070048416c6c6f77616e63654f664163636f756e740400140110753132380008001841646d696e7304003401305665633c4163746f7249643e00090038547856616c696469747954696d6504002c012856616c6964556e74696c000a003c5478496473466f724163636f756e7404011874785f6964735001245665633c547849643e000b0000500000022c00";  
  const ACCOUNT_ADDRESS= "0xe4fa3b466792dcd7e58f5d8d49bc4631b5eec3a9ebe48ffe79f859dadf76cb71";
  
  const metadata = ProgramMetadata.from(METADATA_TEXT);

  const getState = () => {
    if (!PROGRAM_ID || !METADATA_TEXT) {
      alert.error("Program ID or metadata not set correctly.");
      return;
    }

    api.programState
      .read({ programId: PROGRAM_ID , payload:{balanceOf:ACCOUNT_ADDRESS}}, metadata)
      .then((result) => {
        setFullState(result.toJSON());
        alert.success("Successful state");
      })
      .catch(({ message }: Error) => alert.error(message));
  };

  const DisplayState = ({ state }: { state: AnyJson | null }) => (
    <center className="state">
      State
      <p className="text">{state ? JSON.stringify(state, null, 2) : "Loading or no state available..."}</p>
    </center>
  );

  return (
    <div className="container">
      <center>Full State</center>
      <DisplayState state={fullState} />
      <Button text="Get Full State" onClick={getState} />
    </div>
  );
}

export { YourStateComponent };  
