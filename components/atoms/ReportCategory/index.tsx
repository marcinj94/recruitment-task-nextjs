import * as React from 'react';
import { Category } from './style';

interface ReportCategoryProps {
  category: string;
}
export const ReportCategory: React.FC<ReportCategoryProps> = ({ category }) => (
  <Category>Raporty {category.toLowerCase()}</Category>
);
