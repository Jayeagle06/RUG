async function getRandomUser(){
    const response= await fetch('https://randomuser.me/api/');
    const data = await response. json();
    const user = data.results [0];
    console.log(user);
    displayUser(user);

}
function displayUser(user){
    const Name = document.getElementById('Name');
    const Gender = document.getElementById('Gender');
    const Email = document.getElementById('Email');
    const Phone = document.getElementById('Phone');
    const Country = document.getElementById('Country');
    const image = document.getElementById('image')

    Name.innerText =`${user.name.title} ${user.name.first} ${user.name.last}`;
    Gender.innerText =`${user.Gender}`;
    Email.innerText =`${user.Email}`;
    Phone.innerText =`${user.Phone}`;
    Country.innerText = `${user.Country}`;
    image.setAttribute('src',`${user.picture.large}`);
}
getRandomUser();