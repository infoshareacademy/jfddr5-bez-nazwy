import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { CurrentUser } from "../App";

type Value<T> = [T | null, Dispatch<SetStateAction<T | null>>];

export const currentUserContext = createContext<Value<CurrentUser> | null>(
	null,
);

export const useCurrentUserContext = () => {
	const value = useContext(currentUserContext);

	if (value === null) {
		throw new Error("Missing provider for CurrentUserContext");
	}

	return value;
};
