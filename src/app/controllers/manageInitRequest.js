
/* Done : Health Check response server details */
export async function healthCheck(req, res ) {
    var presentDate = Date.now();
    res.send('faraday backend service is running time : ' + presentDate)
}
