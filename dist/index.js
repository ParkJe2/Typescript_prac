"use strict";
function createStudent(name, age, korean, math, society, science, english) {
    return {
        name,
        age,
        scores: {
            korean,
            math,
            society,
            science,
            english,
        },
    };
}
// 학점 부여 함수
// 평균 점수를 매개 변수로 받아 학점을 문자열로 리턴
// 90점 이상 -> A, 80점 이상 -> B, 70점 이상 -> C, 60점 이상 -> D, 그 이하 -> F
function assignGrade(average) {
    if (average >= 90) {
        return "A";
    }
    else if (average >= 80) {
        return "B";
    }
    else if (average >= 70) {
        return "C";
    }
    else if (average >= 60) {
        return "D";
    }
    else {
        return "F";
    }
}
function calculateAverage(student) {
    const sum = student.scores.korean +
        student.scores.math +
        student.scores.society +
        student.scores.science +
        student.scores.english;
    const average = sum / Object.keys(student.scores).length;
    return average;
}
function printResult(student) {
    const average = calculateAverage(student); // 평균 계산
    const grade = assignGrade(average); // 계산된 평균을 기준으로 학점을 추출
    console.log(`${student.name} (${student.age}세) - 평균: ${average.toFixed(2)}, 학점: ${grade}`);
}
function main() {
    const spartan = createStudent("Spartan", 30, 95, 89, 76, 90, 97);
    printResult(spartan);
}
main();
