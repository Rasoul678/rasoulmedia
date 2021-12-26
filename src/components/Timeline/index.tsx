import {
  VerticalTimeline,
  VerticalTimelineElement,
  VerticalTimelineElementProps,
  VerticalTimelineProps,
} from "react-vertical-timeline-component";
import { useCallback } from "react";
import "./timeline.css";
import * as Styled from "./Timeline.styles";

type ElementProps = VerticalTimelineElementProps & {
  position?: "left" | "right";
};

export interface TimelineElement extends ElementProps {
  title?: string;
  description?: string;
}

interface TimelineProps {
  items: TimelineElement[];
  rootProps?: VerticalTimelineProps;
  onIconClick?: () => void;
  onElementClick?: () => void;
}

const Timeline: React.FC<TimelineProps> = (props) => {
  const { items, rootProps, onIconClick, onElementClick } = props;

  const handleIconClick = useCallback(
    () => () => {
      onIconClick?.();
    },
    []
  );

  const handleElementClick = useCallback(
    () => () => {
      onElementClick?.();
    },
    []
  );

  return (
    <Styled.TimelineContainer>
      <VerticalTimeline {...rootProps}>
        {items.map((item, index) => {
          const { id, title, description, ...rest } = item;
          return (
            <VerticalTimelineElement
              key={id || index}
              contentStyle={{ background: "#222", padding: "1rem 1rem 0" }}
              contentArrowStyle={{ borderRight: "7px solid  #333" }}
              iconStyle={{ backgroundColor: "#222" }}
              iconOnClick={handleIconClick()}
              onTimelineElementClick={handleElementClick()}
              {...rest}
            >
              {!!title && <h3>{title}</h3>}
              {!!description && <p>{description}</p>}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </Styled.TimelineContainer>
  );
};

export default Timeline;
