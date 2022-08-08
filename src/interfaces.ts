import {ReactNode} from 'react';

export interface TitleData {
  companyName: string;
  companyAddress: string;
  reviewer: string;
}

export interface MarkupData {
  markupId?: string;
  markupCategory?: string;
  markupSeverity?: string;
  markupFindings?: string;
  measurements?: string;
  location?: string;
}

export interface ImageData {
  imageName?: string;
  markupNumber?: number;
  imageLocation?: string;
}

export interface MarkupTableData {
  compareBy: 'severity' | 'markup';
  tableMarkup: {
    severity: string;
    category: string;
    count: number;
  }[];
}
