import { IFile, INewFile } from '@interfaces/general';
import React from 'react';
import { FlatList } from 'react-native';
import AddFileListItem from './AddFileListItem';
import TaskFileListItem from './TaskFileListItem';
import TaskFileListSeparator from './TaskFileListSeparator';

interface IProps {
  files: (IFile | INewFile)[];
  onDeleteFile?: (file: IFile | INewFile) => void;
  onAddFile?: (file: INewFile) => void;
}

const TaskFileList = ({ files, onDeleteFile, onAddFile }: IProps) => {
  const keyExtractor = React.useCallback((item: IFile | INewFile): string => {
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
      ListHeaderComponent={
        onAddFile && (() => <AddFileListItem onAddFile={onAddFile} />)
      }
    />
  );
};

export default TaskFileList;
