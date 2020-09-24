import React from "react";
// import OnOutsiceClick from "react-outclick";
import onClickOutside from "react-onclickoutside";

import "./submenu.scss";

class SubMenu extends React.Component {
  constructor(props) {
    super();
    this.state = {
      subMenu: false,
    };
  }

  handleClickOutside = () => {
    this.setState({ subMenu: false });
  };

  toggleShowMenu = (value) => {
    this.setState({ subMenu: value });
  };

  render() {
    return (
        <div>
          <div
            className=" submenu"
            onClick={() => this.toggleShowMenu(!this.state.subMenu)}
          >
            <p className="">{this.props.value}</p>
          </div>
          {this.state.subMenu && (
            <div className="panel">
              <a className="block" href="#index">
                Link1
              </a>
              <a className="block" href="#index">
                Link2
              </a>
              <a className="block" href="#index">
                Link3
              </a>
              <a className="block" href="#index">
                Link4
              </a>
              <a className="block" href="#index">
                Link5
              </a>
            </div>
          )}
        </div>

    );
  }
}

// const clickOutsideConfig = {
//   handleClickOutside: () => SubMenu.handleClickOutside
// };

export default onClickOutside(SubMenu);
