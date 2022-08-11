import {ReactNode} from 'react';

export interface TitleData {
  companyName: string;
  companyAddress: string;
  reviewer: string;
}

export interface MarkupData {
  id: string;
  category: string;
  severity: string;
  findings?: string;
  images?: string[];
  measurements?: string;
  count?: number;
  link?: string;
}

export interface MarkupDetail {
  detailId: string;
  detailName: string;
  markupCount: number;
  detailLocation: string;
  detailImage: string;
  markups?: {
    markupId: string;
    markupCategory?: string;
    markupSeverity?: string;
    markupFindings?: string;
    markupImages?: string[];
    markupMeasurementType?: string;
    markupMeasurements?: string;
    markupLocation?: string;
    markupNotes?: string;
  }[];
}

export interface ImageData {
  imageName?: string;
  markupNumber?: number;
  imageLocation?: string;
}

export interface CompareMarkupData {
  tableType: 'severity' | 'category';
  tableMarkup: {
    severity: string;
    category: string;
    count: number;
  }[];
}

export interface SummaryTableData {
  tableType: 'pages' | 'links';
  tableMarkup: {
    pageNumber: number;
    id: string;
    category: string;
    severity: string;
    link: string;
  }[];
}
