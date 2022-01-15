import React from 'react';
// import { FormattedMessage } from 'react-intl';
import {
  Ul_steps_container,
  Li_step_wrapper,
  Div_circle__with_title,
  Span_circle,
  Span_border,
} from './Styles';
// import messages from './messages';

export default function StepsRoad({ stepStatus }) {
  if (!stepStatus) return
  return (
    <Ul_steps_container>
      <Li_step_wrapper active={stepStatus.sending}>
        <Div_circle__with_title className="dirColumn alignCenter">
          <div>
            {/* <FormattedMessage {...messages.sending} /> */}
          </div>
          <Span_circle active={stepStatus.sending} />
        </Div_circle__with_title>
        <Span_border active={stepStatus.pay} />
      </Li_step_wrapper>
      <Li_step_wrapper active={stepStatus.pay}>
        <Div_circle__with_title className="dirColumn alignCenter">
          <div>
            {/* <FormattedMessage {...messages.pay} /> */}
          </div>
          <Span_circle active={stepStatus.pay} />
        </Div_circle__with_title>
        <Span_border active={stepStatus.end} />
      </Li_step_wrapper>
      <Li_step_wrapper active={stepStatus.end} >
        <Div_circle__with_title className="dirColumn alignCenter">
          <div>
            {/* <FormattedMessage {...messages.end} /> */}
          </div>
          <Span_circle active={stepStatus.end} />
        </Div_circle__with_title>
      </Li_step_wrapper>
    </Ul_steps_container>
  );
}
