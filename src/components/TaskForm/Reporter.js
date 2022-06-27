import React from "react";
import Avatar from "@mui/material/Avatar";
import styled from "styled-components";

const ReporterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const Reporter = () => {
  return (
    <div>
      <p>Reporter</p>
      <ReporterWrapper>
        <Avatar
          src="https://randomuser.me/api/portraits/thumb/men/75.jpg"
          alt="profile1"
          sx={{ width: "2rem", height: "2rem" }}
        />
        Kunal Patil
      </ReporterWrapper>
    </div>
  );
};

export default Reporter;
