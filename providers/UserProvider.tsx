"use client";

import { MyUserContextProvider } from "@/hooks/useUser";

interface UserProvideProps {
    children: React.ReactNode;
};

const UserProvide:React.FC<UserProvideProps> = ({
    children
}) => {
    return ( 
        <MyUserContextProvider>
            {children}
        </MyUserContextProvider>
     );
}
 
export default UserProvide;