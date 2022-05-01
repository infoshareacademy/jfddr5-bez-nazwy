import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { BusinessRating } from "../utils/db";

type Value<T> = [T, Dispatch<SetStateAction<T>>];

export const ratingContext = createContext<Value<BusinessRating[]> | null>(
	null,
);

export const useRatingListContext = () => {
	const value = useContext(ratingContext);

	if (value === null) {
		throw new Error("Missing provider for ratingListContext");
	}

	return value;
};
