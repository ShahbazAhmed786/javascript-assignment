
function Grade(marks: number) {
    if (marks >= 90) {
      return 'A+';
    } else if (marks >= 80) {
      return 'A';
    } else if (marks >= 70) {
      return 'B';
    } else if (marks >= 60) {
      return 'C';
    } else if (marks >= 50) {
      return 'D';
    } else {
      return 'F';
    }
  }
  
  function calGrades(): void {
    let subject1: number = parseFloat(prompt("Enter marks for subject 1:") || "0");
    let subject2: number = parseFloat(prompt("Enter marks for subject 2:") || "0");
    let subject3: number = parseFloat(prompt("Enter marks for subject 3:") || "0");
    let subject4: number = parseFloat(prompt("Enter marks for subject 4:") || "0");
    let subject5: number = parseFloat(prompt("Enter marks for subject 5:") || "0");
  let total=subject1+subject2+subject3+subject4+subject5
    let averageMarks: number = (subject1 + subject2 + subject3 +subject4 +subject5) / 5;
  
    let grade: string = Grade(averageMarks);
  
    alert(`Your Total Marks is:${total}\nYour Average is: ${averageMarks.toFixed(2)}\nYour Grade: ${grade}`);
  }
  
  calGrades();