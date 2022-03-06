/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { DataElement, DEFAULT_TAGS, FilterParams } from 'state/types/reports';

export interface ReportsState {
  filter: FilterParams;
  data: DataElement[];
  error: boolean;
  isFetched: boolean;
  activeTags: string[];
}

const initialState: ReportsState = {
  filter: {
    input: '',
    select: '',
  },
  data: [],
  error: false,
  isFetched: false,
  activeTags: [DEFAULT_TAGS.ALL],
};

export const fetchReports = createAsyncThunk<DataElement[]>('reports/fetchReports', async () => {
  const response = await axios.get<DataElement[]>('./data.json');
  return response.data;
});

export const reportsSlice = createSlice({
  name: 'reports',
  initialState,
  reducers: {
    setFilterParams: (state, action: PayloadAction<FilterParams>) => {
      state.filter.input = action.payload.input;
      state.filter.select = action.payload.select;
    },
    setFilterSelect: (state, action: PayloadAction<string>) => {
      state.filter.select = action.payload;
    },
    setActiveTag: (state, action: PayloadAction<string[]>) => {
      state.activeTags = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchReports.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.isFetched = true;
    });
    builder.addCase(fetchReports.rejected, (state) => {
      state.error = true;
      state.isFetched = false;
    });
  },
});

export const { setFilterParams, setFilterSelect, setActiveTag } = reportsSlice.actions;

export default reportsSlice.reducer;
