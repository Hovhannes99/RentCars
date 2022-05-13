import  {createContext, useContext, useState, useMemo} from 'react'

const initialState = {
    data: {},
}

const CertificateContext = createContext<any>({
    dataImages: initialState,
    setDataImages: () => ({}),
})

const DataProvider = ({children}: any) => {
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
