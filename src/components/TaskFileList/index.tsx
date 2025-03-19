import { IFile } from '@interfaces/general';
import React from 'react';
import { FlatList } from 'react-native';
import TaskFileListItem from './TaskFileListItem';
import TaskFileListSeparator from './TaskFileListSeparator';

interface IProps {
  files: IFile[];
}

const TaskFileList = ({ files }: IProps) => {
  return (
    <FlatList
      horizontal
      data={files}
      ItemSeparatorComponent={TaskFileListSeparator}
      keyExtractor={(item: IFile) => item.id.toString()}
      renderItem={({ item }) => <TaskFileListItem file={item} />}
    />
  );
};

export default TaskFileList;
