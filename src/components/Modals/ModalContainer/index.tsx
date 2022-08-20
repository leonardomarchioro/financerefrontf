import { AnimatePresence } from "framer-motion";
import { useCallback, useState } from "react";
import { RenderModalBackdropProps } from "react-overlays/cjs/Modal";
import { BackgroundModal, ModalContainer, MotionDiv } from "./styles";

interface IProps {
  children: React.ReactNode;
  show: boolean;
  close: () => void;
  height?: string;
  width?: string;
  isOpenAnimate: boolean;
}

const backgroundAnimation = {
  inicio: {
    opacity: 0,
  },
  animacao: {
    opacity: 0.8,
    transition: {
      duration: 0.5,
    },
  },
  fim: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Modal: React.FC<IProps> = ({
  children,
  show,
  close,
  height = "80%",
  width = "90%",
  isOpenAnimate,
}) => {
  const renderBackdrop = (props: RenderModalBackdropProps) => (
    <BackgroundModal
      key="modal"
      initial={"inicio"}
      animate={"animacao"}
      exit={"fim"}
      variants={backgroundAnimation}
      {...props}
    ></BackgroundModal>
  );

  return (
    <ModalContainer
      height={height}
      width={width}
      onHide={close}
      show={show}
      renderBackdrop={renderBackdrop}
    >
      <MotionDiv
        key="modal"
        initial={{ y: -1000 }}
        animate={isOpenAnimate ? { y: 0 } : { y: 1000 }}
        exit={{ y: 0 }}
      >
        {children}
      </MotionDiv>
    </ModalContainer>
  );
};

export default Modal;
