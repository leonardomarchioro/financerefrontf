import { Modal } from "react-overlays";
import { motion } from "framer-motion";
import styled from "styled-components";

export const BackgroundModal = styled(motion.div)`
  position: fixed;
  z-index: 1080;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
`;

export const ModalContainer = styled(Modal)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 1080;
  min-width: 15rem;
  width: ${({ width }) => width};
  max-width: 700px;
  min-height: 15rem;
  height: ${({ height }) => height};

  background-color: transparent;
`;

export const MotionDiv = styled(motion.div)`
  background-color: transparent;
  width: 100%;
  height: 100%;
  z-index: 1040;
`;
