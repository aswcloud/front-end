// import logo from './logo.svg';
import { CCol, CRow, CContainer } from '@coreui/react';
import { ObjectContainer } from './components/ObjectContainer'

import '@coreui/coreui/dist/css/coreui.min.css'

function App() {
  return (
    <CContainer>
      <CRow>
        <CCol>
          <ObjectContainer />
        </CCol>
        <CCol>
          <ObjectContainer />
        </CCol>
        <CCol>
          <ObjectContainer />
        </CCol>
      </CRow>
    </CContainer>
  );
}

export default App;
