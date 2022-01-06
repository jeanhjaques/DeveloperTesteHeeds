import { createContext, useState } from "react";

export const ShopListContext = createContext([]);

//context responsible for storing the list of shops

export const ShopListProvider = (props) => {
    const [shops, setShops] = useState([
        {
            id: 1,
            name: 'Filial Paulista',
            description: 'Loja localizada em São Paulo - SP',
            localization: {
                latitude: -23.505971822962312,
                longitude: -46.657144177170075,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }
        },
        {
            id: 2,
            name: 'Filial Sul Matogrossensse',
            description: 'Loja localizada em Campo Grande - MS',
            localization: {
                latitude: -20.457402700586332,
                longitude: -54.60018379341746,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }
        }
    ]);

    return(
        <ShopListContext.Provider value={{shops, setShops}}>
            {props.children}
        </ShopListContext.Provider>
    )
}