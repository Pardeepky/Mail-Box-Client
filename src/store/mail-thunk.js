import { mailSliceAction } from "./mailSlice";

export const sendMailHandler = (mailobj) => {
    return async (Disptach) => {
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
            Disptach(mailSliceAction.setSentData());
        } catch (error) {
            console.log(error.message);
        }
    };
};

export const getMailHandler = () => {
    return async (Disptach) => {
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
            Disptach(mailSliceAction.updateMailList(mailList));
        } catch (error) {
            console.log(error.message);
        }
    };
};