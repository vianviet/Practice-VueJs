import store from "@/store";

const eachMessageDto = (messageData: any) => {
  return {
    title: messageData?.email,
    message: messageData?.message,
    isUser: store.state.email === messageData?.email,
    image: messageData?.avatar,
    time: messageData.create_date,
    uploaded: true,
  };
};

export const messageDtos = (messageArray: Array<any>) => {
  return messageArray.map((each: any) => eachMessageDto(each));
};
