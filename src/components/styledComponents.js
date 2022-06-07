import styled from 'styled-components'

export const AppBackground = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #25262c;
  min-height: 100vh;
  padding: 55px;
`

export const EditorBackground = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #1b1c22;
  flex-grow: 1;
  padding: 35px;
`
export const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
`
export const Image = styled.img``

export const EditorHeading = styled.h1`
  color: #f8fafc;
  padding: 25px;
  font-size: 25px;
  font-weight: 500;
  text-align: center;
`
export const Notepad = styled.div`
  background-color: #25262c;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-grow: 1;
  border-radius: 15px;
  border: 1px solid #334155;
`
export const Styles = styled.div`
  padding: 15px;
`

export const BoldButton = styled.button`
  color: ${props => (props.bold ? '#faff00' : '#f1f5f9 ')};
  font-size: 25px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`
export const ItalicButton = styled.button`
  color: ${props => (props.italic ? '#faff00' : '#f1f5f9 ')};
  font-size: 25px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`
export const UnderlineButton = styled.button`
  color: ${props => (props.underline ? '#faff00' : '#f1f5f9 ')};
  font-size: 25px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`

export const TextArea = styled.textarea`
  background-color: transparent;
  height: 100%;
  width: 100%;
  border: none;
  border-top: 1px solid #334155;
  padding: 25px;
  outline: none;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.underline ? 'underline' : 'normal')};
  color: white;
  font-size: 25px;
`
