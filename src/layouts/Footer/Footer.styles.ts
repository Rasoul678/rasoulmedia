import styled, { keyframes } from "styled-components";
import { ThemeType } from "../../components/Global/Theme";

interface FooterProps {
  theme: ThemeType;
  isVisible: boolean;
  isOpen: boolean;
}

export const FooterContainer = styled.div<Partial<FooterProps>>`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3.5rem;
  ${({ isVisible }) => !isVisible && "bottom: -3.5rem;"}
  background-color: ${({ theme }: { theme: ThemeType }) => theme.background};
  border-top: 3px solid ${({ theme }: { theme: ThemeType }) => theme.border};
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.7rem;
  transition: bottom 0.3s ease-in-out;
`;

export const FooterItem = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0.2rem;

  :hover {
    border-bottom: 2px solid
      ${({ theme }: { theme: ThemeType }) => theme.border};
  }
`;

interface Coordinate {
  x: string;
  y: string;
}

type AnimationType = "collapse" | "expand";

const getAnimation = (
  type: AnimationType,
  from: Coordinate,
  to: Coordinate
) => {
  let anim;

  switch (type) {
    case "collapse":
      anim = keyframes`
        from {
            transform: translate(${from.x}, ${from.y});
          }
        
          to {
            transform: translate(${to.x}, ${to.y});
          }
        `;

      break;

    case "expand":
      anim = keyframes`
              from {
                  transform: translate(${from.x}, ${from.y});
                }
              
                to {
                  transform: translate(${to.x}, ${to.y});
                }
              `;
      break;

    default:
      break;
  }
  return anim;
};

export const FooterMenuContainer = styled.div<Partial<FooterProps>>`
  border: 2px solid ${({ theme }: { theme: ThemeType }) => theme.border};
  border-radius: 100%;
  width: 0rem;
  height: 0rem;
  backdrop-filter: blur(10px);
  ${({ isOpen }) =>
    isOpen ? "padding: 12rem;" : "padding: 0; border-color: transparent"};
  position: absolute;
  transition: all 0.2s ease-in-out;
  z-index: -1;

  div {
    :nth-child(1) {
      transform: translate(-1.5rem, -11rem);
      ${({ isOpen }) => !isOpen && "opacity: 0"};

      animation: ${({ isOpen }) => {
          let from = { x: "-1.5rem", y: "-11rem" };
          let to = { x: "-1.5rem", y: "2rem" };
          return isOpen
            ? getAnimation("collapse", from, to)
            : getAnimation("expand", from, to);
        }}
        0.2s linear ${({ isOpen }) => (!isOpen ? "forwards" : "reverse")};
    }

    :nth-child(2) {
      transform: translate(-7.3rem, -12.3rem);
      ${({ isOpen }) => !isOpen && "opacity: 0"};

      animation: ${({ isOpen }) => {
          let from = { x: "-7.3rem", y: "-12.3rem" };
          let to = { x: "-1.5rem", y: "2rem" };
          return isOpen
            ? getAnimation("collapse", from, to)
            : getAnimation("expand", from, to);
        }}
        0.2s linear ${({ isOpen }) => (!isOpen ? "forwards" : "reverse")};
    }
    :nth-child(3) {
      transform: translate(4.3rem, -15.3rem);
      ${({ isOpen }) => !isOpen && "opacity: 0"};

      animation: ${({ isOpen }) => {
          let from = { x: "4.3rem", y: "-15.3rem" };
          let to = { x: "-1.5rem", y: "2rem" };
          return isOpen
            ? getAnimation("collapse", from, to)
            : getAnimation("expand", from, to);
        }}
        0.2s linear ${({ isOpen }) => (!isOpen ? "forwards" : "reverse")};
    }
    :nth-child(4) {
      transform: translate(7.3rem, -14.3rem);
      ${({ isOpen }) => !isOpen && "opacity: 0"};

      animation: ${({ isOpen }) => {
          let from = { x: "7.3rem", y: "-14.3rem" };
          let to = { x: "-1.5rem", y: "2rem" };
          return isOpen
            ? getAnimation("collapse", from, to)
            : getAnimation("expand", from, to);
        }}
        0.2s linear ${({ isOpen }) => (!isOpen ? "forwards" : "reverse")};
    }
    :nth-child(5) {
      transform: translate(-10.5rem, -17.3rem);
      ${({ isOpen }) => !isOpen && "opacity: 0"};

      animation: ${({ isOpen }) => {
          let from = { x: "-10.5rem", y: "-17.3rem" };
          let to = { x: "-1.5rem", y: "2rem" };
          return isOpen
            ? getAnimation("collapse", from, to)
            : getAnimation("expand", from, to);
        }}
        0.2s linear ${({ isOpen }) => (!isOpen ? "forwards" : "reverse")};
    }
  }
`;

export const FooterMenuItem = styled.div`
//   border: 1px solid #fff;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  position: relative;
`;
