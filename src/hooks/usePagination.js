import { useState , useEffect } from "react";

export const usePagination = (data, elementsPerPage) => {
    
    const [numberPages, setNumberPages] = useState(0);
    const [currentElements, setCurrentElements] = useState([]);
    const [numberIndex , setNumberIndex] = useState(0)

    useEffect(() => {
       
        const getTotalData = () => {
            return data? data: [] 
        }

        let page = Math.trunc(getTotalData().length / elementsPerPage )
        if (getTotalData().length % elementsPerPage > 0) {
            page++
        }
        setNumberPages(page)
        setCurrentElements(getTotalData().slice(numberIndex, numberIndex+elementsPerPage))
        // eslint-disable-next-line 
    }, [data, numberIndex]);
   
    const handleClick = (value) => {
        setNumberIndex(value*elementsPerPage)
    }
    return {numberPages, currentElements, handleClick}
}