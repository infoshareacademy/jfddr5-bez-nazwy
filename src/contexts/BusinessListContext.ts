import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { Business } from "../utils/db";

type Value<T> = [T, Dispatch<SetStateAction<T>>];

export const businessListContext = createContext<Value<Business[]> | null>(
	null,
);

export const useBusinessListContext = () => {
	const value = useContext(businessListContext);

	if (value === null) {
		throw new Error("Missing provider for BusinessListContext");
	}

	return value;
};
