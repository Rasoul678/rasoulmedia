import styled from "styled-components";

const { float, revFloat } = window;

export const TimelineDescription = styled.div`
  text-align: justify;
  text-justify: inter-word;
  margin-top: 1rem;
`;

export const TimelineContainer = styled.div`
  .vertical-timeline * {
    box-sizing: border-box;
  }
  .vertical-timeline {
    width: 95%;
    max-width: 1170px;
    margin: 0 auto;
    position: relative;
    padding: 2em 0;
  }
  .vertical-timeline::after {
    content: "";
    display: table;
    clear: both;
  }
  .vertical-timeline::before {
    content: "";
    position: absolute;
    top: 0;
    ${float}: 18px;
    height: 100%;
    width: 4px;
    background: ${({ theme }) => theme.border};
  }
  .vertical-timeline.vertical-timeline--one-column-right::before {
    ${revFloat}: 18px;
    ${float}: unset;
  }
  @media only screen and (min-width: 1170px) {
    .vertical-timeline.vertical-timeline--two-columns {
      width: 90%;
    }
    .vertical-timeline.vertical-timeline--two-columns:before {
      ${float}: 50%;
      margin-${float}: -2px;
    }
  }
  .vertical-timeline-element {
    position: relative;
    margin: 2em 0;
  }
  .vertical-timeline-element > div {
    min-height: 1px;
  }
  .vertical-timeline-element:after {
    content: "";
    display: table;
    clear: both;
  }
  .vertical-timeline-element:first-child {
    margin-top: 0;
  }
  .vertical-timeline-element:last-child {
    margin-bottom: 0;
  }
  @media only screen and (min-width: 1170px) {
    .vertical-timeline-element {
      margin: 4em 0;
    }
    .vertical-timeline-element:first-child {
      margin-top: 0;
    }
    .vertical-timeline-element:last-child {
      margin-bottom: 0;
    }
  }
  .vertical-timeline-element-icon {
    position: absolute;
    top: 0;
    ${float}: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #222;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.border},
      inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
  }
  .vertical-timeline--one-column-right .vertical-timeline-element-icon {
    ${revFloat}: 0;
    ${float}: unset;
  }
  .vertical-timeline-element-icon svg {
    display: block;
    width: 24px;
    height: 24px;
    position: relative;
    ${float}: 50%;
    top: 50%;
    margin-${float}: -12px;
    margin-top: -12px;
  }
  @media only screen and (min-width: 1170px) {
    .vertical-timeline--two-columns .vertical-timeline-element-icon {
      width: 60px;
      height: 60px;
      ${float}: 50%;
      margin-${float}: -30px;
    }
  }
  .vertical-timeline-element-icon {
    -webkit-transform: translateZ(0);
    -webkit-backface-visibility: hidden;
  }
  .vertical-timeline--animate .vertical-timeline-element-icon.is-hidden {
    visibility: hidden;
  }
  .vertical-timeline--animate .vertical-timeline-element-icon.bounce-in {
    visibility: visible;
    -webkit-animation: cd-bounce-1 0.6s;
    -moz-animation: cd-bounce-1 0.6s;
    animation: cd-bounce-1 0.6s;
  }
  @-webkit-keyframes cd-bounce-1 {
    0% {
      opacity: 0;
      -webkit-transform: scale(0.5);
    }
    60% {
      opacity: 1;
      -webkit-transform: scale(1.2);
    }
    100% {
      -webkit-transform: scale(1);
    }
  }
  @-moz-keyframes cd-bounce-1 {
    0% {
      opacity: 0;
      -moz-transform: scale(0.5);
    }
    60% {
      opacity: 1;
      -moz-transform: scale(1.2);
    }
    100% {
      -moz-transform: scale(1);
    }
  }
  @keyframes cd-bounce-1 {
    0% {
      opacity: 0;
      -webkit-transform: scale(0.5);
      -moz-transform: scale(0.5);
      -ms-transform: scale(0.5);
      -o-transform: scale(0.5);
      transform: scale(0.5);
    }
    60% {
      opacity: 1;
      -webkit-transform: scale(1.2);
      -moz-transform: scale(1.2);
      -ms-transform: scale(1.2);
      -o-transform: scale(1.2);
      transform: scale(1.2);
    }
    100% {
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }
  }
  .vertical-timeline-element-content {
    position: relative;
    margin-${float}: 60px;
    background: ${({ theme }) => theme.card.backgroundColor};
    border-radius: 0.25em;
    padding: 1rem 1rem 0;
    box-shadow: 0 3px 0 ${({ theme }) => theme.border};
    color: ${({ theme }) => theme.card.textColor};

  }
  .vertical-timeline--one-column-right .vertical-timeline-element-content {
    margin-${revFloat}: 60px;
    margin-${float}: unset;
  }
  .vertical-timeline-element--no-children .vertical-timeline-element-content {
    background: 0 0;
    box-shadow: none;
  }
  .vertical-timeline-element-content:after {
    content: "";
    display: table;
    clear: both;
  }
  .vertical-timeline-element-content h2 {
    color: #303e49;
  }
  .vertical-timeline-element-content .vertical-timeline-element-date,
  .vertical-timeline-element-content p {
    font-size: 13px;
    font-size: 0.8125rem;
    font-weight: 500;
  }
  .vertical-timeline-element-content .vertical-timeline-element-date {
    display: inline-block;
  }
  .vertical-timeline-element-content p {
    margin: 1em 0 0;
    line-height: 1.6;
  }
  .vertical-timeline-element-title {
    margin: 0;
  }
  .vertical-timeline-element-subtitle {
    margin: 0;
  }
  .vertical-timeline-element-content .vertical-timeline-element-date {
    float: ${float};
    padding: 0.8em 0;
    opacity: 0.7;
  }
  .vertical-timeline-element-content-arrow {
    content: "";
    position: absolute;
    top: 0.8rem;
    ${revFloat}: 100%;
    height: 0;
    width: 0;
    border: 7px solid transparent;
    border-${revFloat}: 7px solid ${({ theme }) => theme.border};
  }
  .vertical-timeline--one-column-right
    .vertical-timeline-element-content-arrow {
    content: "";
    position: absolute;
    top: 16px;
    ${revFloat}: unset;
    ${float}: 100%;
    height: 0;
    width: 0;
    border: 7px solid transparent;
    border-${float}: 7px solid #fff;
  }
  .vertical-timeline--one-column-right
    .vertical-timeline-element-content::before {
    ${float}: 100%;
    border-${float}: 7px solid #fff;
    border-${revFloat}: unset;
  }
  .vertical-timeline-element--no-children
    .vertical-timeline-element-content::before {
    display: none;
  }
  .vertical-timeline-element--no-children
    .vertical-timeline-element-content-arrow {
    display: none;
  }
  @media only screen and (min-width: 768px) {
    .vertical-timeline-element-content h2 {
      font-size: 20px;
      font-size: 1.25rem;
    }
    .vertical-timeline-element-content p {
      font-size: 16px;
      font-size: 1rem;
    }
    .vertical-timeline-element-content .vertical-timeline-element-date {
      font-size: 14px;
      font-size: 0.875rem;
    }
  }
  @media only screen and (min-width: 1170px) {
    .vertical-timeline--two-columns .vertical-timeline-element-content {
      margin-${float}: 0;
      padding: 1.5em;
      width: 44%;
    }
    .vertical-timeline--two-columns .vertical-timeline-element-content-arrow {
      top: 24px;
      ${float}: 100%;
      transform: rotate(180deg);
    }
    .vertical-timeline--two-columns
      .vertical-timeline-element-content
      .vertical-timeline-element-date {
      position: absolute;
      width: 100%;
      ${float}: 124%;
      top: 6px;
      font-size: 16px;
      font-size: 1rem;
      text-align: ${float};
    }
    .vertical-timeline--two-columns
      .vertical-timeline-element.vertical-timeline-element--right
      .vertical-timeline-element-content,
    .vertical-timeline--two-columns
      .vertical-timeline-element:nth-child(even):not(.vertical-timeline-element--left)
      .vertical-timeline-element-content {
      float: ${revFloat};
    }
    .vertical-timeline--two-columns
      .vertical-timeline-element.vertical-timeline-element--right
      .vertical-timeline-element-content-arrow,
    .vertical-timeline--two-columns
      .vertical-timeline-element:nth-child(even):not(.vertical-timeline-element--left)
      .vertical-timeline-element-content-arrow {
      top: 24px;
      ${float}: auto;
      ${revFloat}: 100%;
      transform: rotate(0);
    }
    .vertical-timeline--one-column-right
      .vertical-timeline-element.vertical-timeline-element--right
      .vertical-timeline-element-content-arrow,
    .vertical-timeline--one-column-right
      .vertical-timeline-element:nth-child(even):not(.vertical-timeline-element--left)
      .vertical-timeline-element-content-arrow {
      top: 24px;
      ${float}: 100%;
      ${revFloat}: auto;
      transform: rotate(0);
    }
    .vertical-timeline--two-columns
      .vertical-timeline-element.vertical-timeline-element--right
      .vertical-timeline-element-content
      .vertical-timeline-element-date,
    .vertical-timeline--two-columns
      .vertical-timeline-element:nth-child(even):not(.vertical-timeline-element--left)
      .vertical-timeline-element-content
      .vertical-timeline-element-date {
      ${float}: auto;
      ${revFloat}: 124%;
      text-align: ${revFloat};
    }
  }
  .vertical-timeline--animate .vertical-timeline-element-content.is-hidden {
    visibility: hidden;
  }
  .vertical-timeline--animate .vertical-timeline-element-content.bounce-in {
    visibility: visible;
    -webkit-animation: cd-bounce-2 0.6s;
    -moz-animation: cd-bounce-2 0.6s;
    animation: cd-bounce-2 0.6s;
  }
  @media only screen and (min-width: 1170px) {
    .vertical-timeline--two-columns.vertical-timeline--animate
      .vertical-timeline-element.vertical-timeline-element--right
      .vertical-timeline-element-content.bounce-in,
    .vertical-timeline--two-columns.vertical-timeline--animate
      .vertical-timeline-element:nth-child(even):not(.vertical-timeline-element--left)
      .vertical-timeline-element-content.bounce-in {
      -webkit-animation: cd-bounce-2-inverse 0.6s;
      -moz-animation: cd-bounce-2-inverse 0.6s;
      animation: cd-bounce-2-inverse 0.6s;
    }
  }
  @media only screen and (max-width: 1169px) {
    .vertical-timeline--animate .vertical-timeline-element-content.bounce-in {
      visibility: visible;
      -webkit-animation: cd-bounce-2-inverse 0.6s;
      -moz-animation: cd-bounce-2-inverse 0.6s;
      animation: cd-bounce-2-inverse 0.6s;
    }
  }
  @-webkit-keyframes cd-bounce-2 {
    0% {
      opacity: 0;
      -webkit-transform: translateX(-100px);
    }
    60% {
      opacity: 1;
      -webkit-transform: translateX(20px);
    }
    100% {
      -webkit-transform: translateX(0);
    }
  }
  @-moz-keyframes cd-bounce-2 {
    0% {
      opacity: 0;
      -moz-transform: translateX(-100px);
    }
    60% {
      opacity: 1;
      -moz-transform: translateX(20px);
    }
    100% {
      -moz-transform: translateX(0);
    }
  }
  @keyframes cd-bounce-2 {
    0% {
      opacity: 0;
      -webkit-transform: translateX(-100px);
      -moz-transform: translateX(-100px);
      -ms-transform: translateX(-100px);
      -o-transform: translateX(-100px);
      transform: translateX(-100px);
    }
    60% {
      opacity: 1;
      -webkit-transform: translateX(20px);
      -moz-transform: translateX(20px);
      -ms-transform: translateX(20px);
      -o-transform: translateX(20px);
      transform: translateX(20px);
    }
    100% {
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }
  @-webkit-keyframes cd-bounce-2-inverse {
    0% {
      opacity: 0;
      -webkit-transform: translateX(100px);
    }
    60% {
      opacity: 1;
      -webkit-transform: translateX(-20px);
    }
    100% {
      -webkit-transform: translateX(0);
    }
  }
  @-moz-keyframes cd-bounce-2-inverse {
    0% {
      opacity: 0;
      -moz-transform: translateX(100px);
    }
    60% {
      opacity: 1;
      -moz-transform: translateX(-20px);
    }
    100% {
      -moz-transform: translateX(0);
    }
  }
  @keyframes cd-bounce-2-inverse {
    0% {
      opacity: 0;
      -webkit-transform: translateX(100px);
      -moz-transform: translateX(100px);
      -ms-transform: translateX(100px);
      -o-transform: translateX(100px);
      transform: translateX(100px);
    }
    60% {
      opacity: 1;
      -webkit-transform: translateX(-20px);
      -moz-transform: translateX(-20px);
      -ms-transform: translateX(-20px);
      -o-transform: translateX(-20px);
      transform: translateX(-20px);
    }
    100% {
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
    }
  }

  .vertical-timeline-element-date {
    opacity: 1 !important;
  }
`;
