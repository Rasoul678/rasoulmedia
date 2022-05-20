import React from "react";
import ReactDOM from "react-dom";
import * as Styled from "./Modal.styles";

export interface ModalProps {
  isShown: boolean;
  hide: () => void;
  modalContent: JSX.Element | null;
  headerText?: string;
  closeButton?: boolean;
  isLocked?: boolean;
}

const Modal: React.FC<ModalProps> = (props) => {
  const { isShown, hide, modalContent, headerText, closeButton, isLocked } =
    props;

  const handleClickBackdrop = () => {
    if (isLocked) return;
    hide();
  };

  const modal = (
    <React.Fragment>
      <Styled.Backdrop onClick={handleClickBackdrop} />
      <Styled.Wrapper>
        <Styled.Modal>
          <Styled.Header>
            <Styled.HeaderText>{headerText}</Styled.HeaderText>
            {closeButton && (
              <Styled.CloseButton onClick={hide}>X</Styled.CloseButton>
            )}
          </Styled.Header>
          <Styled.Content>{modalContent}</Styled.Content>
        </Styled.Modal>
      </Styled.Wrapper>
    </React.Fragment>
  );
  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};

export default Modal;
