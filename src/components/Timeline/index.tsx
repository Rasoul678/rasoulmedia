import { useCallback } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
  VerticalTimelineElementProps,
  VerticalTimelineProps,
} from "react-vertical-timeline-component";
import * as Styled from "./Timeline.styles";

type ElementProps = VerticalTimelineElementProps & {
  position?: "left" | "right";
};

export interface TimelineElement extends ElementProps {
  title?: string;
  description?: string | JSX.Element;
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
          const { id, title, description: Description, ...rest } = item;
          return (
            <VerticalTimelineElement
              key={id || index}
              iconOnClick={handleIconClick()}
              onTimelineElementClick={handleElementClick()}
              {...rest}
            >
              {!!title && <h3>{title}</h3>}
              {!!Description &&
                (typeof Description === "object" ? (
                  Description
                ) : (
                  <Styled.TimelineDescription
                    dangerouslySetInnerHTML={{ __html: Description }}
                  />
                ))}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </Styled.TimelineContainer>
  );
};

export default Timeline;
