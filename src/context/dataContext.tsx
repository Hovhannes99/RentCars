import {createContext, useContext, useState, useMemo, Dispatch, SetStateAction} from 'react'


export interface IData {
    dataImages: any
    setDataImages: Dispatch<SetStateAction<object>>
}

const initialState = {
    data: {},
}

const CertificateContext = createContext<IData>({
    dataImages: initialState,
    setDataImages: () => ({}),
})

const DataProvider = ({children}: { children?: JSX.Element | JSX.Element[] }) => {
    const [dataImages, setDataImages] = useState(initialState);

    const contextValues = useMemo(
        () => ({
            dataImages,
            setDataImages,
        }),
        [dataImages],
    )

    return <CertificateContext.Provider value={contextValues}>{children}</CertificateContext.Provider>
}

export default DataProvider
export const UseDataContext = () => useContext(CertificateContext)
