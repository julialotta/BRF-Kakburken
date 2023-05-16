import { Outlet } from "react-router-dom";
import Header from "./partials/Header";
import { motion } from "framer-motion";
import { AppWrapper, FlexDiv } from "./style/Wrappers";
import { colors } from "./style/Mixins";
import Footer from "./partials/Footer";
import { SimpleMap } from "./map";

export const Layout = () => {
  const animations = {
    initial: { opacity: 0, x: "100vw" },
    animate: { opacity: 1, x: "0%" },
    exit: { opacity: 0, x: "-100vw" },
  };
  return (
    <AppWrapper>
      <Header />
      <motion.main
        variants={animations}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ duration: 0.6 }}
      >
        <FlexDiv padding='0 0 3rem 0' justify='start'>
          <FlexDiv
            height='min-content'
            minHeight='70vh'
            background={colors.LightGreen}
            dir='column'
            margin='30px'
            padding='4rem'
            justify='start'
          >
            <Outlet />
          </FlexDiv>
        </FlexDiv>
        <SimpleMap />
      </motion.main>
      <Footer />
    </AppWrapper>
  );
};
