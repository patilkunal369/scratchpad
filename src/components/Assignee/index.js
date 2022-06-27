import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import React from "react";
import styled from "styled-components";

const AssigneeWrapper = styled.div`
  margin-right: auto;
`;
const Assignee = ({ imageWidth }) => {
  const imageSize = { width: imageWidth, height: imageWidth };
  return (
    <AssigneeWrapper>
      <AvatarGroup
        max={4}
        componentsProps={{
          additionalAvatar: {
            style: { ...imageSize, fontSize: "0.8rem" },
          },
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src="https://randomuser.me/api/portraits/thumb/men/75.jpg"
          sx={imageSize}
        />
        <Avatar
          alt="Travis Howard"
          src="https://randomuser.me/api/portraits/thumb/men/75.jpg"
          sx={imageSize}
        />
        <Avatar
          alt="Cindy Baker"
          src="https://randomuser.me/api/portraits/thumb/men/75.jpg"
          sx={imageSize}
        />
        <Avatar
          alt="Agnes Walker"
          src="https://randomuser.me/api/portraits/thumb/men/75.jpg"
          sx={imageSize}
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://randomuser.me/api/portraits/thumb/men/75.jpg"
          sx={imageSize}
        />
      </AvatarGroup>
    </AssigneeWrapper>
  );
};

export default Assignee;
