import React, { useEffect, useRef, useState } from 'react';
import { Modal } from '@consta/uikit/Modal';
import { Button } from '@consta/uikit/Button';
import { Text } from '@consta/uikit/Text';
import CatalogModalProps from './CatalogModalProps.types';
import { IconClose } from '@consta/uikit/IconClose';
import styled from 'styled-components';
import { TableColumn } from '@consta/uikit/Table';
import { useMutation, useQuery } from '@apollo/client';
import { GET_UNITS } from '../../graphql/units';
import { CREATE_UNIT, CreateUnitResponse } from '../../graphql/unitCreate';
import { Loader } from '@consta/uikit/Loader';
import { TextField } from '@consta/uikit/TextField';
import { DELETE_UNIT, DeleteUnitResponse } from '../../graphql/unitDelete';
import { IconFlagFilled } from '@consta/uikit/IconFlagFilled';
import { UPDATE_UNIT, UpdateUnitResponse } from '../../graphql/unitUpdate';
import { Popover } from '@consta/uikit/Popover';
import {
  DeleteModalButtons,
  DeleteModalContainer,
  DeleteModalTitle,
  StyledCloseIcon,
} from '../DeleteModal/DeleteModal';

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
const CatalogModal = ({ isModalOpen, setIsModalOpen }: CatalogModalProps) => {
  const { data, loading, error } = useQuery<UnitQueryData>(GET_UNITS);
  const [createUnit, { data: createUnitData, loading: createUnitLoading, error: createUnitError }] =
    useMutation<CreateUnitResponse>(CREATE_UNIT, { refetchQueries: [GET_UNITS] });

  const [deleteUnit, { data: deleteUnitData, loading: deleteUnitLoading, error: deleteUnitError }] =
    useMutation<DeleteUnitResponse>(DELETE_UNIT, { refetchQueries: [GET_UNITS] });

  const [updateUnit, { data: updateUnitData, loading: updateUnitLoading, error: updateUnitError }] =
    useMutation<UpdateUnitResponse>(UPDATE_UNIT, { refetchQueries: [GET_UNITS] });
  const anchorRef = useRef<HTMLButtonElement>(null);

  const [rows, setRows] = useState<UnitRow[]>([]);

  const [addMode, setAddMode] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);

  const [newUnitName, setNewUnitName] = useState<string | null>('');
  const [newUnitSymbol, setNewUnitSymbol] = useState<string | null>('');
  const [newUnitCode, setNewUnitCode] = useState<string | null>('');

  const [editUnitName, setEditUnitName] = useState<string | null>('');
  const [editUnitSymbol, setEditUnitSymbol] = useState<string | null>('');
  const [editUnitCode, setEditUnitCode] = useState<string | null>('');

  const [unitToEdit, setUnitToEdit] = useState<string>('');
  const [unitToDelete, setUnitToDelete] = useState<string>('');

  const [isPopoverVisible, setIsPopoverVisible] = useState<boolean>(false);

  useEffect(() => {
    if (data) {
      const newRows: UnitRow[] = data?.unit.nodes.map((unit, index) => ({
        id: unit.id,
        number: index + 1,
        name: unit.name,
        symbol: unit.symbol,
        code: unit.kod ? unit.kod : '',
        status: !unit.isRemoved,
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

  const handleAddRow = () => {
    createUnit({
      variables: {
        Input: {
          name: newUnitName,
          symbol: newUnitSymbol,
          kod: newUnitCode,
        },
      },
    }).then((response) => {
      if (response.data?.unitCreate.isSuccess) {
        setAddMode(false);
        setNewUnitName('');
        setNewUnitCode('');
        setNewUnitSymbol('');
      }
    });
  };

  const handleEditRow = (unit: UnitRow) => {
    if (editMode) {
      setUnitToEdit(unit.id);
      setEditUnitName(unit.name);
      setEditUnitCode(unit.code);
      setEditUnitSymbol(unit.symbol);
    }
  };

  const handleUnitUpdate = () => {
    updateUnit({
      variables: {
        Input: {
          id: unitToEdit,
          name: editUnitName,
          kod: editUnitCode,
          symbol: editUnitSymbol,
        },
      },
    }).then((response) => {
      if (response.data?.unitUpdate.isSuccess) {
        setEditMode(false);
      }
    });
  };

  const handleCancel = () => {
    if (addMode) {
      setAddMode(false);
      setNewUnitName('');
      setNewUnitCode('');
      setNewUnitSymbol('');
    }
    if (editMode) {
      setEditMode(false);
      setEditUnitName('');
      setEditUnitCode('');
      setEditUnitSymbol('');
    }
  };

  const handleDeleteUnit = () => {
    deleteUnit({
      variables: {
        Input: unitToDelete,
      },
    }).then((response) => {
      if (response.data?.unitDelete.isSuccess) {
        setIsPopoverVisible(false);
      }
    });
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
        <StyledTable>
          <StyledTableHead>
            <StyledTR>
              {columns.map((column) => {
                return <StyledTH key={column.accessor}>{column.title}</StyledTH>;
              })}
            </StyledTR>
          </StyledTableHead>
          <tbody>
            {rows.map((row) => {
              return (
                <Block as={StyledTR} key={row.id} onClick={() => handleEditRow(row)} ref={anchorRef}>
                  <StyledTD>{row.number}</StyledTD>
                  <StyledTD>
                    {editMode && row.id === unitToEdit && row.status !== false ? (
                      <TextField
                        value={editUnitName}
                        type="text"
                        size="s"
                        onChange={({ value }) => {
                          setEditUnitName(value);
                        }}
                      />
                    ) : (
                      <Text size="s" view={row.status ? 'primary' : 'ghost'}>
                        {row.name}
                      </Text>
                    )}
                  </StyledTD>
                  <StyledTD>
                    {editMode && row.id === unitToEdit && row.status !== false ? (
                      <TextField
                        value={editUnitSymbol}
                        type="text"
                        size="s"
                        onChange={({ value }) => {
                          setEditUnitSymbol(value);
                        }}
                      />
                    ) : (
                      <Text size="s" view={row.status ? 'primary' : 'ghost'}>
                        {row.symbol}
                      </Text>
                    )}
                  </StyledTD>
                  <StyledTD>
                    {editMode && row.id === unitToEdit && row.status !== false ? (
                      <TextField
                        value={editUnitCode}
                        type="text"
                        size="s"
                        onChange={({ value }) => {
                          setEditUnitCode(value);
                        }}
                      />
                    ) : (
                      <Text size="s" view={row.status ? 'primary' : 'ghost'}>
                        {row.code}
                      </Text>
                    )}
                  </StyledTD>
                  <StyledTD>
                    {row.status ? (
                      <IconFlagFilled
                        view="link"
                        size="s"
                        onClick={() => {
                          setUnitToDelete(row.id);
                          setIsPopoverVisible(!isPopoverVisible);
                        }}
                      />
                    ) : (
                      <IconFlagFilled view="ghost" size="s" />
                    )}
                  </StyledTD>
                </Block>
              );
            })}
            {addMode && (
              <tr>
                <StyledTD>{rows[rows.length - 1].number + 1}</StyledTD>
                <StyledTD>
                  <TextField
                    value={newUnitName}
                    type="text"
                    size="s"
                    placeholder="Название"
                    onChange={({ value }) => {
                      setNewUnitName(value);
                    }}
                  />
                </StyledTD>
                <StyledTD>
                  <TextField
                    value={newUnitSymbol}
                    type="text"
                    size="s"
                    placeholder="Символ"
                    onChange={({ value }) => {
                      setNewUnitSymbol(value);
                    }}
                  />
                </StyledTD>
                <StyledTD>
                  <TextField
                    value={newUnitCode}
                    type="text"
                    size="s"
                    placeholder="код"
                    onChange={({ value }) => {
                      setNewUnitCode(value);
                    }}
                  />
                </StyledTD>
                <StyledTD>
                  <IconFlagFilled view="link" size="s" />
                </StyledTD>
              </tr>
            )}
          </tbody>
        </StyledTable>
      )}

      <ModalFooter>
        <FooterButtons>
          <AddButton
            label="Добавить"
            form="default"
            view="primary"
            size="s"
            onClick={() => {
              setEditMode(false);
              setAddMode(true);
            }}
            disabled={addMode}
          />
          <Button
            label="Редактировать"
            form="default"
            view="ghost"
            size="s"
            onClick={() => {
              setAddMode(false);
              setEditMode(true);
            }}
          />
          {addMode ? (
            <Button
              label="Сохранить"
              form="default"
              view="primary"
              size="s"
              onClick={handleAddRow}
              loading={createUnitLoading}
            />
          ) : editMode ? (
            <Button
              loading={updateUnitLoading}
              label="Сохранить"
              form="default"
              view="primary"
              size="s"
              onClick={handleUnitUpdate}
            />
          ) : (
            <Button disabled label="Сохранить" form="default" view="primary" size="s" />
          )}
          <Button label="Отмена" form="default" view="secondary" size="s" onClick={handleCancel} />
        </FooterButtons>
        {isPopoverVisible && (
          <Popover
            direction="upCenter"
            spareDirection="downStartLeft"
            offset="s"
            arrowOffset={0}
            isInteractive={true}
            anchorRef={anchorRef}
          >
            <DeleteModalContainer>
              <DeleteModalTitle>
                <Text>Действия изменения статуса актуальности, на “не актуально” необратимо.</Text>
                <StyledCloseIcon view="secondary" size="s" onClick={() => setIsPopoverVisible(false)} />
              </DeleteModalTitle>
              <DeleteModalButtons>
                <Button
                  label="Подтвердить"
                  view="ghost"
                  size="s"
                  onClick={handleDeleteUnit}
                  loading={deleteUnitLoading}
                />
                <Button label="Отмена" view="ghost" size="s" onClick={() => setIsPopoverVisible(false)} />
              </DeleteModalButtons>
            </DeleteModalContainer>
          </Popover>
        )}
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

const StyledTable = styled.table`
  border-collapse: collapse;
  text-align: center;
`;
const StyledTH = styled.th`
  padding: 10px;
  background-color: #161a1d;
`;

const StyledTableHead = styled.thead``;

const StyledTR = styled.tr`
  padding: 10px;
  background-color: #161a1d;
  color: #ffffff;
  :nth-child(odd) {
    background-color: #23272a;
  }
`;

const Block = styled(StyledTR)``;
const StyledTD = styled.td`
  padding: 10px;
`;

export default CatalogModal;
