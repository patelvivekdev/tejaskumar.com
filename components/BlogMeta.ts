import styled from "@emotion/styled";

const Meta = styled.div`
  font-size: 15px;
  margin: 8px 0;
  font-family: Georgia, serif;
  display: grid;
  grid-template-columns: max-content auto;
  gap: 8px;
  align-items: center;
  color: #545959;

  @media (prefers-color-scheme: dark) {
    color: #b0b4b5;
  }
`;

export default Meta;
