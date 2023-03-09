//@ts-nocheck
import React, { createContext, useEffect, useState } from 'react';
import UserShow from './UserShow.tsx';
import { User, UserContext } from '../imports/userContext.ts';



function UserSet() {

    const [user, setUser] = useState<User>({
        id: 0,
        name: 'loading',
        role: 'loading',
        phonenum: 0,
        address: 'loading',
        imgsrc: 'https://media.istockphoto.com/id/1335247217/vector/loading-icon-vector-illustration.jpg?s=612x612&w=0&k=20&c=jARr4Alv-d5U3bCa8eixuX2593e1rDiiWnvJLgHCkQM=',
    });

   useEffect(() => {
    setTimeout(() => setUser({...user, id:100608, name:"Yukiko Amagi", role:"CEO", phonenum:99911806, address:"Amagi Inn, 25 by 26, Inaba", imgsrc:"https://i.pinimg.com/750x/a1/d7/6c/a1d76c699914188833869f3cabee5368.jpg"}), 3000)
    }, [user]); 

    return (
        <UserContext.Provider value={user}>
        <div className="HelloContainer">
        <UserShow/>
        </div>
        </UserContext.Provider>
  );
}

export default UserSet;