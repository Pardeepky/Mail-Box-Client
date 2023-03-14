import { mailSliceAction } from "./mailSlice";

export const sendMailHandler = (mailobj) => {
    return async (disptach) => {
        let emailId = await mailobj.email.replace(/[&@.]/g, "");

        const postMail = async () => {
            const response = await fetch(
                `https://mail-box-client-50996-default-rtdb.firebaseio.com/${emailId}.json`,
                {
                    method: "POST",
                    body: JSON.stringify(mailobj),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            const data = await response.json();
            if (data.error) {
                throw new Error("failed");
            }
            return data;
        };
        try {
            await postMail();
            disptach(mailSliceAction.setSentData());
            disptach(getMailHandler());
        } catch (error) {
            console.log(error.message);
        }
    };
};

export const getMailHandler = () => {
    return async (disptach) => {
        let emailId = JSON.parse(localStorage.getItem("mailId").replace(/[&@.]/g, ""));

        const getMail = async () => {
            const response = await fetch(
                `https://mail-box-client-50996-default-rtdb.firebaseio.com/${emailId}.json`);
            const data = await response.json();
            if (data.error) {
                throw new Error("failed");
            }
            return data;
        };
        try {
            const data = await getMail();
            const mailList = [];
            for (const key in data) {
                const Obj = {
                    id: key,
                    ...data[key],
                };
                mailList.push(Obj);
            }
            disptach(mailSliceAction.updateCount(mailList));
            disptach(mailSliceAction.updateMailList(mailList));
        } catch (error) {
            console.log(error.message);
        }
    };
};

export const getMailByIdHandler = (id) => {
    return async (disptach) => {
        let emailId = JSON.parse(localStorage.getItem("mailId").replace(/[&@.]/g, ""));

        const getMail = async () => {
            const response = await fetch(`https://mail-box-client-50996-default-rtdb.firebaseio.com/${emailId}/${id}.json`);
            const data = await response.json();
            if (data.error) {
                throw new Error("failed");
            }
            return data;
        };
        try {
            const data = await getMail();
            disptach(updateItemById(data, id));
        } catch (error) {
            console.log(error.message);
        }
    };
};

export const updateItemById = (item, id) => {
    return async (dispatch) => {
        let emailId = JSON.parse(localStorage.getItem("mailId").replace(/[&@.]/g, ""));

        const UpdateEmailList = async () => {
            const response = await fetch(
                `https://mail-box-client-50996-default-rtdb.firebaseio.com/${emailId}/${id}.json`,
                {
                    method: "PATCH",
                    body: JSON.stringify({
                        email: item.email,
                        subject: item.subject,
                        editor: item.editor,
                        read: true,
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            const data = await response.json();
            if (data.error) {
                throw new Error("faild");
            }
            return data;
        };
        try {
            await UpdateEmailList();
        } catch (error) {
            console.log(error);
        }
    };
};