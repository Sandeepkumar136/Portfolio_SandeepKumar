const { createContext, useState, useContext } = require("react");

const AlertDialogueContext = createContext();

export const AlertDialogueProvider = ({children})=>{
    const [isAlertOpen, setIsAlertOpen] = useState(true);
    const closeAlert = ()=> setIsAlertOpen(false);
    const openAlert = ()=> setIsAlertOpen(true);

    return(
        <AlertDialogueContext.Provider value={{isAlertOpen, closeAlert, openAlert}}>
            {children}
        </AlertDialogueContext.Provider>
    )
}
export const useAlert = () => useContext(AlertDialogueContext) ;