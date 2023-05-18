import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { getBackendOptions, MultiBackend, NodeModel, Tree } from '@minoru/react-dnd-treeview';
import TemplateLayout from '../TemplateLayout/TemplateLayout';

const SampleData = [
  {
    id: 1,
    parent: 0,
    droppable: true,
    text: 'Folder 1',
  },
  {
    id: 2,
    parent: 1,
    droppable: false,
    text: 'File 1-1',
  },
  {
    id: 3,
    parent: 1,
    droppable: false,
    text: 'File 1-2',
  },
  {
    id: 4,
    parent: 0,
    droppable: true,
    text: 'Folder 2',
  },
  {
    id: 5,
    parent: 4,
    droppable: true,
    text: 'Folder 2-1',
  },
  {
    id: 6,
    parent: 5,
    droppable: false,
    text: 'File 2-1-1',
  },
  {
    id: 7,
    parent: 0,
    droppable: false,
    text: 'File 3',
  },
];
const Test = () => {
  const [treeData, setTreeData] = useState<NodeModel[]>(SampleData);
  const handleDrop = (newTree: NodeModel[]) => setTreeData(newTree);

  return (
    <TemplateLayout title="test">
      <DndProvider backend={MultiBackend} options={getBackendOptions()}>
        <Tree
          tree={treeData}
          rootId={0}
          render={(node, { depth, isOpen, onToggle }) => (
            <div style={{ marginInlineStart: depth * 10 }}>
              {node.droppable && <span onClick={onToggle}>{isOpen ? '[-]' : '[+]'}</span>}
              {node.text}
            </div>
          )}
          dragPreviewRender={(monitorProps) => <div>{monitorProps.item.text}</div>}
          onDrop={handleDrop}
        />
      </DndProvider>
    </TemplateLayout>
  );
};

export default Test;
