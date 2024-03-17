export interface Genre {
	id: number;
	name: string;
}
export interface Language {
	english_name: string;
	iso_639_1: string;
	name: string;
}

export interface ConfigStateType {
	genres: Genre[];
	languages: Language[];
}
