//@ts-nocheck
import React, { createContext, useEffect, useState } from 'react';
import InformationShow from './informationShow.tsx';
import { CompInfo, CompInfoContext} from '../imports/infoContext.ts';

function InformationSet() {

    const [info, setInfo] = useState<CompInfo>({
        compname:'loading.',
        email: 'loading',
        officeNum: 0,
        officeAdd: 'loading',
    });

   useEffect(() => {
    setTimeout(() => setInfo({...info, compname:"Persona 4", email:"atluswest10@gmail.com", officeNum:9497880433, officeAdd:"6400 Oak Canyon, Suite 100. Irvine, CA 92618"}), 3000)
    }, [info]); 

    return (
        <CompInfoContext.Provider value={info}>
        <div className="info">
        <InformationShow/>
        </div>
        </CompInfoContext.Provider>
  );
}

export default InformationSet;