import { createContext, useContext, useState } from "react";
//Criando Contexto
export const FavoriteContext = createContext();
FavoriteContext.displayName="Favorite";
 //displayName é utilizado para facilitar o debugging, agora no devTools aparecerá como Favorites

export default function FavoriteProvider({children}){
    const [favorite, setFavorite] = useState([]);
 

    return(

        <FavoriteContext.Provider
        //value é um parâmetro que armazena a variável de estado que criamos utilizando useState
            value={{favorite, setFavorite}}>
                {children}
               
        </FavoriteContext.Provider>

    )
}
export function useFavoriteContext(){
    const {favorite, setFavorite} = useContext(FavoriteContext);

    function addFavorite(newFavorite){
        //verificando se o favorito está repetido, some() é um método que procura 
        //dentro da lista de favorite se existe algum item com o mesmo ID, se for repetido retornará true
        const repeatedFavorite =  favorite.some(item => item.id === newFavorite.id)

        let newList = [...favorite];
        // se o item não esteja repetido será adicionado na newList
        if(!repeatedFavorite){
            newList.push(newFavorite);
            return setFavorite(newList);
        }
        newList = favorite.filter((fav) => fav.id !== newFavorite.id);
        
        return setFavorite(newList);

        //Outra solução para verificar a lista de favoritos:
        
        //se for repetido o splice remove um elemento da lista a partir do indexOF
        /*
        newList.splice(newList.findIndex(item => item.id === newList.find(item => item.id ===newFavorite.id).id),1);
        return setFavorite(newList);*/
      

    }
    //Importaremos este return no component Card pormeio de uma const
    return{
        favorite,
        addFavorite
        
    }
}
