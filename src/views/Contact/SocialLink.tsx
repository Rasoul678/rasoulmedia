import { Links } from "constants/Links";
import { HTMLAttributes } from "react";
import styled from "styled-components";
import { openNewTab } from "utils/helpers";

const { float, direction } = window;

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
  ${float}: -2rem;
  top: 3rem;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  padding: 0.5rem 0.7rem 0.5rem 0;

  ::${direction === 'rtl' ? 'after' : 'before'} {
    content: "@";
    padding: 0 0.2rem;
  }
`;

export default SocialLink;
