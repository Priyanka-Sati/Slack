import React from "react";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarOption from "./SidebarOption";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="sidebar_info">
          <h2>Priyanka Sati</h2>
          <h3>
            <FiberManualRecordIcon  />
            Priyanka Sati
          </h3>
        </div>
        <CreateIcon />
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="Threads"/>
        <SidebarOption Icon={AllInboxIcon} title="Mention & Rection"/>
        <SidebarOption Icon={DraftsIcon} title="Saved Items"/>
        <SidebarOption Icon={BookmarkBorderIcon} title="Channel Browser"/>
        <SidebarOption Icon={PeopleAltIcon} title="People & User Groups"/>
        <SidebarOption Icon={AppsIcon} title="Apps"/>
        <SidebarOption Icon={FileCopyIcon} title="File Browser"/>
        <SidebarOption Icon={ExpandLessIcon} title="Show less"/>
        <hr />
        <SidebarOption Icon={ExpandMoreIcon} title="Channels"/>
        <hr />
        <SidebarOption Icon={AddIcon} addChannelOption title="Add Channels"/>

        { /* Connect to db and list all the channels*/ }

    </div>
  );
}

export default Sidebar;
