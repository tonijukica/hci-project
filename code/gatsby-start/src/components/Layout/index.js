import React, { Component } from "react";
 import styles from './styles.module.css';
 import SiteContainer from "../SiteContainer";
 import Header from "./Header";
 import Footer from './Footer';
 import Main from './Main';
 import MenuButton from './MenuButton';
 import HiddenMenu from './HiddenMenu';
 // eslint-disable-next-line
 import _ from "../../styles/index.css";

 class Layout extends Component {
     constructor(props) {
         super(props);
         this.state = {
             showHiddenMenu: false
         }
     }

    componentDidUpdate(prevProps, prevState) {
        const { showHiddenMenu } = this.state;
            if (prevState.showHiddenMenu !== showHiddenMenu) {
            document.body.className = showHiddenMenu ? "open" : "closed";
            }

            const { pathname: prevPathname } = prevProps.location;
            const { pathname: newPathname } = this.props.location;
            if (prevPathname !== newPathname) {
                this.setState({ showHiddenMenu: false });
                }
    }
    showMenu = () => {
        this.setState({ showHiddenMenu: !this.state.showHiddenMenu });
      };

     render() {
         const { children } = this.props;
         const status = this.state.showHiddenMenu ? "open" : "closed";

         return (
            <SiteContainer className = {styles.SiteContainer}>
                <Header className = {styles.Header}>
                <MenuButton  status={status} onClick={this.showMenu}/>
                </Header>
                <HiddenMenu status={status} />
                <Main className = {styles.Container}>{children}</Main>
                <Footer className = {styles.Footer} />
            </SiteContainer>
         );
     }
 }
 export default Layout;