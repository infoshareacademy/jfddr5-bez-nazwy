import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { Business } from "../utils/db";

type Value<T> = [T, Dispatch<SetStateAction<T>>];

export const businessItemContext = createContext<Value<Business> | null>(null);

export const useBusinessItemContext = () => {
	const value = useContext(businessItemContext);

	if (value === null) {
		throw new Error("Missing provider for BusinessItemContext");
	}

	return value;
};
