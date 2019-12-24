// @flow
import React, { Component } from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import {
  // $flow: Popper exist in @material-ui/core package
  Grow, Paper, MenuItem, MenuList, Box, Popper,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import DownArrowIcon from '../../assets/svg/downArrowIcon.svg';

const styles = {
  root: {
    display: 'flex',
    position: 'relative',
    border: '1px solid red',
    boxSizing: 'border-box',
    borderRadius: 4,
    height: 48,
    justifyContent: 'space-between',
    cursor: 'pointer',
    alignItems: 'center',
    padding: 15,
    background: 'white',
  },
  container: { display: 'flex', alignItems: 'center' },
  placeholder: {
    transition: 'all 0.5s ease',
    position: 'absolute',
    top: '-22px',
    background: 'white',
    padding: '0 4px',
  },
  propsIcon: { marginRight: '10px' },
  popper: { zIndex: 2 },
};

type Props = {
  placeholder: any,
  options: Array<{
    value: number,
    title: string,
    comp: React$ComponentType<*>,
  }>,
  classes: {
    root: {},
    popper: {},
    placeholder: {},
    propsIcon: {},
    container: {},
  },
  isMandatory: boolean,
  icon: React$ComponentType<*>,
  withShadow: boolean,
  prevOpen: any,
  onChange?: ({}) => void,
};

type State = {
  open: boolean | string,
  value: any,
  clientWidth: number,
}

const DownIcon = withStyles({
  container: { marginLeft: '10px' },
})(({ classes }) => <DownArrowIcon className={classes.container} />);

class Select extends Component<Props, State> {
  anchorRef: any;

  prevOpen: any;

  static defaultProps = {
    onChange: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      value: null,
      clientWidth: 0,
    };
  }

  componentDidMount() {
    const { open } = this.state;
    if (this.prevOpen.current === true && open === false) {
      this.anchorRef.current.focus();
    }
    this.setState({ clientWidth: this.anchorRef.clientWidth });
    this.prevOpen.current = open;
  }

  handleToggle = () => {
    this.setState((prevState) => ({ open: !prevState.open }));
  };

  handleClose = (event) => {
    if (this.anchorRef.current && this.anchorRef.current.contains(event.target)) {
      return;
    }
    this.setState({ open: false });
  };

  renderMenu = () => {
    const { open, clientWidth } = this.state;
    const { classes } = this.props;

    return (
      <Popper className={classes.popper} open={open} anchorEl={this.anchorRef} role={undefined} key="papper" transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'left top' : 'left bottom', width: `${clientWidth}px` }}
          >
            <Paper>
              <ClickAwayListener onClickAway={this.handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow">
                  {
                    this.props.options.map(({ comp: Comp, ...item }) => (
                      <MenuItem
                        onClick={() => this.onChange({ ...item, Comp })}
                        key={item.value}
                      >
                        { Comp ? <Comp /> : item.title }
                      </MenuItem>
                    ))
                  }
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    );
  };

  onChange = (item) => {
    const { onChange } = this.props;
    // $flow: add on callback to all instance
    onChange(item);
    this.setState({ value: item.title, open: 'false' });
  };

  render() {
    const {
      placeholder, classes, isMandatory, icon: Icon, withShadow,
    } = this.props;
    const { open, value } = this.state;

    // $flow: React.createRef
    this.prevOpen = React.createRef(open);
    const borderContainer = isMandatory ? '2px solid #A3D2FC' : '1px solid #CED4DA';

    return (
      <Box
        style={{
          border: withShadow ? 'none' : borderContainer,
          boxShadow: withShadow && '0px 2px 15px rgba(0, 0, 0, 0.1)',
        }}
        className={classes.root}
        onClick={this.handleToggle}
        ref={(node) => { this.anchorRef = node; }}
        aria-controls={open && 'menu-list-grow'}
        aria-haspopup="true"
      >
        <Box className={classes.container}>
          {Icon && <Icon className={classes.propsIcon} />}
          <p color="#455A64">{value || placeholder}</p>
        </Box>
        { value && <p className={classes.placeholder}>{placeholder}</p>}
        <Box className={classes.container}>
          {value && <Box onClick={() => this.setState({ value: '' })}>x</Box> }
          <DownIcon />
          { this.renderMenu() }
        </Box>
      </Box>
    );
  }
}

export default withStyles(styles)(Select);
