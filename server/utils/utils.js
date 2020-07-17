function message(name, message){
    return {
        name, 
        message, 
        date: Date.now()
    }
}


module.exports = {
    message
};