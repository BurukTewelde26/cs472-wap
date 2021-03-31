function makeFunc() {
    const name = "Mozilla"; //local to makeFunc
    function displayName() {
    console.log(name);
    }
    return displayName;
    }
    const myFunc = makeFunc();
    myFunc();
    