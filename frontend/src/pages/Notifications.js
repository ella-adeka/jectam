import React, { useState  } from 'react';
// import styled from 'styled-components';
import notifications from '../data/notifications';
import Container from '../components/layout/Container';
import { PageHeaderDiv, PageTitle, PageTitleDiv, PageTitleSpan } from '../components/layout/PageHeader';
import { BiSolidMessageMinus } from "react-icons/bi";

import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
// import notifAvatarFemale from "../assets/images/avatars/jane_smith.jpg"
// import notifAvatarMale from "../assets/images/avatars/john_doe.jpg"
import NotificationItem from '../components/notifications/Notificationitem';
// import { TagSpanCategory } from '../components/buttons/Tags';



const Notifications = () => {
  const style = { fontSize: "3em", verticalAlign: "middle" };
  

  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    
  };

  // Function to filter notifications based on the selected category
  const filteredNotifications = selectedCategory === 'all' ? notifications : notifications.filter(notification => notification.category === selectedCategory);

  // Calculate count for each category
  const categoryCounts = {
    all: notifications.length,
    projects: notifications.filter(notification => notification.category === 'projects').length,
    tasks: notifications.filter(notification => notification.category === 'tasks').length,
    archived: notifications.filter(notification => notification.category === 'archived').length,
  };

  // Function to capitalize only the first letter of a string
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // Function to format count with leading zero if less than 10
  const formatCount = (count) => {
    return count < 10 ? `0${count}` : count;
  };

  return (
    <Container>
      <PageHeaderDiv>
        <PageTitleDiv>
          <PageTitle>Notifications</PageTitle>
        </PageTitleDiv>
        <PageTitleDiv>
          <PageTitleSpan> <small style={{textDecoration:"underline"}}>Mark all as read</small></PageTitleSpan>
        </PageTitleDiv>
      </PageHeaderDiv>
    
      <div className='dashboard-cat'>
        {Object.keys(categoryCounts).map((category, index, array) => (
          <>
          {index === array.length - 1 ? <span style={{border: "1px solid gray", marginRight: "1em"}}></span> : null}
            <span 
              key={category} 
              className={selectedCategory === category ? "active" : ""}
              style={{marginRight: "1em", padding: "0 1em 1em 0", cursor: "pointer", textAlign:"left", borderBottom: selectedCategory === category ? '2px solid black' : 'none'  }}  
              onClick={() => handleCategoryChange(category)}>{capitalizeFirstLetter(category)}{notifications.length === 0 ? (<small style={{marginLeft: ".4em", }}></small>) : (<small style={{background: "black", color: "white", padding:".2em .3em",marginLeft: ".4em", borderRadius:"3px"}}>{formatCount(categoryCounts[category])}</small>)}</span>
           
          </>
            ))}
        </div>

    
      <div  style={{marginTop: "2em"}}>
        {notifications.length === 0 ? (
          <div className='no-notifs'>
            <BiSolidMessageMinus style={style} />
            <h4>You have no notifications</h4>

          </div>
        ) : (
          filteredNotifications.map(notif => (
            <div className='notification'>
              <div className='notif'>
                <AvatarGroup  style={{ verticalAlign:"top"}} sx={{ width: 40}}>
                  <Avatar alt="ella-adeka" src={notif.member_profile_pic} sx={{ width: 40, height: 40 }} />
                </AvatarGroup>
              </div>
              <NotificationItem notification={notif} />
              { notif.read === false && (<div className='notif-span'></div>)}
            </div> 
          ))
        )}
      </div>
    </Container>
  );
}

export default Notifications;