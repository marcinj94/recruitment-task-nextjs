import * as React from 'react';
import { TagButton } from 'components/atoms';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTag } from 'state/reducers/reports';
import { RootState } from 'state/rootReducer';
import { removeItemFromArray } from 'utils';
import { DEFAULT_TAGS } from 'state/types/reports';
import { ListItem, List } from './style';

interface TagsProps {
  availableTags: string[];
}
export const Tags: React.FC<TagsProps> = ({ availableTags }) => {
  const dispatch = useDispatch();
  const { activeTags } = useSelector((state: RootState) => state.reports);

  const onClick = (id: string) => {
    let tags = [...activeTags];
    if (id !== DEFAULT_TAGS.ALL) {
      if (tags.includes(id)) {
        tags = removeItemFromArray(tags, id);
        if (tags.includes(DEFAULT_TAGS.ALL)) {
          tags = removeItemFromArray(tags, DEFAULT_TAGS.ALL);
        }
      } else {
        tags.push(id);
        if (tags.includes(DEFAULT_TAGS.ALL) && tags.length !== availableTags.length) {
          tags = removeItemFromArray(tags, DEFAULT_TAGS.ALL);
        } else if (tags.length === availableTags.length && !tags.includes(DEFAULT_TAGS.ALL)) {
          tags = [DEFAULT_TAGS.ALL];
        }
      }
    } else if (tags.includes(id)) {
      tags = removeItemFromArray(tags, id);
    } else {
      tags = [DEFAULT_TAGS.ALL];
    }
    dispatch(setActiveTag(tags));
  };

  return (
    <List>
      <ListItem>
        <TagButton
          active={activeTags.includes(DEFAULT_TAGS.ALL)}
          onClick={() => onClick(DEFAULT_TAGS.ALL)}
        >
          Wszystkie
        </TagButton>
      </ListItem>
      {availableTags.map((id) => (
        <ListItem key={id}>
          <TagButton active={activeTags.includes(id)} onClick={() => onClick(id)}>
            {id}
          </TagButton>
        </ListItem>
      ))}
    </List>
  );
};
