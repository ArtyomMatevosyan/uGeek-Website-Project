import React from "react";

function withStickyHeader(Component) {
    return class extends React.Component {

        state = {
            scroll: 0,
            width: 0,
        };

        handleWindowResize = () => {
            this.setState({ width: window.innerWidth })
        };

        handleWindowScroll = () => {
            const { width } = this.state;
            this.setState({ scroll: document.documentElement.scrollTop })
        };


        componentDidMount() {
            this.setState({ width: window.innerWidth });
            window.addEventListener("resize", this.handleWindowResize);
            document.addEventListener("scroll", this.handleWindowScroll);
        }

        componentWillUnmount() {
            window.removeEventListener("resize", this.handleWindowResize);
            document.removeEventListener("scroll", this.handleWindowScroll)
        }

        render() {
            return <Component {...this.state} {...this.props} />
        }
    }
}

export default withStickyHeader;
