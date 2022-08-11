export interface DetailProps {
  label: string;
  value: string | string[];
}

export interface MarkupDetails {
  markupId: DetailProps;
  markupCategory?: DetailProps;
  markupSeverity?: DetailProps;
  markupFindings?: DetailProps;
  markupImages?: DetailProps;
  markupMeasurementType?: DetailProps;
  markupMeasurements?: DetailProps;
  markupLocation?: DetailProps;
  markupNotes?: DetailProps;
}

export interface Markups {
  image: string;
  details: DetailProps[];
  markups: DetailProps[][];
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
