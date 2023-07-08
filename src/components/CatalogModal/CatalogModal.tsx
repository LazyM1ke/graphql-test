import React, { useEffect, useState } from 'react';
import { Modal } from '@consta/uikit/Modal';
import { Button } from '@consta/uikit/Button';
import { Text } from '@consta/uikit/Text';
import CatalogModalProps from './CatalogModalProps.types';
import { IconClose } from '@consta/uikit/IconClose';
import styled from 'styled-components';
import { Table, TableColumn } from '@consta/uikit/Table';
import { useMutation, useQuery } from '@apollo/client';
import { GET_UNITS } from '../../graphql/units';
import { CREATE_UNIT } from '../../graphql/unitCreate';
import { Loader } from '@consta/uikit/Loader';
import { TextField } from '@consta/uikit/TextField';
import { DELETE_UNIT } from '../../graphql/unitDelete';
import { IconTrash } from '@consta/uikit/IconTrash';
import { IconFlagFilled } from '@consta/uikit/IconFlagFilled';
import { IconFlagStroked } from '@consta/uikit/IconFlagStroked';

export type Unit = {
  id: string;
  name: string;
  symbol: string;
  isRemoved?: boolean;
  kod?: string;
};

type unitData = {
  nodes: Unit[];
};

interface UnitQueryData {
  unit: unitData;
}

type UnitRow = {
  id: string;
  number: number;
  name: string;
  symbol: string;
  code: string;
  status: React.ReactNode;
};
export interface DeleteUnitResponse {
  data: boolean;
  isSuccess: boolean;
}
const CatalogModal = ({ isModalOpen, setIsModalOpen }: CatalogModalProps) => {
  const { data, loading, error } = useQuery<UnitQueryData>(GET_UNITS);
  const [createUnit, { data: createUnitData, loading: createUnitLoading, error: createUnitError }] = useMutation(
    CREATE_UNIT,
    { refetchQueries: [GET_UNITS] },
  );
  const [deleteUnit, { data: deleteUnitData, loading: deleteUnitLoading, error: deleteUnitError }] = useMutation(
    DELETE_UNIT,
    { refetchQueries: [GET_UNITS] },
  );
  const [rows, setRows] = useState<UnitRow[]>([]);
  const [unitName, setUnitName] = useState<string | null>(null);
  const [unitSymbol, setUnitSymbol] = useState<string | null>(null);

  const [activeRow, setActiveRow] = useState<string | null>(null);

  useEffect(() => {
    if (data) {
      const newRows: UnitRow[] = data?.unit.nodes.map((unit, index) => ({
        id: unit.id,
        number: index + 1,
        name: unit.name,
        symbol: unit.symbol,
        code: unit.kod ? unit.kod : '',
        status: unit.isRemoved ? <IconFlagStroked view="link" size="s" /> : <IconFlagFilled view="link" size="s" />,
        delete: <Button form="default" view="clear" iconLeft={IconTrash} onlyIcon size="s" />,
      }));
      setRows(newRows);
    }
  }, [data]);

  const columns: TableColumn<(typeof rows)[number]>[] = [
    {
      title: '№',
      accessor: 'number',
      align: 'center',
    },
    {
      title: 'Наименование',
      accessor: 'name',
    },
    {
      title: 'Сокращенное наименование',
      accessor: 'symbol',
      align: 'center',
    },
    {
      title: 'Код',
      accessor: 'code',
      align: 'center',
    },

    {
      title: 'Актуальность',
      accessor: 'status',
      align: 'center',
    },
  ];

  const createRow = () => {
    // createUnit({
    //   variables: {
    //     Input: {
    //       name: unitName,
    //       symbol: unitSymbol,
    //       kod: '000',
    //     },
    //   },
    // });
    // setUnitSymbol(null);
    // setUnitName(null);
  };

  const handleChangeUnitName = ({ value }: { value: string | null }) => setUnitName(value);
  const handleChangeUnitSymbol = ({ value }: { value: string | null }) => setUnitSymbol(value);

  const handleCancel = () => {
    setUnitSymbol(null);
    setUnitName(null);
  };

  return (
    <Modal
      isOpen={isModalOpen}
      hasOverlay
      onClickOutside={() => setIsModalOpen(false)}
      onEsc={() => setIsModalOpen(false)}
    >
      <ModalHeader>
        <Text size="xl" view="primary">
          Справочник
        </Text>
        <Button
          form="default"
          view="clear"
          iconLeft={IconClose}
          onlyIcon
          size="m"
          onClick={() => setIsModalOpen(false)}
        />
      </ModalHeader>

      {loading ? (
        <Loader size="m" />
      ) : (
        <Table
          verticalAlign="center"
          isResizable
          borderBetweenColumns
          borderBetweenRows
          zebraStriped={'odd'}
          rows={rows}
          columns={columns}
        />
      )}

      <ModalFooter>
        <FooterButtons>
          {/*<Button*/}
          {/*  label="Добавить"*/}
          {/*  form="default"*/}
          {/*  view="primary"*/}
          {/*  size="s"*/}
          {/*  loading={createUnitLoading}*/}
          {/*  onClick={createRow}*/}
          {/*/>*/}
          <AddButton label="Добавить" form="default" view="primary" size="s" />
          <Button label="Редактировать" form="default" view="ghost" size="s" />
          <Button label="Сохранить" form="default" view="primary" size="s" />
          <Button label="Отмена" form="default" view="secondary" size="s" onClick={handleCancel} />
        </FooterButtons>
      </ModalFooter>
    </Modal>
  );
};

const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;

const ModalFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 50px;
  padding: 16px;
`;

const FooterButtons = styled.div`
  display: flex;
  gap: 18px;
`;

const AddButton = styled(Button)`
  background: #24c38e;

  &:hover {
    background-color: #37e1a8;
  }
`;

export default CatalogModal;
