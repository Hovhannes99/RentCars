import {useState} from "react";

export const useGenerateGenericState = <T extends unknown, K>(): [T | {}, (fieldName: string, value: K) => void, (state: T) => void] => {
    const [state, setState] = useState<T | {}>({});

    const setStateByFiled = (fieldName: string, value: K) => {
        setState(_s => {
            return {
                ..._s as object,
                [fieldName]: value,
            };
        });
    }

    const setEntireState = (data: T) => {
        setState(data);
    }

    return [
        state,
        setStateByFiled,
        setEntireState
    ];
}