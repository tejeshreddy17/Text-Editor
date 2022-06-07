import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  AppBackground,
  EditorBackground,
  EditorHeading,
  Notepad,
  ImageSection,
  Image,
  Styles,
  BoldButton,
  ItalicButton,
  UnderlineButton,
  TextArea,
} from './styledComponents'

class Editor extends Component {
  state = {bold: false, itlaic: false, underline: false}

  clickingBoldButton = () => {
    this.setState(prevState => ({
      bold: !prevState.bold,
    }))
  }

  clickingItalicButton = () => {
    this.setState(prevState => ({
      italic: !prevState.italic,
    }))
  }

  clickingUnderlineButton = () => {
    this.setState(prevState => ({
      underline: !prevState.underline,
    }))
  }

  render() {
    const {bold, italic, underline} = this.state
    return (
      <AppBackground>
        <EditorBackground>
          <ImageSection>
            <EditorHeading>Text Editor</EditorHeading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </ImageSection>

          <Notepad>
            <Styles>
              <ul>
                <li>
                  <BoldButton
                    data-testid="bold"
                    bold={bold}
                    onClick={this.clickingBoldButton}
                  >
                    <VscBold />
                  </BoldButton>
                </li>
                <li>
                  <ItalicButton
                    data-testid="italic"
                    italic={italic}
                    onClick={this.clickingItalicButton}
                  >
                    <GoItalic />
                  </ItalicButton>
                </li>
                <li>
                  <UnderlineButton
                    data-testid="underline"
                    underline={underline}
                    onClick={this.clickingUnderlineButton}
                  >
                    <AiOutlineUnderline />
                  </UnderlineButton>
                </li>
              </ul>
            </Styles>
            <TextArea bold={bold} underline={underline} italic={italic} />
          </Notepad>
        </EditorBackground>
      </AppBackground>
    )
  }
}

export default Editor
