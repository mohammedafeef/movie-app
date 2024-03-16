import React from "react";
import Button from "../../atoms/Button";
import { ButtonProps } from "../../atoms/Button/types";

const BottomNavBarButton: React.FC<ButtonProps> = (props) => {
    return (
        <Button className="flex-1 text-white text-2xl font-semibold flex items-center justify-center h-full" {...props} />
    )
};

const BottomNavbar: React.FC = () => {
    return (
        <div className="flex w-full h-full">
            <BottomNavBarButton>
                Favorite
            </BottomNavBarButton>
            <div className="h-full w-1 bg-white"/>
            <BottomNavBarButton>
                WishList
            </BottomNavBarButton>
        </div>
    );
}
 
export default BottomNavbar;