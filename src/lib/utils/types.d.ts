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

type Categories =
	| 'action'
	| 'containment'
	| 'communication'
	| 'navigation'
	| 'slection'
	| 'textInputs';
export interface ComponentsFM {
	title: string;
	slug: string;
	description: string;
	lastUpdate: string;
	category: Categories;
	published: boolean;
	color: string;
	thumbImage: string;
	posterImage: string;
}

export type Component = Omit<ComponentsFM, 'slug' | 'thumbImage'>;
