
import { CContainer, CCard, CCardImage, CCardTitle, CCardText, CButton, CCardBody } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'
import logo from '../logo.svg'

export const ObjectContainer = () => {
    return (
        <CContainer>
            <CCard style={{ width: '18rem' }}>
                <CCardImage orientation="top" src={ logo } />
                <CCardBody>
                    <CCardTitle>Card title</CCardTitle>
                    <CCardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </CCardText>
                    <CButton href="#">Go somewhere</CButton>
                </CCardBody>
            </CCard>
        </CContainer>

    );
}
