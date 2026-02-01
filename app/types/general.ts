export interface ImageEntry {
  id: number;
  documentId: string;
  name: string;
  alternativeText?: string;
  caption: string | null;
  width: number;
  height: number;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata?: unknown | null;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
}

export interface FormData {
  firstName: string;
  tel: string;
  email: string;
  agree: string;
  social?: string;
  message?: string;
}
