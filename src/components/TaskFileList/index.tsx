import { IFile } from '@interfaces/general';
import React from 'react';
import { FlatList } from 'react-native';
import AddFileListItem from './AddFileListItem';
import TaskFileListItem from './TaskFileListItem';
import TaskFileListSeparator from './TaskFileListSeparator';

interface IProps {
  files: File[] | IFile[];
  onDeleteFile?: (file: File | IFile) => void;
  onAddFile?: (file: File) => void;
}

const TaskFileList = ({ files, onDeleteFile, onAddFile }: IProps) => {
  const keyExtractor = React.useCallback((item: File | IFile): string => {
    return item.name;
  }, []);

  return (
    <FlatList
      horizontal
      data={files}
      ItemSeparatorComponent={TaskFileListSeparator}
      keyExtractor={keyExtractor}
      renderItem={({ item }) => (
        <TaskFileListItem file={item} onDeleteFile={onDeleteFile} />
      )}
      ListFooterComponent={
        onAddFile && (() => <AddFileListItem onAddFile={onAddFile} />)
      }
    />
  );
};

export default TaskFileList;
