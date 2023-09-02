function filterEmployees(data, criteriaInput) {
    let employees = JSON.parse(data);
    let [criteria, criteriaValue] = criteriaInput.split('-');
    let count = 0;
    let isFilter = true;
    let filterEmployees = [];

    for (let employee of employees) {
        for (let info in employee) {
            if (info === criteria && employee[info] === criteriaValue) {
                let result = `${count}. ${employee['first_name']} ${employee['last_name']} - ${employee['email']}`;
                filterEmployees.push(result);
                count++;
            } else if (criteria === 'all') {
                isFilter = false;
                break;
            }
        }

        if (!isFilter) {
            let result = `${count}. ${employee['first_name']} ${employee['last_name']} - ${employee['email']}`;
            filterEmployees.push(result);
            count++;
        }
    }

    filterEmployees.forEach(e => console.log(e));
}