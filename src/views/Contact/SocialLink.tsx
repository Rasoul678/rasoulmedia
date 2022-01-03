import { Links } from "constants/Links";
import { HTMLAttributes } from "react";
import styled from "styled-components";
import { openNewTab } from "utils/helpers";

interface SocialLinkProps extends HTMLAttributes<HTMLSpanElement> {
  title: string;
}

const SocialLink: React.FC<SocialLinkProps> = (props) => {
  const handleClickLink = () => {
    openNewTab(Links[props.title as keyof typeof Links]);
  };

  return (
    <Span onClick={handleClickLink} {...props}>
      {props.title}
    </Span>
  );
};

const Span = styled.span`
  position: absolute;
  left: 3.3rem;
  top: 0.8rem;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;

export default SocialLink;
