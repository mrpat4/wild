/*eslint-disable */
import React, { Children } from "react";
import { Div_address_head, Div_form_body_wrapper, Form_address, Div_form_row, Div_address_footer, Div_show_error } from "./Styles";
// import messages from 'containers/ProfilePage/messages';
// import { FormattedMessage } from 'react-intl';
import CloseIcon from "../../components/ui/icons/CloseIcon";
// import { Button } from 'react-bootstrap';
import LoadingDot1 from "../../components/ui/loading/LoadingDot1";
import BasicButton from "components/ui/button/BasicButton";
import ErrorMessage from "components/ui/ErrorMessage";
export default function AddressForm({ t, error, type, acceptInfo, closeTitle, onClick, headTitle, countriesArray, forAppend, change, address, contactName, country, city, zipCode, loading }) {
  return (
    <Form_address onSubmit={(e) => e.preventDefault()}>
      <Div_address_head>
        <span> {headTitle}</span>

        <CloseIcon onClick={onClick} width="10px" />
      </Div_address_head>

      <Div_form_body_wrapper>
        <Div_form_row>
          <label>{t("profile.address.contact-name")}</label>
          <input value={contactName} onChange={(e) => change("contactName", e.target.value)} />
        </Div_form_row>
        <Div_form_row>
          <label>{t("global.country")}</label>
          <select value={country} onChange={(e) => change("country", e.target.value)}>
            {Children.toArray(
              countriesArray.map((country) => {
                return <option value={country.key}>{country.value}</option>;
              })
            )}
          </select>
        </Div_form_row>

        <Div_form_row>
          <label>{t("global.city")}</label>
          <input value={city} onChange={(e) => change("city", e.target.value)} />
        </Div_form_row>

        <Div_form_row>
          <label>{t("global.zip-code")}</label>
          <input value={zipCode} onChange={(e) => change("zipCode", e.target.value)} />
        </Div_form_row>
        <Div_form_row>
          <label>{t("global.address")}</label>
          <input value={address} onChange={(e) => change("address", e.target.value)} />
        </Div_form_row>

        {forAppend ? (
          <Div_form_row>
            <label>
              {t("global.type")}
              {/* <FormattedMessage {...messages.type} />{' '} */}
            </label>
            <select value={type} onChange={(e) => change("type", e.target.value)}>
              <option value={"BILLING"}>{t("global.billing")}</option>

              <option value={"SHIPPING"}>{t("global.shipping")}</option>
            </select>
          </Div_form_row>
        ) : (
          ""
        )}
      </Div_form_body_wrapper>

      <Div_address_footer>
        <ErrorMessage danger show={error} title={t("global.error-form-complete")} />

        <BasicButton variant="secondary" onClick={onClick || null} title={closeTitle}></BasicButton>
        <BasicButton success onClick={acceptInfo.click || null} title={loading ? <LoadingDot1 width={"20px"} height={"20px"} /> : acceptInfo.title}></BasicButton>
      </Div_address_footer>
    </Form_address>
  );
}
