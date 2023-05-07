const complimentBtn = document.getElementById("complimentButton")
const rageBtn = document.getElementById("rageButton")
const postName = document.getElementById("post-name")
const postForm = document.getElementById('post-form')




const getCompliment = () => {
    axios.get("http://localhost:4001/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getRage = () => {
    axios.get("http://localhost:4001/api/Rage/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)
rageBtn.addEventListener('click', getRage)