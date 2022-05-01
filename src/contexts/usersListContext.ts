import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { User } from "../utils/db";

type Value<T> = [T, Dispatch<SetStateAction<T>>];

export const usersListContext = createContext<Value<User[]> | null>(null);

export const useUserListContext = () => {
	const value = useContext(usersListContext);

	if (value === null) {
		throw new Error("Missing provider for UsersListContext");
	}

	return value;
};
