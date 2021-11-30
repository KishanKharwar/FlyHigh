export const COLORS = {
    white : "#ffffff",
    paleBlack : "#312D2D",
    primary : "#FFD80A",
    darkAsh :  "#565656"
}

export const VARIANT = {
    outlined : "outlined",
    filled : "filled",
    contained : "contained",
    standard : "standard",
    h1 : "h1",
    h2 : "h2",
    h3 : "h3",
    h4 : "h4",
    h5 : "h5",
    h6 : "h6",
}

export const HELPER_TEXT = {
    requiredField : "Please fill the required field",
    validEmail : "Please enter valid e-mail"
}

export const userData = JSON.parse(window.sessionStorage.getItem("user"));
export const userRole = window.sessionStorage.getItem("role")