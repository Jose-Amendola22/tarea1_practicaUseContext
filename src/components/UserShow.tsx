//@ts-nocheck
import React, { useContext, createContext, useEffect, useState } from 'react';
import { User, UserContext } from '../imports/userContext.ts';


function UserShow() {
    const {id, name, role, phonenum, address, imgsrc}= useContext<User>(UserContext);
    
    return (   
        <div class="container">
                <div class="font">
                    <div class="top">
                      <img src={imgsrc}/>
                    </div>
                    <div class="bottom">
                        <p>{name}</p>
                        <p class="desi">{role}</p>
                        <p class="no">ID:{id}</p>
                        <p class="no">Phone number: {phonenum}</p>
                        <p class="no">Address: {address}</p>
                    </div>
                </div>

        </div>      
  );
}

export default UserShow;