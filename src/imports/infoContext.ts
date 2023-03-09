//Company info
import React, { createContext, useState } from 'react';

export interface CompInfo{
    compname: string,
    email: string,
    officeNum: number,
    officeAdd: string,

}

export const CompInfoContext = createContext<CompInfo>({
    compname:'',
    email: '',
    officeNum: 0,
    officeAdd: '',
});