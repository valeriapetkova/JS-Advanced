class Company {
    constructor () {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || !salary || !position || !department || salary < 0) {
            throw new Error('Invalid input!');
        }
        let employee = {
            name,
            salary: Number(salary),
            position
        }
        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = [];
        }
        this.departments[department].push(employee);
        this.departments[department].sort((a, b) => {
            return b.salary - a.salary || (a.name).localeCompare(b.name);
        });
        return `New employee is hired. Name: ${employee.name}. Position: ${employee.position}`;
    }

    bestDepartment() {
        let highestAvgSalary = 0;
        let bestDepartment = '';
        for (let department in this.departments) {
            let totalSalary = 0;
            let employeesCount = 0;
            for (let employee of this.departments[department]) {
                totalSalary += employee.salary;
                employeesCount++;
            }
            let avgSalary = totalSalary / employeesCount;

            if (avgSalary > highestAvgSalary) {
                highestAvgSalary = avgSalary;
                bestDepartment = department;
            }
        }

        let result = '';
        for (let i = 0; i < this.departments[bestDepartment].length; i++) {
            if (i === this.departments[bestDepartment].length - 1) {
                result += `${(this.departments[bestDepartment][i]).name} ${(this.departments[bestDepartment][i]).salary} ${(this.departments[bestDepartment][i]).position}`;
            } else {
                result += `${(this.departments[bestDepartment][i]).name} ${(this.departments[bestDepartment][i]).salary} ${(this.departments[bestDepartment][i]).position}\n`;
            }
        }

        return `Best Department is: ${bestDepartment}\nAverage salary: ${highestAvgSalary.toFixed(2)}\n${result}`;
    }
}