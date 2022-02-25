export const LOGIN = async (data) => {
    console.log("RUNNING")
    try {
        const sendReq = fetch("http://35.201.2.209:8000/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        const promise = await sendReq;
        if (!promise.ok) {
            const res = await promise.text();
            return {
                error: res,
                errorStatus: promise.status
            }

        }
        const res = await promise.text();
        return {
            token: res,
            status: promise.status
        }
    } catch (err) {

    }
}