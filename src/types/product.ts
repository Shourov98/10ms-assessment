/* slim starter; extend as you render more fields */
export interface Media {
  name: string,
  resource_type: 'image' | 'video';
  resource_value: string;
  thumbnail_url?: string;
}

export interface ChecklistItem {
  id: string;
  text: string;
  icon: string;
  color: string;
}

export interface SectionBase {
  type: string;
  values: unknown[];
}

export interface Product {
  title: string;
  description: string;
  media: Media[];
  checklist: ChecklistItem[];
  sections: SectionBase[];
}

/* tidy view‑model we feed to the UI */
export interface UiProduct {
  title: string;
  descriptionHtml: string;
  media: {
    trailer: Media | null;
    gallery: { type: 'image' | 'video'; src: string; thumb?: string }[];
  };
  checklist: ChecklistItem[];
  sections: Record<string, unknown>;
}