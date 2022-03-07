import * as React from 'react';
import { CustomSelect, RoundedButton, TextInput, WhiteSection } from 'components/atoms';
import { Tags, TagsArray } from 'components/molecules/Tags';
import { DataElement } from 'state-types/reports';
import { BarWrapper } from './style';

interface FilterBarProps {
  data: DataElement[];
  setFilterInput: React.Dispatch<React.SetStateAction<string>>;
  setFilterSelect: React.Dispatch<React.SetStateAction<string>>;
  activeTags: TagsArray;
  setActiveTags: React.Dispatch<React.SetStateAction<string[]>>;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  data,
  setFilterInput,
  setFilterSelect,
  activeTags,
  setActiveTags,
}) => {
  // local state
  const [input, setInput] = React.useState('');
  const [select, setSelect] = React.useState('');

  const options = React.useMemo(() => {
    const years = data.reduce((acc: number[], value) => {
      const date = new Date(value.date);
      acc.push(date.getFullYear());
      return acc;
    }, []);
    const uniqueSet = new Set(years.sort((a, b) => b - a).map((value) => value.toString()));
    const values = Array.from(uniqueSet);
    return values;
  }, [data]);

  const availableTags = React.useMemo(
    () =>
      data.reduce((acc: string[], value) => {
        if (!acc.includes(value.category)) acc.push(value.category);
        return acc;
      }, []),
    [data],
  );

  React.useEffect(() => {
    if (options.length > 0) {
      setSelect(options[0]);
      setFilterSelect(options[0]);
    }
  }, [options]);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect(e.target.value);
  };

  const handleSearch = () => {
    setFilterInput(input);
    setFilterSelect(select);
  };

  return (
    <WhiteSection>
      <BarWrapper>
        <CustomSelect value={select} options={options} onChange={onChangeSelect} flexOrder={1} />
        <TextInput
          value={input}
          onChange={onChangeInput}
          placeholder="Podaj nazwę, numer lub datę raportu"
          flexOrder={3}
        />
        <RoundedButton
          onClick={handleSearch}
          positionAbsolute
          verticalCenter
          rightPosition={30}
          flexOrder={2}
        >
          Wyszukaj
        </RoundedButton>
      </BarWrapper>
      <Tags availableTags={availableTags} activeTags={activeTags} setActiveTags={setActiveTags} />
    </WhiteSection>
  );
};
