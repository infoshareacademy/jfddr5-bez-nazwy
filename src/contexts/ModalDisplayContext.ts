import { createContext, Dispatch, SetStateAction, useContext } from "react";

type Value<T> = [T, Dispatch<SetStateAction<T>>];

export const modalDisplayContext = createContext<Value<string> | null>(null);

export const useModalDisplayContext = () => {
	const value = useContext(modalDisplayContext);

	if (value === null) {
		throw new Error("Missing provider for ModalDisplayContext");
	}

	return value;
};
