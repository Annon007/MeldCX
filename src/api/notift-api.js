export const NOTIFY = async data => {
    try {
        const sendReq = fetch("http://35.201.2.209:8000/notify", {
            method: "POST",
            headers: {
                "Authorization": `bearer ${localStorage.getItem("MeldCX_Token")}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const promise = await sendReq;
        if (!promise.ok) {
            const res = await promise.text();
            return {
                error: res,
                status: promise.status
            }
        }
        const res = await promise.text();

        return {
            msg: res,
            status: promise.status
        }
    } catch (err) {

    }
}