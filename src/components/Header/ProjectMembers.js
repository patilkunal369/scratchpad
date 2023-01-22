import React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import styled from "styled-components";
import Button from "../common/Button";
import { AiOutlinePlus } from "react-icons/ai";
import { stringAvatar } from "../../utils/helper";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { openInviteUserModal } from "../../store/reducers/user";

const ProjectMembersWrapper = styled(motion.div)`
  width: max-content;
  padding: 1rem;

  display: flex;
  align-items: center;
  gap: 1rem;
`;
const ProjectMembers = ({ members }) => {
  const imageSize = { width: "2rem", height: "2rem" };
  const dispatch = useDispatch();

  return (
    <ProjectMembersWrapper initial={{ x: 100 }} animate={{ x: 0 }}>
      <AvatarGroup
        max={4}
        componentsProps={{
          additionalAvatar: {
            style: { ...imageSize, fontSize: "0.8rem" },
          },
        }}
      >
        {members.map((member, index) => (
          <Avatar
            key={index}
            alt={member.username}
            sx={imageSize}
            {...stringAvatar(member.username ? member.username : "N A")}
          />
        ))}
      </AvatarGroup>
      <Button
        styleType="primary"
        value="Invite"
        onClick={() => dispatch(openInviteUserModal())}
      >
        <AiOutlinePlus />
      </Button>
    </ProjectMembersWrapper>
  );
};

export default ProjectMembers;
