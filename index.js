function taskOne (callback) {

    document.write("task1"+ "<br/>");
    callback();
}
function taskTwo (callback) {

   setTimeout(() => {
    document.write("task2 .Data loading"+ "<br/>");
    callback()
   }, 3000);
   
}
function taskThree(callback) {

    document.write("task3"+ "<br/>");
    callback();
}
function taskFour (callback) {

    document.write("task4"+ "<br/>");
    callback()
}
function taskFive () {

    document.write("task5"+ "<br/>");
}

taskOne( () =>  {
    taskTwo(
        () => {
            taskThree(
                () => {
                    taskFour(
                        ()=> {
                            taskFive()
                        }
                    )
                }
            );
        }
    );

});





