export type ServiceType = "quick" | "evaluation" | "specialized";

export interface Category { id:string; name:string; slug:string; description:string|null; icon:string|null; image_url:string|null; active:boolean; featured:boolean; show_on_home:boolean; sort_order:number; created_at:string; updated_at:string; }
export interface Service { id:string; name:string; slug:string; short_description:string|null; description:string|null; service_type:ServiceType; image_url:string|null; active:boolean; featured:boolean; show_on_home:boolean; sort_order:number; keywords:string[]; seo_title:string|null; seo_description:string|null; created_at:string; updated_at:string; categories?: Category[]; }
export interface Banner { id:string; internal_name:string; desktop_image_url:string|null; mobile_image_url:string|null; alt_text:string|null; link_url:string|null; cta_label:string|null; open_in_new_tab:boolean; active:boolean; sort_order:number; starts_at:string|null; ends_at:string|null; created_at:string; updated_at:string; }
export interface SiteSetting { key:string; value:unknown; updated_at:string; }
