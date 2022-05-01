import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { User } from "../utils/db";

type Value<T> = [T, Dispatch<SetStateAction<T>>];

export const currentUserContext = createContext<Value<User> | null>(null);

export const useCurrentUserContext = () => {
	const value = useContext(currentUserContext);

	if (value === null) {
		throw new Error("Missing provider for CurrentUserContext");
	}

	return value;
};
