export default {
    bind() {
        console.log('Bind')
    },
    update(oldValue, newValue) {
        console.log(oldValue, newValue)
    },
    unbind() {
        console.log('UnBind')
    }
}