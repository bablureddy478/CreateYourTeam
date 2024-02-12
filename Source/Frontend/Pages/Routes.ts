import { StackNavigationProp } from "@react-navigation/stack";

export interface NavigationParamList {
    login: undefined;
    register: undefined;
    playerslist: undefined;
    addplayer: undefined;
    editplayer: any;
    [key: string]: undefined;
}

export interface NavigationProps {
    navigation: StackNavigationProp<NavigationParamList>;
}