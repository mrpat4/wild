import { motion } from "framer-motion";
import styled from "styled-components";

export default {
  Div_animation: styled(motion.div)`
    width: 100%;
    height: 100%;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: -2;
  `,
};
