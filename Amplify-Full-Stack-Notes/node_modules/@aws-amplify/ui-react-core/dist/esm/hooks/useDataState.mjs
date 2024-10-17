import React__default from 'react';

// default state
const INITIAL_STATE = { hasError: false, isLoading: false, message: undefined };
const LOADING_STATE = { hasError: false, isLoading: true, message: undefined };
const ERROR_STATE = { hasError: true, isLoading: false };
const resolveMaybeAsync = async (value) => {
    const awaited = await value;
    return awaited;
};
function useDataState(action, initialData) {
    const [dataState, setDataState] = React__default.useState(() => ({
        ...INITIAL_STATE,
        data: initialData,
    }));
    const prevData = React__default.useRef(initialData);
    const handleAction = React__default.useCallback((...input) => {
        setDataState(({ data }) => ({ ...LOADING_STATE, data }));
        resolveMaybeAsync(action(prevData.current, ...input))
            .then((data) => {
            prevData.current = data;
            setDataState({ ...INITIAL_STATE, data });
        })
            .catch(({ message }) => {
            setDataState(({ data }) => ({ ...ERROR_STATE, data, message }));
        });
    }, [action]);
    return [dataState, handleAction];
}

export { useDataState as default };
