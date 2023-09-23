function Grade(marks) {
    if (marks >= 90) {
        return 'A+';
    }
    else if (marks >= 80) {
        return 'A';
    }
    else if (marks >= 70) {
        return 'B';
    }
    else if (marks >= 60) {
        return 'C';
    }
    else if (marks >= 50) {
        return 'D';
    }
    else {
        return 'F';
    }
}
function calGrades() {
    var subject1 = parseFloat(prompt("Enter marks for subject 1:") || "0");
    var subject2 = parseFloat(prompt("Enter marks for subject 2:") || "0");
    var subject3 = parseFloat(prompt("Enter marks for subject 3:") || "0");
    var subject4 = parseFloat(prompt("Enter marks for subject 4:") || "0");
    var subject5 = parseFloat(prompt("Enter marks for subject 5:") || "0");
    var total = subject1 + subject2 + subject3 + subject4 + subject5;
    var averageMarks = (subject1 + subject2 + subject3 + subject4 + subject5) / 5;
    var grade = Grade(averageMarks);
    alert("Your Total Marks is:".concat(total, "\nYour Average is: ").concat(averageMarks.toFixed(2), "\nYour Grade: ").concat(grade));
}
calGrades();
