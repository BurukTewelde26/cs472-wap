/**
 * app.js
 */
"use strict";
window.onload = function() {
    let currentRowId = 2;
    const formNewAccount = document.querySelector("#formCourseReg");
    formNewAccount.addEventListener("submit", 
        event => {
            event.preventDefault();
            const txtStudentId = document.querySelector("#txtStudentId");
            const txtFullName = document.querySelector("#txtFullName");
            const courseType = document.querySelector("#choiceCourse");
            const strStudentId = txtStudentId.value;
            const strFullName = txtFullName.value;
            const strCourseType = courseType.value;
            addNewRegistrationDataRow(strStudentId, strFullName,strCourseType);
            txtStudentId.value = "";
            txtFullName.value = "";
            courseType["selectedIndex"] = 0;
            txtStudentId.focus();
    });
    const addNewRegistrationDataRow = function(studentId, fullName,coursesType) {
        const tblRegistrations = document.querySelector("#tblRegistrations");
        const newRow = tblRegistrations.insertRow(-1);
        const newCellRowId = newRow.insertCell(0);
        const strNewRowId = document.createTextNode(`${++currentRowId}.`);
        newCellRowId.appendChild(strNewRowId);
        const newCellStudentId = newRow.insertCell(1);
        const strNewRowStudentId = document.createTextNode(`${studentId}`);
        newCellStudentId.appendChild(strNewRowStudentId);
        const newCellFullName = newRow.insertCell(2);
        const strNewRowFullName = document.createTextNode(`${fullName}`);
        newCellFullName.appendChild(strNewRowFullName);

        const newCellCourse = newRow.insertCell(3);
        const strNewRowCourseType = document.createTextNode(`${coursesType}`);
        newCellCourse.appendChild(strNewRowCourseType);
    
    }
}