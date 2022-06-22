
import 'react-pro-sidebar/dist/css/styles.css';
import './Sidebar.css';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

export default function SideBar(){
    return(
        <ProSidebar className="side-bar">
          <Menu iconShape="square">
            <MenuItem >Dashboard <Link to="/"/></MenuItem>
            <SubMenu title="Components" >
              <MenuItem>Home<Link to="/home"/></MenuItem>
              <MenuItem>About <Link to="/about"/></MenuItem>
            </SubMenu>
          </Menu>
        </ProSidebar>
    );
}