import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { Service } from "../utils/db";

type Value<T> = [T, Dispatch<SetStateAction<T>>];

export const serviceItemContext = createContext<Value<Service> | null>(null);

export const useServiceItemContext = () => {
	const value = useContext(serviceItemContext);

	if (value === null) {
		throw new Error("Missing provider for ServiceItemContext");
	}

	return value;
};
