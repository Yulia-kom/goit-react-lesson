import styled  from "@emotion/react";

export const Layout = styled.div`
backround-color: ${({ isStudent})=>(isStudent ? "blueviolet" : "red")};
`;