import { message } from "antd";

export const success = (messageValue) => {
    message.success(messageValue);
};

export const error = (messageValue) => {
    message.error(messageValue);
};

export const warning = (messageValue) => {
    message.warning(messageValue);
};
