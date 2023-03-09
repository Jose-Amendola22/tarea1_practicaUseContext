//@ts-nocheck
import React, { useContext, createContext, useEffect, useState } from 'react';
import { CompInfo, CompInfoContext } from '../imports/infoContext.ts';

function InformationShow() {
    const {compname, email, officeNum, officeAdd}= useContext<CompInfo>(CompInfoContext);
    
    return (
        <div class="container">
             <div class="back" >
                <h1 class="Details">information</h1>
                  <div class="details-info">
                    <p><b>Company name : </b></p>
                    <p>{compname}</p>
                    <p><b>Email : </b></p>
                    <p>{email}</p>
                    <p><b>Office Number: </b></p>
                    <p>{officeNum}</p>
                    <p><b>Office Address:</b></p>
                    <p>{officeAdd}</p>
                    </div>
                </div>
        </div>
  );
}

export default InformationShow;
