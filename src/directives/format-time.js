export default function (app){
    app.directive('format-time',{
        mounted(el) {
            const textContext = el.textContext
            console.log(textContext);
            const timestamp = parseInt(textContext)
            console.log(timestamp);
        } 
    })
}