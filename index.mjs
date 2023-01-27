import fetch from "node-fetch";
import inquirer from "inquirer";

const fetchData = async () => {
    const req = await fetch('https://svatkyapi.cz/api/day');
    const data = await req.json();
    return data;
};

(async () => {
    const data = await fetchData();

    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    });   
    
    const showMenu = () => {
        inquirer
        .prompt([{
            name: 'menu',
            type: 'list',
            choices: ['[0]  Dnešní den', '[1]  Dnešní datum', '[2]  Kdo má dneska svátek?', '[3]  Vypsat vše', '[4]  Konec'],
        }
        ]
        ).then((answer) => {
            switch (answer.menu) {
                case '[0]  Dnešní den':
                    console.log(`Dneska je: ${data.dayInWeek}`);
                    return showMenu();

                case '[1]  Dnešní datum':
                    console.log(`Dnešní datum: ${(data.dayNumber) + '.' + (data.monthNumber) + '.'}`);
                    return showMenu();

                case '[2]  Kdo má dneska svátek?':
                    console.log(`Dneska má svátek ${data.name}`);
                    return showMenu();

                case '[3]  Vypsat vše':
                    console.log(`Dneska je: ${data.dayInWeek}`);
                    console.log(`Dnešní datum: ${(data.dayNumber) + '.' + (data.monthNumber) + '.'}`);
                    console.log(`Dneska má svátek ${data.name}`);
                    return showMenu();

                case '[4]  Konec':
                    console.log('Konec programu');
                    process.exit();
            }
        })
    }

    showMenu();
    

})();


