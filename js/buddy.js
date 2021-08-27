const loadBuddy = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayBuddy(data))
};

loadBuddy ();

const displayBuddy = (data) => {
    const buddyies = data.results;
    const buddyiesDiv = document.getElementById('buddies');
    for(const buddy of buddyies){
        console.log(buddy);
        const p = document.createElement('p')
        p.innerText = `name : ${buddy.name.title}  ${buddy.name.first} ${buddy.name.last} email: ${buddy.email}`
        buddyiesDiv.appendChild(p)
    }
}