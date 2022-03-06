export interface FileElement {
  filename: string;
  filesize: number;
}

export interface DataElement {
  category: string;
  date: number;
  description: string;
  files: FileElement[];
  title: string;
}

export interface FilterParams {
  input: string;
  select: string;
}

export enum DEFAULT_TAGS {
  ALL = 'all',
}
