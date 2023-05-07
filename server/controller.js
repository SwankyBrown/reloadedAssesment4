database = []
module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getRage: (req, res) => {
        const rage = ["AHHHHHHHHHHHHHH!", "RAAAAAAAAAAAAAAH!", "REEEEEEEEEEEEEEEEEEEEEEEEEE!","NAH NAH AHHHHHHHHHHHHH!","RAAAAAAAAGE CAAAAAAAAGE!"];
      
        
        let randomIndex = Math.floor(Math.random() * rage.length);
        let randomRage = rage[randomIndex];
      
        res.status(200).send(randomRage);
    }

}