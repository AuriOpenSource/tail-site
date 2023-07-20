interface Icon {
	outline: string;
	filled: string;
}

export interface Route {
	name: string;
	href: string;
	icon: Icon;
}

export type Routes = Route[];

export interface NavrailType {
	event: MouseEvent;
}
export interface NavrailTypes {
	chosen: NavrailType;
}

export interface ComponentsFM {
	title: string;
	slug: string;
	description: string;
	lastUpdate: string;
	categories: string;
	published: boolean;
}