import styled from "styled-components";

export const TimelineContainer = styled.div`
  .vertical-timeline::before {
    background: ${({ theme }) => theme.border};
  }

  .vertical-timeline-element-icon {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.border},
      inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
  }

  .vertical-timeline-element-date {
    color: ${({ theme }) => theme.text};
    opacity: 1 !important;
  }

  .vertical-timeline-element-content {
    box-shadow: 0 3px 0 ${({ theme }) => theme.border};
  }
`;
