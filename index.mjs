import fetch from "node-fetch";

const fetchData = async () => {
    const req = await fetch('https://svatkyapi.cz/api/day');
    const data = await req.json();
    return data;
};

(async () => {
    const data = await fetchData();
    console.log(`Dnešní datum: ${(data.dayNumber) + '.' + (data.monthNumber) + '.'}`);
    console.log(`Den: ${(data.dayInWeek)}`);
    console.log(`Svátek má: ${data.name}`);
})();
