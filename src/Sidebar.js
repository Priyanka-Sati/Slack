import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
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
import db from './firebase';
import { useStateValue } from './StateProvider';


function Sidebar() {

  // fetching all the Db details like channels and their messages
  const[channels, setChannels] = useState([]);  // this is called useState
  const[{ user }] = useStateValue();

  useEffect(() => {
      // This tells that run this code once when the sidebar component load.
      db.collection('rooms').onSnapshot(snapshot => (
        setChannels(
          snapshot.docs.map(
            doc => ({
              id: doc.id,
              name: doc.data().name,
            })
          )
        )
      ))
  }, [])

  return (
    <div className='sidebar'>
        <div className='sidebar_header'>
            <div className='sidebar_info'>
                <h2>Slack App</h2>
                <h3>
                    <FiberManualRecordIcon className=''/>
                    {user?.displayName}
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

        {/* {connect to DB Firebase and list all the channels} */}
        {/* {we will be using sidebarOption again and again} */}
        <div className='sidebar_channels'>
            {channels.map(channel => (
              <SidebarOption title={channel.name} id={channel.id} key={channel.id}/>
            ))}   
        </div>
    </div>
  )
}

export default Sidebar