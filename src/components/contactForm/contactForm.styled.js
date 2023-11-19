import styled from 'styled-components';
import { ErrorMessage } from 'formik';

export const Label = styled.label`
  font-size: 18px;
  font-weight: 700;
 color:rgba(81, 42, 42, 0.47);
 
`
export const Btn = styled.button`
margin-top: 15px;
display:block;
color:#434455;
`
export const Title = styled.div`
margin-top: 5px;`

export const ErrMessage = styled(ErrorMessage)`
width: 200px;
margin-left:auto;
margin-right: auto;`