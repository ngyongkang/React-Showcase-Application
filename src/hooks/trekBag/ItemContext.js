import { useContext } from "react";
import { ItemsContext } from "../../context/trekBag/ItemsContextProvider";

function ItemContext() {
    return useContext(ItemsContext);
}

export {
    ItemContext
};
