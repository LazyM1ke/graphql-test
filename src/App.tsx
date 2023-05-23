import React from 'react';
import styled from 'styled-components';
import Header from './components/Header/Header';
import TemplateList from './components/TemplateList/TemplateList';
import Information from './components/Information/Information';
import AttributeParams from './components/AttributeParams/AttributeParams';
import AttributeList from './components/AttributeList/AttributeList';

const App = () => {
  // const dispatch = useAppDispatch();
  // const [tempName, setTempName] = useState('');

  // const [addObjTemplate, { loading: addTemplateLoading }] = useMutation(ADD_OBJ_TEMPLATE, {
  //   refetchQueries: [{ query: GET_OBJ_TEMPLATE }],
  // });
  //
  // const addTemplate = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   addObjTemplate({
  //     variables: {
  //       input: {
  //         name: tempName,
  //         fullName: tempName,
  //         groupId: '1c868ead-b9de-4d1e-9f6e-4a74eb463553',
  //         shortName: tempName,
  //         code: 'test',
  //       },
  //     },
  //   });
  //   setTempName('');
  // };
  // if (addTemplateLoading) {
  //   return <h1>adding new template</h1>;
  // }

  return (
    <div>
      <Header />
      <MainPanel>
        {/*<Test />*/}
        <TemplateList />
        <Information />
        <AttributeList />
        <AttributeParams />
      </MainPanel>
    </div>
  );
};
const MainPanel = styled.div`
  display: flex;
  align-content: center;
  flex-direction: row;
  height: 100vh;
`;

export default App;
