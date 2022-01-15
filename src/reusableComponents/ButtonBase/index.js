import React from 'react';
import Styles from "./Styles";
function ButtonBase({ children, ...props }) {
    return (
        <Styles.button_box {...props}>
            {children}
        </Styles.button_box>
    )
}

export default ButtonBase;