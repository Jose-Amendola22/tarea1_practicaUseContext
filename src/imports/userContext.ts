import React, { createContext, useState } from 'react';

export interface User{
    id: number,
    name: string,
    role: string,
    phonenum:number,
    address: string,
    imgsrc: string,
}

export const UserContext = createContext<User>({
    id:0,
    name:'',
    role:'',
    phonenum:0,
    address:'',
    imgsrc: '',
});