/* jab bhi koi endpoint par api banate hai tab try-catch likhte hai, har endpoint banate 
samaye try-catch n likhna pade iske ye ye method banaye hai, ye method har endpoint ke 
async function me call karte hai
*/
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}

export {asyncHandler}











// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}

    // const asyncHandler = (fn) => async (req, res, next) =>{
    //     try {
    //         await fn(req, res, next)
    //     }catch (error) {
    //         res.status(err.code || 500).json({
    //             success: false,
    //             message: err.message
    //         })
    //     }
    // }